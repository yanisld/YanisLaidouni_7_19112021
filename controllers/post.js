const db = require('../models');
const verify = require('../middleware/verify');
const constant = require('../config/constant');
const Post = db.post;
const User = db.user;
const Comment = db.comment;
const Like = db.like;

exports.create = async (req, res, next) => {
    try {
        await Post.create({
            ...req.body
        });
        return res.status(201).json({ message: 'Publication créée !' });
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.getAll = async (req, res, next) => {
    try {
        const results = await Post.findAll({ include: ['user'], order: [['createdAt', 'DESC']] });
        return res.status(200).json(results);
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.get = async (req, res, next) => {
    try {
        const result = await Post.findOne({ include: ['user'], where: { id: req.params.id } });
        return res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.update = async (req, res, next) => {
    try {
        const userId = verify.verifyUser(req, res, next);
        const result = await Post.findOne({ include:  ['user'], where: { id: req.params.id }, raw: true });
        const role = await User.findOne({ include:  ['role'], where: { id: userId } });
        if (userId == result.user_id || role.role.dataValues.name == constant.admin) {
            req.body.user_id = result.user_id;
            await Post.update({ ...req.body }, { where: { id: req.params.id } });
            return res.status(200).json({ message: 'Publication mise à jour !' })
        }
        else {
            res.status(401).json({ message: 'Utilisateur non autorisé !' });
        }
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.delete = async (req, res, next) => {
    try {
        const userId = verify.verifyUser(req, res, next);
        const result = await Post.findOne({ where: { id: req.params.id }, raw: true });
        const role = await User.findOne({ include:  ['role'], where: { id: userId } });
        if (userId == result.user_id || role.role.dataValues.name == constant.admin) {
            await Like.destroy({ where: { post_id: req.params.id } });
            await Comment.destroy({ where: { post_id: req.params.id } });
            await Post.destroy({ where: { id: req.params.id } });
            return res.status(200).json({ message: 'Publication supprimée !' });
        }
        else {
            res.status(401).json({ message: 'Utilisateur non autorisé !' });
        }
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};