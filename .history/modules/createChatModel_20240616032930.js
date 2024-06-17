const mongoose = require("mongoose");

const createChatSchema = new mongoose.Schema(
 {}
  { timestamps: true }
);


const createChatModel = mongoose.model("Chat", createChatSchema);
module.exports = createChatModel;
