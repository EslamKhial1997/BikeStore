const mongoose = require('mongoose');

const createSubCategories = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique: true,
        minlength: [3, "Name Too Short"],
        maxlength: [32, "Name Too long"],
    },
    slug:{
        type:String,
        lowercase: true,
    },
    trim:true,
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"Products",
        required:[true , "Product is already required"]
    }
},{ timeStemps: true })
exports.mod