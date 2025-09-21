const db = require('../config/db')
const mongoose = require('mongoose')
const {Schema} = mongoose;


const InProductSchema = new Schema({
    pName: {
       type: String,
        required: true ,
    },
    pCode: {
       type: String,
        required: true ,
    },
    
    nBox: {
        type: Number,
        required:true,

    },

    nItems: {
        type: Number,
        required:true,
    }
    ,  discItem: {
        type: Number,
        required:true,
    }
    ,  itemBill: {
        type: Number,
        required:true,
    }
})

const InventorySchema = new Schema ({

items: [InProductSchema],
supName: {
    type: String,
    required: true,
},
iDate: {
    type: String,
    required: true,
},
onDiscount: {
    type: Number,
    required: true,
}

,tax: {
    type: Number,
    required: true,
},
bill: {
    type: Number,
    required: true,
}
})



const inventoryModel = db.model('inventory', InventorySchema);
module.exports =inventoryModel
 ;