const { Schema } = require("mongoose");


const createOrderSchema = new Schema({
user:{
    type:ObjectI
}
},{
    timestamps: true
})