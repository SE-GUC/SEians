const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
  
            
            userName: Joi.string().required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email(),
       //     birthDay: Joi.date().format('DD-MM-YYYY');
            age: Joi.number().min(18).max(60).required(),
            ssn: Joi.number().min(10000000000000).max(99999999999999).required(),  //ssn must be 14 digits
            gender:Joi.string().valid(['male','female']),
            isLogged:Joi.boolean(),
            password: Joi.any().invalid(['!','@','#','$','%','~','^','&','*','(',')']).required(),
            workLocation: Joi.string().required(),
            address: Joi.string().required(),
            salary: Joi.number().max(100000),
            phoneNumber:Joi.number(),
            fax:Joi.number(),
            fullAccess:Joi.boolean()

        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
             
            userName: Joi.string(),
            firstName: Joi.string(),
            lastName: Joi.string(),
            email: Joi.string().email(),
            age: Joi.number().min(18).max(60),
            ssn: Joi.number().min(10000000000000).max(99999999999999),  //ssn must be 14 digits
            gender:Joi.string().valid(['male','female']),
            isLogged:Joi.boolean(),
            password: Joi.any().invalid(['!','@','#','$','%','~','^','&','*','(',')']),
            workLocation: Joi.string(),
            address: Joi.string(),
            salary: Joi.number().max(100000),
            phoneNumber:Joi.number(),
            fax:Joi.number(),
            fullAccess:Joi.boolean()

            
        }

        return Joi.validate(request, updateSchema)
    }, 
}