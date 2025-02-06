const mongoose = require('mongoose')
const user = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
    isAdmin: {
        type: String,
        require: true
    }
})


const userModel = mongoose.model('User', user)
module.exports = userModel