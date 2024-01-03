const expressAsyncHandler = require("express-async-handler");
const createUsersModel = require("../modules/createUsers");
const factory = require("./FactoryHandler");
const bcrypt = require("bcrypt");
const { UploadSingleImage } = require("../Middleware/UploadImageMiddleware");
const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");
exports.uploadImage = UploadSingleImage("imageProfile");
exports.resizeImageUsers = expressAsyncHandler(async (req, res, next) => {
  if (req.file) {
    const imageProfileName = `imageProfile-${uuidv4()}-${Date.now()}.jpeg`;
    await sharp(req.file.buffer)
      .resize(2000, 1333)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toFile(`uploads/users/${imageProfileName}`);
    req.body.imageProfile = imageProfileName;
  }
    
  
  next();
});

exports.createUsers = factory.createOne(createUsersModel);
exports.getUsers = factory.getAll(createUsersModel);
exports.getUser = factory.getOne(createUsersModel);
exports.updateUser = expressAsyncHandler(async (req, res, next) => {
  const updateDocById = await createUsersModel.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      slug: req.body.name,
      email: req.body.email,
      imageProfile:req.body.imageProfile,
      phone: req.body.phone,
      role: req.body.role,
    },
    {
      new: true,
    }
  );
  if (!updateDocById)
    next(
      new ApiError(`Sorry Can't Update This ID From ID :${req.params.id}`, 404)
    );
  res.status(200).json({ data: updateDocById });
});
exports.deleteUser = factory.deleteOne(createUsersModel);

exports.updatePassword = expressAsyncHandler(async (req, res, next) => {
  const updateDocById = await createUsersModel.findByIdAndUpdate(
    req.params.id,
    {
      password: await bcrypt.hash(req.body.password, 12),
      passwordTimeUpdate:Date.now()
    },
    {
      new: true,
    }
  );
  if (!updateDocById)
    next(
      new ApiError(`Sorry Can't Update Password From ID :${req.params.id}`, 404)
    );
  res.status(200).json({ data: updateDocById });
});
exports.updateLoggedUserPassword = expressAsyncHandler(async (req, res) => {
  const user = await createUsersModel.findByIdAndUpdate(
    req.user.id,
    {
      password: await bcrypt.hash(req.body.password, 12),
      passwordTimeUpdate:Date.now()
    },
    {
      new: true,
    }
  );
})