const db = require('../models');
const verify = require('../middleware/verify');
const Like = db.like;

exports.create = async (req, res, next) => {
    try {
        userId = verify.verifyUser(req, res, next);
        req.body.user_id = userId;
        let value = await Like.findOne({ attibutes: ['value'], where: { post_id: req.params.id, user_id: req.body.user_id }, raw: true });
        if (!value) {
            req.body.post_id = req.params.id;
            await Like.create({ ...req.body });
            let value = await Like.findOne({ attibutes: ['value'], where: { post_id: req.body.post_id, user_id: req.body.user_id }, raw: true });
            if (value.value == 1) {
                return res.status(201).json({ message: 'Like créé !' });
            }
            else {
                return res.status(201).json({ message: 'Dislike créé !' });
            }
        }
        else if (value.value == 1 && req.body.value == 1) {
            await Like.destroy({ where: { post_id: req.params.id, user_id: req.body.user_id } });
            return res.status(200).json({ message: 'Like supprimé !' })
        }
        else if (value.value == 1 && req.body.value == -1) {
            await Like.update({ ...req.body }, { where: { post_id: req.params.id, user_id: req.body.user_id } });
            return res.status(200).json({ message: 'Dislike créé !' })
        }
        else if (value.value == -1 && req.body.value == -1) {
            await Like.destroy({ where: { post_id: req.params.id, user_id: req.body.user_id } });
            return res.status(200).json({ message: 'Dislike supprimé !' })
        }
        else if (value.value == -1 && req.body.value == 1) {
            await Like.update({ ...req.body }, { where: { post_id: req.params.id, user_id: req.body.user_id } });
            return res.status(200).json({ message: 'Like créé !' })
        }
    }
    catch (err) {
        res.status(400).json({ err });
        console.error(err);
    }
};