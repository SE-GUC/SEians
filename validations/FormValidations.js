const Joi = require("joi");

module.exports = {
  createSscValidation: request => {
    const createSscSchema = {
      companyName: Joi.string().min(2),
      companyNameInArabic: Joi.string().required(),
      governorate: Joi.string().required(),
      city: Joi.string().required(),
      district: Joi.string().required(),
      telephone: Joi.string().regex(/^\d{4}-\d{3}-\d{4}$/),
      fax: Joi.number(),
      currency: Joi.string().required(),
      name: Joi.string().required(),
      investorId: Joi.number(),
      gender: Joi.string()
        .valid(["male", "female"])
        .required(),
      nationality: Joi.string().required(),
      idType: Joi.string().required(),
      idNumber: Joi.number()
        .min(10000000000000)
        .max(99999999999999)
        .required(),
      birthdate: Joi.date()
        .max("1-1-1998")
        .required(),
      address: Joi.string().required(),
      email: Joi.string().email(),
      lawyerApproval: Joi.boolean(),
      reviewerApproval: Joi.boolean(),
      requestState: Joi.string().default("LawyerPending"),
      lawyerId: Joi.number(),
      reviewerId: Joi.number(),
      time: Joi.date(),
      capital: Joi.number().required(),
      managers: Joi.array().required(),
      comments: Joi.string(),
      type: "SSC"
    };

    return Joi.validate(request, createSscSchema);
  },
  createSpcValidation: request => {
    const createSpcSchema = {
      companyName: Joi.string().min(2),
      companyNameInArabic: Joi.string().required(),
      governorate: Joi.string().required(),
      city: Joi.string().required(),
      district: Joi.string().required(),
      telephone: Joi.string().regex(/^\d{4}-\d{3}-\d{4}$/),
      fax: Joi.number(),
      currency: Joi.string().required(),
      name: Joi.string().required(),
      investorId: Joi.number().required(),
      gender: Joi.string()
        .valid(["male", "female"])
        .required(),
      nationality: Joi.string().required(),
      idType: Joi.string().required(),
      idNumber: Joi.number()
        .min(10000000000000)
        .max(99999999999999)
        .required(),
      birthdate: Joi.date()
        .max("1-1-1998")
        .required(),
      address: Joi.string().required(),
      email: Joi.string().email(),
      lawyerApproval: Joi.boolean(),
      reviewerApproval: Joi.boolean(),
      requestState: Joi.string().default("LawyerPending"),
      lawyerId: Joi.number(),
      reviewerId: Joi.number(),
      time: Joi.date(),
      capital: Joi.number().required(),
      type: "SPC"
    };

    return Joi.validate(request, createSpcSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      companyName: Joi.string().min(2),
      companyNameInArabic: Joi.string(),
      governorate: Joi.string(),
      city: Joi.string(),
      district: Joi.string(),
      telephone: Joi.string().regex(/^\d{4}-\d{3}-\d{4}$/),
      fax: Joi.number(),
      currency: Joi.string(),
      name: Joi.string(),
      investorId: Joi.number(),
      gender: Joi.string().valid(["male", "female"]),
      nationality: Joi.string(),
      idType: Joi.string(),
      idNumber: Joi.number()
        .min(14)
        .max(14),
      birthdate: Joi.date().max("1-1-1998"),
      address: Joi.string(),
      email: Joi.string().email(),
      lawyerApproval: Joi.boolean(),
      reviewerApproval: Joi.boolean(),
      requestState: Joi.string().default("LawyerPending"),
      lawyerId: Joi.number(),
      reviewerId: Joi.number(),
      time: Joi.date(),
      capital: Joi.number(),
      managers: Joi.array().required(),
      comments: Joi.string()
    };

    return Joi.validate(request, updateSchema);
  }
};
