const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/user.route')
const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://Incoming:Incoming@cluster0.9zc07.mongodb.net/Abdulhamid?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('connected to database')
})
.catch((error) => {
    console.log(error)
    console.log('something is wrong')
})











app.use(userRoute)
app.listen(3000, () => {
    console.log('app is running')
})