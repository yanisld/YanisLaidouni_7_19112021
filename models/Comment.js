module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        user_id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
        role_id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
        content: { type: DataTypes.STRING, allowNull: false }
    });
    return Comment;
}