const { Schema } = require("mongoose");


const createOrderSchema = new Schema({
user:{
    type:Object
}
},{
    timestamps: true
})