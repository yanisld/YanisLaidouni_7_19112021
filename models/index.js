const sequelize = require("../config/database");
const Sequelize = require("sequelize");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./User')(sequelize, Sequelize);
db.role = require('./Role')(sequelize, Sequelize);

db.user.belongsTo(db.role, {
    foreignKey: 'role_id', type: Sequelize.DataTypes.INTEGER, allowNull: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION'
});

module.exports = db;