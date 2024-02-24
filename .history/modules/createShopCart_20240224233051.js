const  mongoose  = require("mongoose");



const createSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "Users",
        require: [true, "User Id is Required"],
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Products",
    
      },
},{timestamps:true})