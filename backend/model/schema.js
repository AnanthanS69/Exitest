const mongoose = require('mongoose');
const Schema = mongoose.Schema({                                              
    name:{
        type:String,                                                         
        required:true
    }
});

const documentData = mongoose.model('Todolist',Schema);
module.exports = documentData;