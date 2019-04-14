const validator = require ('validator');
const isEmpty = require ('./is-empty');

module.exports = function validateRegisterInput (data){
    let errors = {};

    data.name = !isEmpty(data.name)? data.name:'';
    data.email = !isEmpty(data.email)? data.email:'';
    data.password = !isEmpty(data.password)? data.password:'';
    data.password2 = !isEmpty(data.password2)? data.password2:'';
    
    if(!validator.isLength(data.name,{min:2,max:30})){
        errors.name = 'Name must be between 2 and 30 chars';
    }
    
    if(validator.isEmpty(data.email)){
        errors.email = 'email is required ';
    }
    if(!validator.isEmail(data.email)){
        errors.email = 'email is in valid ';
    }
    if(validator.isEmpty(data.password)){
        errors.password = 'password feild is required';
    }
    if(!validator.isLength(data.password,{min:7,max:30})){
        errors.password = 'Name must be between 7 and 30 chars';
    }
    if(validator.isEmpty(data.password2)){
        errors.password2 = 'password2 feild is required';
    }
    if(!validator.equals(data.password,data.password2)){/* check the equality of the two passwords */ 
        errors.password2 = 'passwords must match ';
    }

    
    return {
        errors,
        isValid :isEmpty(errors)
    }
}