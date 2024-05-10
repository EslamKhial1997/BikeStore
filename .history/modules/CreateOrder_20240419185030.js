const { Schema } = require("mongoose");


const createOrderSchema = new Schema({
user:{
    type:Schema.Object
}
},{
    timestamps: true
})