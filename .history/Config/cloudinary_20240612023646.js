const cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv");

dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: "dhxhekwov",
  api_key: "145655938993728",
  api_secret: "aOy5bLZ9GxFui4EmVvyDVLutB7U",
});
exports.cloudinaryConfig = cloudinary;
