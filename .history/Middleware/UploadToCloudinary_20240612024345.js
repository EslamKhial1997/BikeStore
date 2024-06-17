
const { cloudinaryConfig } = require("../Config/cloudinary");

exports.uploadImageToCloudinary = async (file, publicId, path) => {
  console.log(file);
  cloudinaryConfig.uploader.upload(imagePath, (error, result) => {
    if (error) {
      console.error('Error uploading image:', error);
    } else {
      console.log('Image uploaded successfully:', result);
    }
  });
};


