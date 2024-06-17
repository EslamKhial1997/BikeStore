const expressAsyncHandler = require("express-async-handler");
const {cloudinary} =require('cloudinary');

exports.UploadToCloudinary = expressAsyncHandler(
  async (req, res, next) => {
    const uploadResult = await cloudinary.uploader
      .upload(req.file.path, {
        public_id: "shoes",
      })
      .catch((error) => {
        console.log(error);
      });
    // next()
    console.log(uploadResult);
  }
);
