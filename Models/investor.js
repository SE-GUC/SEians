//const uuid = require('uuid');
const mongoose = require('mongoose')
const Schema = mongoose.Schema

        

const InvestorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    egID: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobilePhone: {
        type: String,
        required: true
    },
    fax: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    capital: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    Companies: {
        type: [String],
        required: true
    },
    SSC: {
        type: Boolean,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = investor = mongoose.model('investors', InvestorSchema)
//module.exports = investor