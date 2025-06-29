const { Op } = require('sequelize');
const { User,Role } = require('@models');
const { paginate } = require('@utils/pagination');

const getUsers = async (query) => {
  const where = {};
  if (query.search) {
    where[Op.or] = [
      { name: { [Op.like]: `%${query.search}%` } },
      { email: { [Op.like]: `%${query.search}%` } }
    ];
  }

  let order = [['createdAt', 'DESC']];
  return paginate({
    model: User,
    query,
    where,
    order,
    include : [
      {model:Role}
    ],
    mapData : (user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.Role?.name || null
    })
  });
};

const createUser = async (data) => {
  const user = await User.create(data);
  return user;
}

const isEmailRegistered = async (email) => {
  const user = await User.findOne({ where: { email } });
  return Boolean(user);
};

module.exports = { getUsers, createUser , isEmailRegistered };


