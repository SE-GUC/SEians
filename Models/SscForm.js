const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SscSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    district: {
        type: String,
        required: true
        
    },
    city: {
        type: String,
        required: true
        
    },
    governorate: {
        type: String,
        required: true
        
    },
    companyName: {
        type: String,
        required: true
        
    },
    gender: {
        type: String,
        required: true
        
    },
    companyNameInArabic: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    idType:  {
        type: String,
        required: true
    },
    idNumber: {
        type: Number,
        required: true
        
    },
    birthDate: {
        type: String,
        required: true
        
    },
    address: {
        type: String,
        required: true
    },
    telephone: {
        type: Number,
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
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
     time: {
        type: Date,
        required: false,
        default: Date.now()
        
     },
      approval: {
    
      type: Boolean,
         required: false,
    
      default:false
     }
     ,
    managers: [
         {
             m_name: String,
             m_id: String,
             manager_nationality: String,
           
        }
    ],
    lawyerApproval: {
        type: String, required:false, default:"Lawyer Pending"
    },
    comment: {
        type: String, required:false
    }
    // Managers: 
    //     {
    //         type: String,
    //         required: false,
            
           
    //     }
    
    })

var SscForm = mongoose.model('SscForm', SscSchema, 'SscForm');
module.exports = SscForm = mongoose.model('SscForm', SscSchema,'SscForm')
;