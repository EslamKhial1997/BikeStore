const { Schema } = require("mongoose");


const createOrderSchema = new Schema({
user:{
    type:mon.Schema.id
}
},{
    timestamps: true
})