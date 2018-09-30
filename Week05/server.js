console.log('I am from Server')
var fs=require('fs')
const bodyParser=require('body-parser');

const express = require('express');
//morgan is the logger middleware function using the given format and options
// Basically for log
const morgan = require('morgan');

//THE WAY TO LET CLIENTS AND SERVERS
// COMMUNICATE EVEN IF THEY ARE NOT ON THE SAME DOMAIN 
//for Some Extra HTTP Headers
const cors=require('cors')

const routing = require('./Routes/router');
const app = express();
app.use(express.static(__dirname+'/../Views'));
//Store all HTML files in view folder.


//Log mode
app.use(morgan('short'));
app.use(bodyParser.urlencoded({extended:false}))

const PORT = process.env.port || 3000
//Middleware Decleare
app.use((req,res,next)=>{
    console.log('Test MiddleWare Function')
    next();
})

app.use('/',routing);

app.listen(PORT,()=>{
console.log(`Server is Running on Port ${PORT}`)
})


