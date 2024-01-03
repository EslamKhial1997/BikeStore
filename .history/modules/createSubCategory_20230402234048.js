const mongoose = require('mongoose');

const createSubCategories = mongoose.Schema({
    name:{
        type:String,
        require:true,
        
    }
})