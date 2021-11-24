const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Role = require('../models/Role');

const User = sequelize.define('User', {
  username: {type: DataTypes.STRING(45)},
  email: {type: DataTypes.STRING(100)},
  password: {type: DataTypes.STRING(100)}
});
User.belongsTo(Role, {foreignKey:'id_role', onDelete:'NO ACTION', onUpdate:'NO ACTION'});

User.beforeCreate(async (user) => {
  user.id_role = 1;
});

module.exports = User;