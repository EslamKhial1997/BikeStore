
const { cloudinaryConfig } = require("../Config/cloudinary");

exports.uploadImageToCloudinary = async (file, publicId, path) => {
  log
  try {
    const result = await cloudinaryConfig.uploader.upload(
      file,
      {
        folder: path,
        public_id: publicId,
        overwrite: true,
      },
      (error, result) => {
        if (error) {
          return {
            success: false,
            statusCode: 500,
            message: "something went wrong, could not upload media !",
          };
        }
      }
    );
    return {
      success: true,
      statusCode: 201,
      message: "success",
      data: result.url,
    };
  } catch (err) {
    return {
      success: false,
      statusCode: 500,
      message: err.message,
    };
  }
};


