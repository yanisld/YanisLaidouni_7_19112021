const verify = require('./verify');

module.exports = (req, res, next) => {
    try {
        userId = verify.verifyUser(req, res, next);
        req.body.user_id = userId;
        if (req.body.user_id && req.body.user_id !== userId) {
            throw 'Identifiant utilisateur invalide !';
        } else {
            next();
        }
    }
    catch (err) {
        res.status(401).json({ error: err });
        console.log(err);
    }
}