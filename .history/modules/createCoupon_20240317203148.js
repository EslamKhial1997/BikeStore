const { Schema } = require("mongoose");



const createCoupon =new Schema({
name:String , 
expires:Date,
discount:String
},{timestamps:true})