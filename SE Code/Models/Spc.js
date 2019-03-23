
   /* constructor(id,companyName, companyNameInArabic, governorate, city, 
        district, telephone, fax, currency, name, investorId, gender, 
        nationality, idType, idNumber
        , birthdate, address, email, lawyerApproval,requestState,lawyerId,reviewerId,time)*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema

        

const SpcSchema = new Schema({
    companyName: {
        type: String,
        required: false
    },
    companyNameInArabic: {
        type: String,
        required: true
    },
    governorate: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: false
    },
    fax: {
        type: Number,
        required: false
    },
    currency: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    investorId: {
        type: Number,
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
    idType: {
        type: String,
        required: true
    },
    idNumber: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    lawyerApproval: {
        type: Boolean,
        required: false
    },
    reviewerApproval: {
        type: Boolean,
        required: false
    },
    requestState: {
        type: String,
        required: false
    },
    lawyerId: {
        type: Number,
        required: false
    },
    reviewerId: {
        type: Number,
        required: false
    },
    time: {
        type: Date,
        required: false
    }
})

module.exports = Spc = mongoose.model('Spcs', SpcSchema)
