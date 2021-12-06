module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define('Like', {
        post_id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
        user_id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
        value: { type: DataTypes.INTEGER, allowNull: false }
    }, {
        timestamps: false
    });
    return Like;
}