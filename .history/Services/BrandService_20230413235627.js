const expressAsyncHandler = require("express-async-handler");

exports.createBrands = expressAsyncHandler(async(req , res , next)=>{
    const {name} = req.body
    const createBrand = createBrandsModel.create({
        name , 
        slug:sl(name)
    })
})