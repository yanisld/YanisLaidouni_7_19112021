module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: {type: DataTypes.STRING(255), allowNull: false},
        content: {type: DataTypes.TEXT('long'), allowNull: false}
    });
    return Post;
}