const { Schema } = require("mongoose");


const createOrderSchema = new Schema({
user:{
    type:Schema.ObjectId,
    ref: "User",
    required: [true, "SubCategory must belong to a Category"],
}
},{
    timestamps: true
})