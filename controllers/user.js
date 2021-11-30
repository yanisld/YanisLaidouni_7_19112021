const db = require('../models')
const User = db.user;
const Role = db.role;

exports.createOne = async (req, res, next) => {
    try {
        let role = await Role.findOne({ attributes: ['id'], where: { name: 'participant' }, raw: true });
        if (!role) {
            await Role.create();
        }
        role = await Role.findOne({ attributes: ['id'], where: { name: 'participant' }, raw: true });
        await User.beforeCreate((user) => { user.role_id = role.id });
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({ message: 'Utilisateur créé !' });
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const email = await User.findOne({ attributes: ['email'], where: { email: req.body.email }, raw: true });
        if (!email) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        else {
            const password = await User.findOne({ attributes: ['password'], where: { email: email.email }, raw: true });
            if (!password.password || password.password != req.body.password) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            else {
                return res.status(200).json({ message: 'Utilisateur connecté !' });
            }
        }    
    }
    catch (err) {
        res.status(500).json({ err });
        console.error(err);
    }
};

exports.getAll = async (req, res, next) => {
    try {
        const results = await User.findAll({ include: ['role'] });
        return res.status(200).json(results);
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.getOne = async (req, res, next) => {
    try {
        const result = await User.findOne({ include: ['role'], where: { id: req.params.id } });
        return res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.updateOne = async (req, res, next) => {
    try {
        await User.update({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        },
            { where: { id: req.params.id } });
        return res.status(200).json({ message: 'Utilisateur mis à jour !' })
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.deleteOne = async (req, res, next) => {
    try {
        await User.destroy({ where: { id: req.params.id } });
        return res.status(200).json({ message: 'Utilisateur supprimé !' })
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};