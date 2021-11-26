const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Role = require('../models/Role');

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING(45), allowNull: false },
  email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
  password: { type: DataTypes.STRING(100), allowNull: false }
});
User.belongsTo(Role, { foreignKey: 'id_role', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });

User.beforeCreate(async (user) => {
  const query = await Role.findOne({ where: { id: 1 } });
  user.id_role = query.id
});

module.exports = User;