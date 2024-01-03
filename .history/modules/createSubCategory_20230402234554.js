const mongoose = require('mongoose');

const createSubCategoris = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique: true,
        minlength: [3, "Name Too Short Name"],
        maxlength: [32, "Name Too long Name"],
        trim:true,
    },
    slug:{
        type:String,
        lowercase: true,
    },
    
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"Products",
        required:[true , "Product is already required"]
    }
},{ timeStemps: true })
exports.models = mongoose.model("SubCategory",createSubCategories)