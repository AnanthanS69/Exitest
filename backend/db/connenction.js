const mongoose= require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb+srv://Exit-Test:exittest@cluster0.sgycstc.mongodb.net/')
.then(()=>{
    console.log(`Connection to Database established`)
})
.catch((error)=>{
    console.log(`Error in connecting to database ${error.message}`)
})

module.exports=db;