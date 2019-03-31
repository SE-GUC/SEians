const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            firstname: Joi.string().required(),
            middlename: Joi.string().required(),
            lastname: Joi.string().required(),
            email: Joi.string().required(),
           // middlename: Joi.string().min(3).max(100).required(),
            username: Joi.string().required(),
            //birthdate: Joi.date().min(3).max(100).required(),
            gender: Joi.string().required(),
            address: Joi.string().required(),
            phone: Joi.number().required(),
            ssn: Joi.number().required(),
            finished: Joi.boolean(),
            //unfinished: Joi.boolean().required(),
            salary: Joi.number().required(),
            //hiringDate: Joi.date().required(),
            yearsOfExperience: Joi.number().required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            firstname: Joi.string(),
            middlename: Joi.string(),
            lastname: Joi.string(),
            email: Joi.string(),
            address: Joi.string(),
            phone: Joi.number(),
            ssn: Joi.number(),
            finished: Joi.boolean(),
            salary: Joi.number(),
            yearsOfExperience: Joi.number()
        }

        return Joi.validate(request, updateSchema)
    }, 
}