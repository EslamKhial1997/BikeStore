import {v2 as cloudinary} from 'cloudinary';
default export.UploadToCloudinary =async (file)=>{
    const uploadResult = await cloudinary.uploader.upload(file, {
        public_id: "shoes"
    }).catch((error)=>{console.log(error)});
}

