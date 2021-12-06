const db = require('../models');
const jwt = require('jsonwebtoken');
const User = db.user;
const Role = db.role;

exports.create = async (req, res, next) => {
    try {
        let role = await Role.findOne({ attributes: ['id'], where: { name: 'participant' }, raw: true });
        if (!role) {
            await Role.create();
            role = await Role.findOne({ attributes: ['id'], where: { name: 'participant' }, raw: true });
        }
        req.body.role_id = role.id;
        await User.create({ ...req.body });
        return res.status(201).json({ message: 'Utilisateur créé !' });
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email }, raw: true });
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        else {
            const password = user.password;
            if (!password || password != req.body.password) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            else {
                const token = jwt.sign({id: user.id}, 'secretKey', { expiresIn: '12h' });
                return res.status(200).json({ message: 'Utilisateur connecté !', token });
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

exports.get = async (req, res, next) => {
    try {
        const result = await User.findOne({ include: ['role'], where: { id: req.params.id } });
        return res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.update = async (req, res, next) => {
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

exports.delete = async (req, res, next) => {
    try {
        await User.destroy({ where: { id: req.params.id } });
        return res.status(200).json({ message: 'Utilisateur supprimé !' })
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};