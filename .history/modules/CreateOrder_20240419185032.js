const { Schema } = require("mongoose");


const createOrderSchema = new Schema({
user:{
    type:Schema.ObjectId
}
},{
    timestamps: true
})