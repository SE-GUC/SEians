const Joi = require('joi')
const mongoose = require('mongoose')


module.exports = {
    createValidation: request => {
        const createSchema = {
            name :Joi.string().min(5).max(50),
            district :Joi.string().min(2).max(50),
            city:Joi.string().min(2).max(50),
            governorate: Joi.string().min(2).max(50),
            companyName :Joi.string().min(2).max(50),
            gender:Joi.string().valid(['male', 'female']),
            companyNameInArabic: Joi.string().min(2).max(50),
            nationality:Joi.string().min(2).max(15),
            idType:Joi.string().min(3).max(50) ,
            idNumber: Joi.number(),
            birthDate :Joi.string(),
            address:Joi.string().min(10).max(50),
            telephone : Joi.number(),
            fax : Joi.number(),
            email: Joi.string().email().required() ,
            capital:Joi.string().min(2).max(50),
            currency:Joi.string().min(2).max(50),
            managers:Joi.array()
        }


        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema ={
            name :Joi.string().min(5).max(50),
            district :Joi.string().min(2).max(50),
            city:Joi.string().min(2).max(50),
            governorate: Joi.string().min(2).max(50),
            companyName :Joi.string().min(2).max(50),
            gender:Joi.string().valid(['male', 'female']),
            companyNameInArabic: Joi.string().min(2).max(50),
            nationality:Joi.string().min(2).max(15),
            idType:Joi.string().min(3).max(50) ,
            idNumber: Joi.number(),
            birthDate :Joi.string(),
            address:Joi.string().min(10).max(50),
            telephone : Joi.number(),
            fax : Joi.number(),
            email: Joi.string().email().required() ,
            capital:Joi.string().min(2).max(50),
            currency:Joi.string().min(2).max(50),
            managers:Joi.array(),
            lawyerApproval:Joi.string(),
            comment: Joi.string()
        }

         return Joi.validate(request, updateSchema)
     }, 












    
}
