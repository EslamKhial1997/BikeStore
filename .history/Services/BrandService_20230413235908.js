const expressAsyncHandler = require("express-async-handler");
const { default: slugify } = require("slugify/slugify");

exports.createBrands = expressAsyncHandler(async(req , res , next)=>{
    const {name} = req.body
    const createBrand = createBrands.create({
        name , 
        slug:slugify()
    })
})