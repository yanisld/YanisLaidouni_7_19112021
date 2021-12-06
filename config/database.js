const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
});
try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connecté à la base de données !');
} catch (error) {
    console.error('Connexion à la BDD échouée:', error);
}

module.exports = sequelize;