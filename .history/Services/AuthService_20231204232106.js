const expressAsyncHandler = require("express-async-handler");
const createUsersModel = require("../modules/createUsers");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ApiError = require("../Resuble/ApiErrors");
const CryptoJS = require("crypto-js");
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
  const digitCode = Math.floor(1000 + Math.random() * 900000).toString();
  var ciphertext = CryptoJS.AES.encrypt(digitCode, 'secret key 123').toString();

  user.passwordRResthashedCode = ciphertext
  user.passwordRRestExpires = Date.now() + 10 * 60 *1000
  user.passwordRRestVerify = false
 await user.save()
 const massage = `Hi ${user.email} We Receved Password To Rest The Password on Bike Store ${}`
 await sendCode({digist :ciphertext , 
subject :"Your Password Rest Code valid For 10 mins"})
 res.status(200).json({status: 'success' , massage:"Rest Code Sent successfully"} , massage)
});
