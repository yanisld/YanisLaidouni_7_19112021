const db = require('../models')
const Post = db.post;

exports.create = async (req, res, next) => {
    try {
        await Post.create({
            ...req.body
        });
        return res.status(201).json({ message: 'Publication créée !' });
    }
    catch(err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.getAll = async (req, res, next) => {
    try {
        const results = await Post.findAll({ include: ['user'] });
        return res.status(200).json(results);
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.get = async (req, res, next) => {
    try {
        const result = await Post.findOne({ include: ['user'] , where: { id: req.params.id } });
        return res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.update = async (req, res, next) => {
    try {
        await Post.update({
            title: req.body.title,
            content: req.body.content
        },
            { where: { id: req.params.id } });
        return res.status(200).json({ message: 'Publication mise à jour !' })
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.delete = async (req, res, next) => {
    try {
        await Post.destroy({ where: { id: req.params.id } });
        return res.status(200).json({ message: 'Publication supprimée !' })
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};