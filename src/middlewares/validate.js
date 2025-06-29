const { error } = require('@utils/response');

const validate = (schema) => (req, res, next) => {
  const { error: validationError } = schema.validate(req.body, { abortEarly: false });
  if (validationError) {
    const formatted = validationError.details.map(err => ({
      field: err.path[0],
      message: err.message.replace(/['"]/g, '')
    }));

    return error(res, 'Input validation error', 422, formatted);
  }

  next();
};

module.exports = validate;
