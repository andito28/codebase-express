
const { success, error } = require('@utils/response');
const userService = require('@services/userService');

exports.index = async (req, res)  => {
    try {
        const users = await userService.getUsers(req.query);
        return success(res, users.data, 'List Of users', 200, users.pagination);
    } catch (err) {
        return error(res, 'Failed to fetch users', err);
    }
};

exports.create = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    return success(res, user, 'User has been successfully created', 201);
  } catch (err) {
    return error(res, 'Failed to create user', err);
  }
};

exports.upload = async (req, res) => {
  try {
    return success(res, null, 'Upload successed', 201);
  } catch (err) {
    return error(res, 'Failed to create user', err);
  }
};
