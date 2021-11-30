const db = require('../models')
const Comment = db.comment;

exports.createComment = async (req, res, next) => {
    try {
        await Comment.create({
            content: req.body.content
        });
        return res.status(201).json({ message: 'Commentaire créé !' });
    }
    catch(err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.getAllComments = async (req, res, next) => {
    try {
        const results = await Comment.findAll();
        return res.status(200).json(results);
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.getComment = async (req, res, next) => {
    try {
        const result = await Comment.findOne({ where: { id: req.params.id } });
        return res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.updateComment = async (req, res, next) => {
    try {
        await Comment.update({
            content: req.body.content
        },
            { where: { id: req.params.id } });
        return res.status(200).json({ message: 'Commentaire mis à jour !' })
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.deleteComment = async (req, res, next) => {
    try {
        await Comment.destroy({ where: { id: req.params.id } });
        return res.status(200).json({ message: 'Commentaire supprimé !' })
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};