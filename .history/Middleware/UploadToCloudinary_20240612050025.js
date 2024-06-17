const { cloudinaryConfig } = require("../Config/cloudinary");

exports.UploadToCloudinary = async(file, res, next) => {
  const uploadResult = await cloudinaryConfig.uploader
    .upload(file, {
      public_id: "shoes",
    }).then((res)=>{
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  // next()
  console.log(uploadResult);
};

