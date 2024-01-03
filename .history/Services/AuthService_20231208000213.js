const expressAsyncHandler = require("express-async-handler");
const createUsersModel = require("../modules/createUsers");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ApiError = require("../Resuble/ApiErrors");
const crypto = require("crypto");
const sendCode = require("../Utils/SendCodeEmail");
exports.SingUp = expressAsyncHandler(async (req, res) => {
  const createAuth = await createUsersModel.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  const token = jwt.sign({ userId: createAuth._id }, process.env.SECRET_KEY, {
    expiresIn: "90d",
  });
  res.status(201).json({ data: createAuth, token });
});
exports.Login = expressAsyncHandler(async (req, res, next) => {
  const user = await createUsersModel.findOne({
    email: req.body.email,
  });
  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return next(new ApiError("InCorrect password Or Email"));
  }
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: "90d",
  });
  res.status(200).json({ data: user, token });
});
exports.protect = (...roles) =>
  expressAsyncHandler(async (req, res, next) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      next(new ApiError("Invalid authorization please login", 401));
    }

    const verify = jwt.verify(token, process.env.SECRET_KEY);
    const currentUser = await createUsersModel.findById(verify.userId);
    if (!currentUser) {
      next(new ApiError("User Not exist", 401));
    }
    // const passwordChangeTime = await createUsersModel.findById(verify.userId);
    // const Time = passwordChangeTime.passwordTimeUpdate.getTime() / 1000;
    // if (parseInt(Time) > verify.iat) {
    //   next(new ApiError("Please Login agian", 401));
    // }

    req.user = currentUser;
    if (!roles.includes(req.user.role.toString())) {
      return next(new ApiError("User Not Allowed This Route", 401));
    }
    next();
  });
exports.forgetPassword = expressAsyncHandler(async (req, res, next) => {
  const user = await createUsersModel.findOne({ email: req.body.email });
  if (!user) {
    return next(new ApiError(`This Email ${req.body.email} Not Exist `));
  }
  const digitCode = Math.floor(100000 + Math.random() * 900000).toString();
  var ciphertext = crypto.createHash("sha256").update(digitCode).digest("hex");

  user.passwordRResthashedCode = ciphertext;
  user.passwordRRestExpires = Date.now() + 10 * 60 * 1000;
  user.passwordRRestVerify = false;
  await user.save();
  await sendCode({
    subject: "Your Password Rest Code invalid For 10 mins",
    email: user.email,
    digitCode,
  });

  res
    .status(200)
    .json({ status: "success", massage: "Rest Code Sent successfully" });
});
exports.restCodeSent = expressAsyncHandler(async (req, res, next) => {
  const restcode = req.body.restCode.toString()
  var ciphertext = crypto
    .createHash("sha256")
    .update(restcode)
    .digest("hex");
  const user = await createUsersModel.findOne({
    passwordRResthashedCode: ciphertext,
    passwordRRestExpires: { $gt: Date.now() },
  });
  console.log(user, ciphertext);
  if (!user) {
    return next(new ApiError("Rest Code is Invalid Or Expired"));
  }
  user.passwordRRestVerify = true;
  await user.save();
  res.status(200).json({ status: "success" });
});
exports.restPassword = expressAsyncHandler(async(req , res , next)=>{
  const user = await createUsersModel.findOne({

    email: req.body.email
  });
})
if (!user) {
  return next(
    new ApiError(`There is no user with email ${req.body.email}`, 404)
  );
}

// 2) Check if reset code verified
if (!user.passwordResetVerified) {
  return next(new ApiError('Reset code not verified', 400));
}

user.password = req.body.password; 
user.passwordRResthashedCode = undefined;
user.passwordRRestExpires = undefined;
user.passwordRRestVerify = undefined;

await user.save();
