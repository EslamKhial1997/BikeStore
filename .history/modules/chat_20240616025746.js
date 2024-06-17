const mongoose = require("mongoose");

const createChatSchema = new mongoose.Schema(
  {
   message: String,
  
  }, 
  { timestamps: true }
);


const createChatModel = mongoose.model("Chat", createChatSchema);
module.exports = createBrandsModel;
