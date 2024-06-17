import { v2 as cloudinary } from "cloudinary";
import expressAsyncHandler from "express-async-handler";

export default UploadToCloudinary = expressAsyncHandler(async(req , res)=>{
    const uploadResult = await cloudinary.uploader
    .upload(file, {
      public_id: "shoes",
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(uploadResult);
})

