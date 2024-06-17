const mongoose = require("mongoose");

const createChatSchema = new mongoose.Schema(
  { from: String, to: String, message: String },
  { timestamps: true }
);

const createChatModel = mongoose.model("Chat", createChatSchema);
module.exports = createChatModel;
