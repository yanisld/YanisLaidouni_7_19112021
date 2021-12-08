const jwt = require('jsonwebtoken');

module.exports.verifyUser = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'secretKey');
        const userId = decodedToken.id;
        return userId;
    }
    catch (err) {
        res.status(401).json({ error: err });
        console.log(err);
    }
}