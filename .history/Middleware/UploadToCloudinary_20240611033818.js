import {v2 as cloudinary} from 'cloudinary';
const UploadToCloudinary =async (file)=>{
    const uploadResult = await cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg", {
        public_id: "shoes"
    }).catch((error)=>{console.log(error)});
}