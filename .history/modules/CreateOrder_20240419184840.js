const { Schema } = require("mongoose");


const createOrderSchema = new Schema({
user:{
    type:Mongoose.Schema.id
}
},{
    timestamps: true
})