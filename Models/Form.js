const mongoose = require('mongoose')
const Schema = mongoose.Schema

        

const FormSchema = new Schema({
    companyName: {
        type: String,
        unique:true,
        required: true
    },
    companyNameInArabic: {
        type: String,
        unique:true,
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
        required: false
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
        required: true
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
        required: false,
        default:Date.now()
    },
    capital: {
        type: Number,
        required: true
    },
    
    type: {
        type: String,
    },
    
    managers: [
            {
                m_name: String,
                m_id: String,
                manager_nationality: String,
            
        }
    ],
})

module.exports = Form = mongoose.model('Form', FormSchema)
