const expressAsyncHandler = require("express-async-handler");
const slug = require("slugify")

exports.createBrands = expressAsyncHandler(async(req , res , next)=>{
    const {name} = req.body
    const createBrand = createBrandsModel.create({
        name , 
        
    })
})