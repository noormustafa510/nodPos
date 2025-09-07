const db = require('../config/db')
const mongoose = require('mongoose')
const {Schema} = mongoose;

const PrefSchema = new Schema ({

    iNumber: {
    type: Number,
    required: true,
},
  phoneNumber: {
    type: String,
    required: true,
},

  mAddress: {
    type: String,
    required: true,
},


})

const  PrefModel = db.model('pref', PrefSchema);
module.exports =PrefModel