const jwt = require('jsonwebtoken');

module.exports.verifyUser = (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        const decodedToken = jwt.verify(token, 'secretKey');
        const userId = decodedToken.id;
        return userId;
    }
    catch (err) {
        res.status(401).json({ error: err });
        console.log(err);
    }
}