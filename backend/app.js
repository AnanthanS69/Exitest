const express= require ('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/route');

const app=express();
const db=require('./db/connenction');
app.use('/api', router);


app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:4200',
  }));

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server : https://localhost/${PORT}`)
});


