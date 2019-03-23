const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            firstname: Joi.string().min(3).max(500).required(),
            middlename: Joi.string().min(3).max(100).required(),
            lastname: Joi.string().min(3).max(3000).required(),
            email: Joi.string().min(3).max(3000).required(),
            middlename: Joi.string().min(3).max(100).required(),
            username: Joi.string().min(3).max(100).required(),
            birthdate: Joi.date().min(3).max(100).required(),
            gender: Joi.string().min(4).max(7).required(),
            address: Joi.string().min(3).max(100).required(),
            phone: Joi.number().min(3).max(100).required(),
            ssn: Joi.number().min(3).max(100).required(),
            finished: Joi.boolean().min(3).max(100).required(),
            unfinished: Joi.boolean().min(3).max(100).required(),
            salary: Joi.number().min(4).max(100).required(),
            hiringDate: Joi.date().min(3).max(100).required(),
            yearsOfExperience: Joi.number().min(3).max(100).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            firstname: Joi.string().min(3).max(500).required(),
            middlename: Joi.string().min(3).max(100).required(),
            lastname: Joi.string().min(3).max(3000).required(),
            email: Joi.string().min(3).max(3000).required(),
            middlename: Joi.string().min(3).max(100).required(),
            username: Joi.string().min(3).max(100).required(),
            birthdate: Joi.date().min(3).max(100).required(),
            gender: Joi.string().min(4).max(7).required(),
            address: Joi.string().min(3).max(100).required(),
            phone: Joi.number().min(3).max(100).required(),
            ssn: Joi.number().min(3).max(100).required(),
            finished: Joi.boolean().min(3).max(100).required(),
            unfinished: Joi.boolean().min(3).max(100).required(),
            salary: Joi.number().min(4).max(100).required(),
            hiringDate: Joi.date().min(3).max(100).required(),
            yearsOfExperience: Joi.number().min(3).max(100).required()
        }

        return Joi.validate(request, updateSchema)
    }, 
}