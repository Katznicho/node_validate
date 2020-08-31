const mongoose = require('mongoose')

//creating a schema
const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min:3
    },
    email: {
        type: String,
        required: true,
        min:5
    },
    password: {
        type: String,
        required: true,
        min:3
    }
})

module.exports = mongoose.model('users' , Schema)