//automatically load .env file in to our appication
require('dotenv').config()

//import express
const express =require ('express')

//import cors
const cors = require('cors')

//import connection.js
require('./db/connection')

//import routes
const router=require('./routes/router')

//create an app using express
const server=express()

//define port
const PORT =5000

//use in server app
server.use(cors())
server.use(express.json())
server.use(router)

//run app
server.listen(PORT,()=>{
    console.log("listening in port"+ PORT);
})

//routes - localhost:5000
server.get('/',(req,res)=>{
    res.status(200).json('Main Project server starts...')
})