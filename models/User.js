const connect = require('../database');

const User = connect.query('CREATE TABLE IF NOT EXISTS User (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(45), email VARCHAR(100), password VARCHAR(100), PRIMARY KEY (id));');

module.exports = User;