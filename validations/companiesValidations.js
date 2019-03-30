const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name : Joi.string().min(3).max(500).required(),
            companyStatus: Joi.string().min(3).max(100).required(),
            type: Joi.string().required(),
            owner: Joi.string().min(3).max(500).required(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(500),
            companyStatus: Joi.string().min(3).max(100),
            type: Joi.number().min(50).max(3000),
            owner: Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}