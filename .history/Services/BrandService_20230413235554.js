const expressAsyncHandler = require("express-async-handler");

exports.createBrands = expressAsyncHandler(async(req , res , next)=>{
    const {}
    const createBrand = createBrandsModel.create({
        name , 
        slug:slugify(name)
    })
})