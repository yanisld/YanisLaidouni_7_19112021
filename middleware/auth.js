const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'secretKey');
        const userId = decodedToken.id;
        if (req.body.user_id && req.body.user_id !== userId) {
            throw 'Identifiant utilisateur invalide !';
        } else {
            req.body.user_id = userId;
            next();
        }
    }
    catch (err) {
        res.status(401).json({ error: err });
        console.log(err);
    }
}