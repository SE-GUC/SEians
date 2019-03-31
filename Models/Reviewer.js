const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const ReviewerSchema = new Schema({
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
        required: true
    },
    username: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    birthDate: {
        type: Date, 
        required: true
    },
    gender: {
        type: String, 
        required: true
    },
    address: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    yearsOfExperience: {
        type: Number, 
        required: true
    },
    hiringDate: {
        type: Date, 
        required: true
    },
    salary: {
        type: Number, 
        required: true
    },
    unfinished: {
        type: Boolean, 
        required: true
    },
    finsihed: {
        type: Boolean, 
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
})

module.exports = Reviewer = mongoose.model('reviewers', ReviewerSchema)