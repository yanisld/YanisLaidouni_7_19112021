const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  firstName: {type: DataTypes.STRING},
  lastName: {type: DataTypes.STRING}
});

module.exports = User;