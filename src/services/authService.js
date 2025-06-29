const { comparePassword, hashPassword } = require('../utils/passwordHelper');
const { generateAccessToken, generateRefreshToken } = require('../utils/jwt');
const authRepository = require('../repositories/auth.repository');

exports.login = async ({ email, password }) => {
  const user = await authRepository.findByEmail(email);
  if (!user) throw { statusCode: 404, message: 'User not found' };

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw { statusCode: 401, message: 'Incorrect password' };

  const payload = { id: user.id, role: user.Role?.name };
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      email: user.email,
      role: user.Role?.name
    }
  };
};

exports.register = async ({ email, password, roleId }) => {
  const existing = await authRepository.findByEmail(email);
  if (existing) throw {
    statusCode: 409,
    message: 'Email already registered' 
    };

  const hashed = await hashPassword(password);
  const user = await authRepository.createUser({ email, password: hashed, roleId });

  return { id: user.id, email: user.email };
};
