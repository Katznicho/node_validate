const Joi = require('@hapi/joi')

const validateSignUp = body => {
    const joiSchema =  Joi.object({
        name:Joi.string().min(3).required(),
        email: Joi.string().min(3).max(100).required().email(),
        password:Joi.string().min(3).max(1000).required()
    })
    return joiSchema.validate(body)
      
}
const validateLogin = body => {
    const joiSchema =  Joi.object({
        email: Joi.string().min(3).max(100).required().email(),
        password:Joi.string().min(3).max(1000).required()
    })
    return joiSchema.validate(body)
      
}
module.exports.validateSignUp = validateSignUp
module.exports.validateLogin = validateLogin