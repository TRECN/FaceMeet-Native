const express = require('express')
const bodyParser= require('body-parser')
const DbConnect = require('./config/db')
const user = require('./routes/user')

DbConnect()
const app = express()

const PORT=process.env.PORT||4000

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.json({message:'API WORKING!!'})
})

app.use('/user',user)

app.listen(PORT,(req,res)=>{
    console.log(`server started at port: ${PORT}`)
})