const UploadToCloudinary = (async)=>{
    const uploadResult = await cloud.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg", {
        public_id: "shoes"
    }).catch((error)=>{console.log(error)});
}