const  mongoose  = require("mongoose");



const createCartSchema = new mongoose.Schema({
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

const createCartModel = mongoose.model("Reviews", createReviewsSchema);
module.exports = createCartModel;