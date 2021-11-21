const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "user_groupomania"
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Connecté à la base de données');
});

exports.signup = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const userDesc = { name: name, email: email, password: password };
    const query = connection.query('INSERT INTO `user` SET ? ',
        userDesc,
        function (error, results, fields) {
            if (error) throw error;
            res.status(201).json({ message: 'Utilisateur créé !' });
        });
}