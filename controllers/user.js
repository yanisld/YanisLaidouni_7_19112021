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

exports.getAll = (req, res, next) => {
    User.findAll()
        .then((results) => {res.status(200).json(results);})
        .catch(error => res.status(400).json({ error }));
};

exports.getOne = (req, res, next) => {
    User.findOne({ where: {id: req.params.id} })
        .then((result) => {res.status(200).json(result)})
        .catch(error => res.status(400).json({ error }));
};

exports.updateOne = (req, res, next) => {
    User.update({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName},
                {where: {id: req.params.id}})
        .then(() => res.status(200).json({message: 'Utilisateur mis à jour !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteOne = (req, res, next) => {
    User.destroy({where: {id: req.params.id}})
        .then(() => res.status(200).json({message: 'Utilisateur supprimé !'}))
        .catch(error => res.status(400).json({ error }));
};