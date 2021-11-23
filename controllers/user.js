const connect = require('../database');

exports.signup = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const userDesc = { name: name, email: email, password: password };
    connect.query('INSERT INTO `user` SET ? ',
        userDesc,
        function (error, results, fields) {
            if (error) throw error;
            res.status(201).json({ message: 'Utilisateur créé !' });
        });
}

exports.getAllUsers = (req, res, next) => {
    connect.query('SELECT * FROM `user`',
        function (error, results, fields) {
            if (error) throw error;
            res.status(200).json({ results });
        });
}

exports.getOne = (req, res, next) => {
    const id = { id: req.params.id };
    connect.query('SELECT * FROM `user` WHERE ?',
        id,
        function (error, results, fields) {
            if (error) throw error;
            res.status(200).json({ results });
        });
}

exports.updateOne = (req, res, next) => {
    const user = { name: req.body.name, email: req.body.email, password: req.body.password };
    const id = { id: req.params.id };
    connect.query('UPDATE `user` SET ? WHERE ?',
        [user, id],
        function (error, results, fields) {
            if (error) throw error;
            res.status(200).json({ message: 'Utilisateur modifié !' });
        });
}

exports.deleteOne = (req, res, next) => {
    const id = { id: req.params.id };
    connect.query('DELETE FROM `user` WHERE ?',
        id,
        function (error, results, fields) {
            if (error) throw error;
            res.status(200).json({ message: 'Utilisateur supprimé !' });
        });
}