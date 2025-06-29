const { User, Role } = require('@models');

exports.findByEmail = async (email) => {
  return await User.findOne({
    where: { email },
    include: [{ model: Role }]
  });
};

exports.createUser = async (data) => {
  return await User.create(data);
};
