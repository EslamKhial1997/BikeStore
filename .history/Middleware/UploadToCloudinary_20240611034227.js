import { v2 as cloudinary } from "cloudinary";

export default UploadToCloudinary = as
async (file) => {
  const uploadResult = await cloudinary.uploader
    .upload(file, {
      public_id: "shoes",
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(uploadResult);
};
