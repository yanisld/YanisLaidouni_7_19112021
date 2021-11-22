const User = require('../models/User');

exports.signup = (req, res, next) => {
    User.sync();
    User.create({ 
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
    .catch(error => res.status(400).json({ error }));
};