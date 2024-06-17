const expressAsyncHandler = require("express-async-handler");
const { cloudinaryConfig } = require("../Config/cloudinary");

exports.UploadToCloudinary = expressAsyncHandler(async (req, res, next) => {
  console.log(req.files);
  const uploadResult = await cloudinaryConfig.uploader
    .upload(req.file.path, {
      public_id: "shoes",
    })
    .catch((error) => {
      console.log(error);
    });
  // next()
  console.log(uploadResult);
});
