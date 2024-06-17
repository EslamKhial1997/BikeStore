const mongoose = require("mongoose");

const createBrandsSchema = new mongoose.Schema(
  {
   message: String,
  
  }, 
  { timestamps: true }
);


const createBrandsModel = mongoose.model("Chat", createBrandsSchema);
module.exports = createBrandsModel;
