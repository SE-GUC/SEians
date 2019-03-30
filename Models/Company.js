const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema
const CompanySchema = new Schema ({

    name: {
        type: String,
        required: true 
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

//const uuid = require('uuid')
// class Company{

// 	constructor(id, name, companyStatus, type, owner){
//        this.id = id;
//        this.name = name;
//        this.companyStatus = companyStatus;
//         this.type = type;
//         this.owner = owner;
//     };
// }
// module.exports = Company;
