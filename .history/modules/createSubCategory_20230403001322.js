const mongoose = require('mongoose');

const createSubCategories = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique: true,
        minlength: [2, "Name Too Short Name"],
        maxlength: [32, "Name Too long Name"],
        trim:true,
    },
    slug:{
        type:String,
        lowercase: true,
    },
    
    ca:{
        type:mongoose.Schema.ObjectId,
        ref:"Products",
        required:[true , "Product is already required"]
    }
},{ timeStemps: true })
exports.models = mongoose.model("SubCategory",createSubCategories)