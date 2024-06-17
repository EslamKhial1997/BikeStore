// eslint-disable-next-line node/no-unsupported-features/es-syntax
import { v2 as cloudinary } from "cloudinary";
// eslint-disable-next-line node/no-unsupported-features/es-syntax
import dotenv from "dotenv";

dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});

// eslint-disable-next-line node/no-unsupported-features/es-syntax
export const cloudinaryConfig = cloudinary;     
