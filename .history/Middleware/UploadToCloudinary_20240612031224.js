
const { cloudinaryConfig } = require("../Config/cloudinary");

exports.uploadImageToCloudinary = async (file, publicId, path) => {

  cloudinaryConfig.uploader.upload(file, (error, result) => {
    if (error) {
      console.error('Error uploading image:', error);
    } else {
      console.log('Image uploaded successfully:', result);
    }
  });
};


