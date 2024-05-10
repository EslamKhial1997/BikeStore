const { Schema } = require("mongoose");


const createOrderSchema = new Schema({
user:{
    type:Schema.ObjectId,
    ref: "Category",
    required: [true, "SubCategory must belong to a Category"],
}
},{
    timestamps: true
})