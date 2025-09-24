const db = require('../config/db')
const mongoose = require('mongoose')
const {Schema} = mongoose;

const ItemSchema = new Schema ({
     pName: {
       type: String,
        required: true ,
    },
    pCode: {
       type: String,
        required: true ,
    },
     price: {
        type: Number,
        required:true,

    },
     cost: {
        type: Number,
        required:true,

    },
    
    nBox: {
        type: Number,
        required:true,

    },
     cItems: {
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
});

const SaleSchema = new Schema ({

items: [ItemSchema],
tItems: {
    type: Number,
    required: true,
},
tBox: {
    type: Number,
    required: true,
},
oDiscount: {
    type: Number,
    required: true,
},
remarks: {
    type: String,
    required: true,
},
tax: {
    type: Number,
    required: true,
},
tBill: {
    type: Number,
    required: true,
},
iNumber: {
    type: Number,
    required: true,
},
editedBillNumber: {
    type: String,
    required: true,
},
cName: {
    type: String,
    required: true,
},
shift: {
    type: String,
    required: true,
},
sDate: {
    type: String,
    required: true,
},
hour: {
    type: Number,
    required: true,
},
min: {
    type: Number,
    required: true,
},
payMethod: {
    type: String,
    required: true,
},

customerName: {
    type: String,
    required: true,
},


});



const  SaleModel = db.model('sale', SaleSchema);
module.exports =SaleModel
 ;