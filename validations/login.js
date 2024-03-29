const validator = require ('validator');
const isEmpty = require ('./is-empty');

module.exports = function validateLoginInput (data){
    let errors = {};

    
    data.email = !isEmpty(data.email)? data.email:'';
    data.password = !isEmpty(data.password)? data.password:'';

    
    
    
    if(!validator.isEmail(data.email)){
        errors.email = 'email is in valid ';
    }
    if(validator.isEmpty(data.password)){
        errors.password = 'password feild is required';
    }
    if(validator.isEmpty(data.email)){
        errors.email = 'email is required ';
    }
    
    

    
    return {
        errors,
        isValid :isEmpty(errors)
    }
}