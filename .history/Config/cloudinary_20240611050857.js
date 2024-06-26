const { v2 as cloudinary } = require("cloudinary");
import dotenv from "dotenv";  

dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});

export const cloudinaryConfig = cloudinary;     
