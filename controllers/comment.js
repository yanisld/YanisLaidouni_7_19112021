const db = require('../models')
const Comment = db.comment;

exports.create = async (req, res, next) => {
    try {
        req.body.post_id = req.params.id;
        await Comment.create({ ...req.body });
        return res.status(201).json({ message: 'Commentaire créé !' });
    }
    catch(err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.getAll = async (req, res, next) => {
    try {
        const results = await Comment.findAll({ include: ['user'], where: { post_id: req.params.id } });
        return res.status(200).json(results);
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.get = async (req, res, next) => {
    try {
        const result = await Comment.findOne({ include: ['user'], where: { post_id: req.params.id, id: req.params.idcom  } });
        return res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.update = async (req, res, next) => {
    try {
        await Comment.update({ content: req.body.content }, { where: { post_id: req.params.id, id: req.params.idcom } });
        return res.status(200).json({ message: 'Commentaire mis à jour !' })
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.delete = async (req, res, next) => {
    try {
        await Comment.destroy({ where: { post_id: req.params.id, id: req.params.idcom } });
        return res.status(200).json({ message: 'Commentaire supprimé !' })
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};