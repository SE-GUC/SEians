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




/*

class Admin {
    constructor(id,userName, firstName,lastName, email, age,ssn,gender
               ,isLogged,password,workLocation,address,salary
               ,phoneNumber,fax,fullAccess,nationality) {
       // this.id=uuid.v4();;
        this.id           = id;
        this.userName     = userName;
        this.firstName    = firstName;
        this.lastName     = lastName;
        this.email        = email;
        this.age          = age;
        this.ssn          = ssn;
        this.gender       = gender;
        this.isLogged     = isLogged;
        this.password     = password;
        this.workLocation = workLocation;
        this.address      = address;
        this.salary      = salary;
        this.phoneNumber  = phoneNumber;
        this.fax          = fax;
        this.fullAccess   = fullAccess;
        // this.nationality = nationality;

    };
}



module.exports = Admin;
*/
module.exports = Admin = mongoose.model('Admins', AdminSchema)