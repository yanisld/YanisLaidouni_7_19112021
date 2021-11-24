const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Role = sequelize.define('Role', {
    name: { type: DataTypes.STRING(45), defaultValue: 'participant' },
});

module.exports = Role;