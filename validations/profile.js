const validator = require ('validator');
const isEmpty = require ('./is-empty');

module.exports = function validateProfileInput (data){
    let errors = {};

    
    data.handle = !isEmpty(data.handle)? data.handle:'';
    data.currentState = !isEmpty(data.currentState)? data.currentState:'';
    //you can validate what you want here just search a little bit 

    
    
    
    if(!validator.isLength(data.handle,{min:2,max:40})){
        errors.handle='Handle needs to be between 2 nd 40 '
    }
    if(!validator.isEmpty(data.handle)){
        errors.handle='profile handle is required'
    }
    if(!validator.isLength(data.currentState)){
        errors.currentState='profile currentState is required'
    }

    if(!isEmpty(data.website)){
        if(!validator.isURL(data.website)){
            errors.website = 'not a valid website'
        }
    }
    if(!isEmpty(data.youtube)){
        if(!validator.isURL(data.youtube)){
            errors.youtube = 'not a valid youtube url'
        }
    }
    if(!isEmpty(data.facebook)){
        if(!validator.isURL(data.website)){
            errors.facebook = 'not a valid facebook'
        }
    }
    if(!isEmpty(data.twitter)){
        if(!validator.isURL(data.twitter)){
            errors.twitter = 'not a valid twitter'
        }
    }
    

    
    return {
        errors,
        isValid :isEmpty(errors)
    }
}

////laaast edite 12/4 2019 