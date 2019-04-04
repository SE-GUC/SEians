
// class lawyer {
//     constructor(id,username,fullname,email, password) {
//         this.id = id;
//         this.username = username;
//         this.fullname = fullname;
//         this.email = email;
//         this. password =  password;
//     };
// }

// module.exports = lawyer

const mongoos = require('mongoose');
const Schema = mongoos.Schema;

// create the schema 

const lawyerSChema = new Schema ({
    name :{
        type:String,
        required:true 
    },
    email :{
        type:String,
        required:true 
    },
    password :{
        type:String,
        required:true 
    },
    avatar :{
        type:String
    },
    date :{
        type:Date,
        defaulat:Date.now 
    }
})

module.exports = laywer = mongoos.model('lawyers',lawyerSChema);
