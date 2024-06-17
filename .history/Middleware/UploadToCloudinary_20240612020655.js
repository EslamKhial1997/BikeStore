const expressAsyncHandler = require("express-async-handler");
const { cloudinaryConfig } = require("../Config/cloudinary");

exports.UploadToCloudinary = expressAsyncHandler(async (req, res, next) => {
  console.log(req.body.image);
  const uploadResult = await cloudinaryConfig.uploader
    .upload(req.body.image, {
      public_id: "shoes",
    })
    .catch((error) => {
      // console.log(error);
    });
  // next()
  console.log(`uploadResult: ${uploadResult}`);
});
