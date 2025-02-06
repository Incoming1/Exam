const express = require('express')
const {
    createUser,
    deleteUser,
    getOneUser,
    updateUser
} = require('../controller/user.controller')

const routes = express.Router()

routes.post('/user', createUser)
routes.get('/user', deleteUser)
routes.get('/user', getOneUser)
routes.get('/user', updateUser)


module.exports = routes