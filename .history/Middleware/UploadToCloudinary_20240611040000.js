

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
