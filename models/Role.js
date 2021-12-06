module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        name: { type: DataTypes.STRING(45), allowNull: false, defaultValue: 'participant' }
    }, {
        timestamps: false
    });
    return Role;
}