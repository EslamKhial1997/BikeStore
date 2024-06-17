
// import cloudinary from "cloudinary"
// import dotenv from "dotenv"
// dotenv.config()



// // Configuration
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET_KEY,
// });
// export const cloudinaryConfig = cloudinary;
import cloudinary from "cloudinary"
import dotenv from "dotenv"
dotenv.config()
// cloudinary cloud configuration object 
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

export const cloudinaryConfig = cloudinary