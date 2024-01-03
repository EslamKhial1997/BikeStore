const mongoose = require('mongoose');

const createSubCategories = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique: true,
        minlength: [3, "Name Too Short"],
        maxlength: [32, "Name Too long"],
    }
})