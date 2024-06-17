const mongoose = require("mongoose");

const createChatSchema = new mongoose.Schema(
  {
   message: String,
  
  }, 
  { timestamps: true }
);


const createBrandsModel = mongoose.model("Chat", createBrandsSchema);
module.exports = createBrandsModel;
