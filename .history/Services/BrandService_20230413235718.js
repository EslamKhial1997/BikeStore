const expressAsyncHandler = require("express-async-handler");
const slug = require("s")
exports.createBrands = expressAsyncHandler(async(req , res , next)=>{
    const {name} = req.body
    const createBrand = createBrandsModel.create({
        name , 
        slug:slugify(name)
    })
})