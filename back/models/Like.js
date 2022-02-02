module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define('Like', {
        value: { type: DataTypes.INTEGER, allowNull: false }
    }, {
        timestamps: false
    });
    Like.removeAttribute('id');
    return Like;
}