const Joi = require('joi');
//const bcrypt = require('bcryptjs');

//const salt = bcrypt.genSaltSync(10)
//const hashedPassword = bcrypt.hashSync(password,salt)

module.exports = {
    createValidation: request => {
        const createSchema = {
            //id: Joi.string().guid({version: 'uuidv4'}),
            name: Joi.string().min(2).required(),
            userName: Joi.string().required(),
            gender: Joi.string().valid(['male', 'female']).required(),
            nationality: Joi.string().required(),
            egID: Joi.number().min(10000000000000).max(99999999999999).required(),
            birthDate: Joi.date().max('1-1-1998').required(),
            //.iso()
            age: Joi.number().required(),
            address: Joi.string().required(),
            mobilePhone: Joi.string().regex(/^\d{4}-\d{3}-\d{4}$/).required(),
            fax: Joi.number().required(),
            email: Joi.string().email().required(),
            capital: Joi.number().required(),
            currency: Joi.string().required(),
            Companies: Joi.array().required(),
            SSC: Joi.boolean().required(),
            password: Joi.string().min(7).required().strict()
            //.hashedPassword
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
           // id: Joi.string().guid({version: 'uuidv4'}),
            name: Joi.string().min(2),
            userName: Joi.string(),
            //.unique(),
            gender: Joi.string().valid(['male', 'female']),
            nationality: Joi.string(),
            egID: Joi.number(),
            //.unique(),
            birthDate: Joi.date().max('1-1-1998').iso(),
            age: Joi.number(),
            address: Joi.string(),
            mobilePhone: Joi.string().regex(/^\d{4}-\d{3}-\d{4}$/),
            //.unique(),
            fax: Joi.number(),
            //.unique(),
            email: Joi.string().email(),
            //.unique(),
            capital: Joi.number(),
            currency: Joi.string(),
            Companies: Joi.array(),
            SSC: Joi.boolean(),
            password: Joi.string().min(7).strict()
        }

        return Joi.validate(request, updateSchema)
    }, 
}