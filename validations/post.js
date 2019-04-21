const validator = require ('validator');
const isEmpty = require ('./is-empty');

module.exports = function validateLoginInput (data){
    let errors = {};

    
    data.text = !isEmpty(data.email)? data.text:'';
    

    if(!validator.isLength(data.text,{min:10,max:300})){
        errors.text = 'Post must be between 10 and 300 ';
    }
    
    if(validator.isEmpty(data.text)){
        errors.text = 'Text feild is required';
    }
    
    
    

    
    return {
        errors,
        isValid :isEmpty(errors)
    }
}