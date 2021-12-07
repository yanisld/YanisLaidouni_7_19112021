const sequelize = require("../config/database");
const Sequelize = require("sequelize");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./User')(sequelize, Sequelize);
db.role = require('./Role')(sequelize, Sequelize);
db.post = require('./Post')(sequelize, Sequelize);
db.comment = require('./Comment')(sequelize, Sequelize);
db.like = require('./Like')(sequelize, Sequelize);

db.user.belongsTo(db.role, {
    as: 'role', foreignKey: { name:'role_id', allowNull: false }, onDelete: 'NO ACTION'
});

db.post.belongsTo(db.user, {
    as: 'user', foreignKey: { name:'user_id', allowNull: false }, onDelete: 'NO ACTION'
});

db.comment.belongsTo(db.user, {
    as: 'user', foreignKey: { name:'user_id', allowNull: false }, onDelete: 'NO ACTION'
});

db.comment.belongsTo(db.post, {
    foreignKey: { name:'post_id', allowNull: false }, onDelete: 'NO ACTION'
});

db.like.belongsTo(db.post, {
    foreignKey: { name:'post_id', }, onDelete: 'NO ACTION'
});

db.like.belongsTo(db.user, {
    foreignKey: { name:'user_id' }, onDelete: 'NO ACTION'
});

module.exports = db;