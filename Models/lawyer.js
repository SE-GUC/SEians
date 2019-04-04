
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LawyerSchema = new Schema({
    id: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    fullname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    cases:{
      type: [String],
      required: false
    }
} );
const Lawyer = mongoose.model('lawyer', LawyerSchema);

module.exports = Lawyer;

