const success = (res, data = {}, message = 'Success', code = 200, pagination = null) => {
  const response = {
    status: 'success',
    message,
    data
  };

  if (pagination) {
    response.pagination = pagination;
  }

  return res.status(code).json(response);
};

const error = (res, message = 'Something went wrong', err) => {

  let code = err.statusCode || 500
  const errors = err.errors 
      ? err.errors.map(e => ({
        ...(e.field && { field: e.field }),
          message: e.message
        }))
      : [{ message: err.message }];

  return res.status(code).json({
    status: 'error',
    message,
    errors
  });
};

module.exports = { success, error };
