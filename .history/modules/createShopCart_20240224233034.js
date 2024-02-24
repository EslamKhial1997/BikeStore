const  mongoose  = require("mongoose");



const createSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        required: [true, "Cart must belong to a product"],
      },
},{timestamps:true})