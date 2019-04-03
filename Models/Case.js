const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caseSchema = new Schema  ({
    caseDate:{
        type:Date,
        default:Date.now
    },
    caseticket:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    }

})

module.exports = Case = mongoose.model('cases', caseSchema)