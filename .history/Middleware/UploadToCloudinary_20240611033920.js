import {v2 as cloudinary} from 'cloudinary';
const UploadToCloudinary =async (file)=>{
    const uploadResult = await cloudinary.uploader.upload(file, {
        public_id: "shoes"
    }).catch((error)=>{console.log(error)});
}

module.exports = UploadToCloudinary;
