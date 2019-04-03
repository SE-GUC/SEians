const mongoose = require('mongoose')
const Schema = mongoose.Schema


const AdminSchema = new Schema({
    id: {
        type: Number,
        required: false
    },
    userName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    ssn: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    isLogged: {
        type: Boolean,
        required: true
    },
    password: {
        type: Number,
        required: true
    }, workLocation: {
        type: String,
        required: true
    }, address: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    fax: {
        type: Number,
        required: true
    },
    fullAccess: {
        type: Boolean,
        required: true
    }
    

})

module.exports = Admin = mongoose.model('Admins', AdminSchema)