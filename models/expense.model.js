const db = require('../config/db')
const mongoose = require('mongoose')
const {Schema} = mongoose;

const ExpenseSchema = new Schema ({
    name: {
       type: String,
        required: true ,
    },
    value: {
       type: Number,
        required: true ,
    },
    
    eDate: {
        type: String,
        required:true,

    },
   }); 

const expenseModel = db.model('expense', ExpenseSchema);
module.exports = expenseModel;
