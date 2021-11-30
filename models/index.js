const sequelize = require("../config/database");
const Sequelize = require("sequelize");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./User')(sequelize, Sequelize);
db.role = require('./Role')(sequelize, Sequelize);
db.post = require('./Post')(sequelize, Sequelize);
db.comment = require('./Comment')(sequelize, Sequelize);

db.user.belongsTo(db.role, {
    foreignKey: 'role_id', as: 'role', type: Sequelize.DataTypes.INTEGER, allowNull: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION'
});

db.post.belongsTo(db.user, {
    foreignKey: 'user_id', type: Sequelize.DataTypes.INTEGER, allowNull: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION'
});

db.comment.belongsTo(db.user, {
    foreignKey: 'user_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'
});

db.comment.belongsTo(db.role, {
    foreignKey: 'role_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'
});

module.exports = db;