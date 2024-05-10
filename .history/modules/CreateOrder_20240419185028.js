const { Schema } = require("mongoose");


const createOrderSchema = new Schema({
user:{
    type:Schema.Obj
}
},{
    timestamps: true
})