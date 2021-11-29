const db = require('../models')
const User = db.user;
const Post = db.post;

exports.createPost = async (req, res, next) => {
    try {
        await Post.create({
            title: req.body.title,
            content: req.body.content
        });
        return res.status(201).json({ message: 'Publication créée !' });
    }
    catch(err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.getAllPosts = async (req, res, next) => {
    try {
        const results = await Post.findAll();
        return res.status(200).json(results);
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.getPost = async (req, res, next) => {
    try {
        const result = await Post.findOne({ where: { id: req.params.id } });
        return res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};

exports.updatePost = async (req, res, next) => {
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

exports.deletePost = async (req, res, next) => {
    try {
        await Post.destroy({ where: { id: req.params.id } });
        return res.status(200).json({ message: 'Publication supprimée !' })
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};