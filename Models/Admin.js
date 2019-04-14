const mongoose = require('mongoose')
const Schema = mongoose.Schema


const AdminSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    // id: {
    //     type: Number,
    //     required: false
    // },
    // deleting the  id feild in admin schema it causes a big error as you asked in the cureent user methode to get an id so the passport get confused between id of mongo and id of the schema :) :) 7araaaaam 3leeeeek 

    userName: {
        type: String,
        // required: true
    },
    firstName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        // required: true
    },
    ssn: {
        type: Number,
        // required: true
    },
    gender: {
        type: String,
        // required: true
    },
    isLogged: {
        type: Boolean,
        // required: true
    },
    password: {
        type: String,
        required: true
    },
    password2: {
        type: String,
        // required: true
    }
    , workLocation: {
        type: String,
        // required: true
    }, address: {
        type: String,
        // required: true
    },
    salary: {
        type: Number,
        // required: true
    },
    phoneNumber: {
        type: Number,
        // required: true
    },
    fax: {
        type: Number,
        // required: true
    },
    fullAccess: {
        type: Boolean,
        // required: true
    }
    

})

module.exports = Admin = mongoose.model('Admins', AdminSchema)