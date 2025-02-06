const userModel = require('../model/user.model')

//creating user
const createUser = async (req, res) => {
    try {
        const newUser = await userModel(req.body)
        const savedUser = await newUser.save()
        console.log(savedUser)
        res.json(200).send('user created successfully')
    } catch (error) {
        
    }
}

//delete user
const deleteUser = async (req, res) => {
    const {id} = req.body
    try {
        await userModel.findByIdAndDelete(id)
        res.send('delete successfully')
    } catch (error) {
        res.send('something went wrong')
    }
}

//get oneUser
const getOneUser = async (req, res) => {
    try {
        const {email, password} = req.body
        const oneUser = await userModel.findOne(email, password)
        if(!oneUser) {
            return res.json({message: 'user not found'})
        }
    res.json(oneUser)
    } catch (error) {
        console.log(error)
        res.status(500).json('could not get details')
    }
}

//update user
const updateUser = async (req,res) => {
    try {
        const users = [
            { id: "1", name: "mosh" },
            { id: "2", name: "leo" },
          ];
        const userId = req.params.id
        const index = users.findIndex(user => user.id === userId)
        if (index === -1) {
            return res.status(404).json({ error: 'User not found' });
          }
        users[index] = { ...users[index], ...req.body }
        res.json(users[index])
    } catch (error) {
        console.log(error)
        res.status(500).json('could not get user info')
    }
}
module.exports = {createUser, deleteUser, getOneUser, updateUser}