const { Schema } = require("mongoose");


const createOrderSchema = new Schema({
user:{
    type:Schema.ObjectId,
    ref: "User",
    required: [true, "User must belong "],
}
},{
    timestamps: true
})