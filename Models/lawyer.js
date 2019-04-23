const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const LawyerSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique:true
    },
    username: {
        type: String, 
        required: true,
        unique:true
    },
    password: {
        type: String, 
        required: true,
    },
    birthDate: {
        type: Date, 
        required: false
},
    gender: {
        type: String, 
        required: true
    },
    address: {
        type: String, 
        required: true
    },
    yearsOfExperience: {
        type: Number, 
        required: true
    },
    salary: {
        type: Number, 
        required: true
    },
    ssn: {
        type: Number, 
        required: true
    },
    phone: {
        type: Number, 
        required: true
    }, 
    tasks: [
        {
            companyName: String,
            required:false, 
       }
   ],
})

module.exports = Lawyer = mongoose.model('lawyers', LawyerSchema, 'Lawyer')