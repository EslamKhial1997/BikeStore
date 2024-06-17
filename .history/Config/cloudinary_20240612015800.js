const   cloudinary  = require("cloudinary");
const dotenv = require("dotenv") ;  

dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: "145655938993728",
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});
console.log(process.env.CLOUDINARY_NAME); 
exports.cloudinaryConfig = cloudinary;     
