const db = require('../config/db')
const mongoose = require('mongoose')
const {Schema} = mongoose;

const UserSchema = new Schema ({


    userName:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    permissions: {
        product: Boolean,
        inventory: Boolean,
        expenses: Boolean,
        sale: Boolean,
        pref: Boolean,
        user: Boolean
    }

})

const  UserModel = db.model('user', UserSchema);
module.exports =UserModel
 ;