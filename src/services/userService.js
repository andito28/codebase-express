const userRepository = require('@repositories/userRepository');
const { hashPassword } = require('@utils/passwordHelper');

const getUsers = async (query) => {
  return await userRepository.getUsers(query);
};

const createUser = async (data) => {
    existingUser = await userRepository.isEmailRegistered(data.email);
    if(existingUser){
      throw { 
        statusCode: 409,
        errors: [{ message: 'Email already registered' }]
      };
    }
    data.password = await hashPassword(data.password);
    const user = await userRepository.createUser(data);
    return user;
};

module.exports = { getUsers, createUser };
