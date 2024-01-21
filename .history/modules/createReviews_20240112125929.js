const { Mongoose } = require("mongoose");


const createReviews = new Mongoose({
    title:{
        type:String,
        
    },
    rating:{
        type:Number,
        require:[true , "Review Ratings Is Required"],
        le
    }
},{})