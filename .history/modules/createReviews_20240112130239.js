const { Mongoose } = require("mongoose");


const createReviews = new Mongoose({
    title:{
        type:String,
        
    },
    rating:{
        type:Number,
        require:[true , "Review Ratings Is Required"],
        
    },
    minlength:[1 , "Review Ratings Must Be between 1 to 5"],
    maxLength:[1 , "Review Ratings Must Be between 1 to 5"]
},{timestamps: true})