module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        post_id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
        content: { type: DataTypes.STRING, allowNull: false }
    });
    return Comment;
}