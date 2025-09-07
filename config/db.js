const mongoose = require('mongoose');


const connection = mongoose.createConnection('mongodb://localhost:27017/pos').on('open', ()=>{
    console.log('MongoDB is connected');
}).on('error',()=>{
    console.log('Connection is failed');
});

module.exports = connection;