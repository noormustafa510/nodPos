const db = require('../config/db')
const mongoose = require('mongoose')
const {Schema} = mongoose;

const ProductSchema = new Schema ({
    name: {
       type: String,
        required: true ,
    },
    category: {
       type: String,
        required: true ,
    },
    
    qrCode: {
        type: String,
        unique: true,
        required:true,

    },
    price: {
        type: Number,
        required:true,
    },
    cost: {
        type: Number,
        required:true,
    },
    discount: {
        type: Number,
        required:true,
    },
    inventory: {
        type: Number,
        required:true,
    },
    bItems: {
        type: Number,
        required:true,
    },
    wNumber: {
        type: Number,
        required:true,
    },
    pExpiry: {
        type: String,
        required:true,
    },
    mUnit: {
        type: String,
        required:true,
    },
      sLocation: {
        type: String,
        required:true,
    },

}); 

const productModel = db.model('product', ProductSchema);
module.exports = productModel;
