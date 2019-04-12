const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema
const CompanySchema = new Schema ({

    name: {
        type: String,
        required: true,
        unique: true
    },


    companyStatus: {
        type: String,
        required: true

    },


    type: {
        type: String,
        required: true

    },


    owner: {
        type: String,
        required: true

    }

})

module.exports = Company = mongoose.model('company', CompanySchema)
