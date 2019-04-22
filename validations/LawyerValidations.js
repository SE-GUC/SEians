const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            firstname: Joi.string().required(),
            middlename: Joi.string().required(),
            lastname: Joi.string().required(),
            email: Joi.string().required(),
            username: Joi.string().required(),
            birthDate: Joi.date().required(),
            gender: Joi.string().required(),
            address: Joi.string().required(),
            phone: Joi.number().required(),
            ssn: Joi.number().required(),
            salary: Joi.number().required(),
            //hiringDate: Joi.date().required(),
            yearsOfExperience: Joi.number().required(),
            password: Joi.string().min(7).required().strict()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            email: Joi.string(),
            address: Joi.string(),
            phone: Joi.number(),
            salary: Joi.number(),
            yearsOfExperience: Joi.number(),
            password: Joi.string().min(7)
        }

        return Joi.validate(request, updateSchema)
    }, 
}