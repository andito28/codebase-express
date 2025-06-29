const Joi = require('joi');

const createUserSchema = Joi.object({
  name: Joi.string().required(),            
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role_id: Joi.string().required()
});

module.exports = { createUserSchema };
