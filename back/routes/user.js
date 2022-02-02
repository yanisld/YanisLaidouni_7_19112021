const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/inscription', userCtrl.create);
router.post('/connexion', userCtrl.login);
router.get('/deconnexion', auth, userCtrl.logout);
router.get('/', auth, userCtrl.getAll);
router.get('/:id', auth, userCtrl.get);
router.put('/:id', auth, userCtrl.update);
router.delete('/:id', auth, userCtrl.delete);

module.exports = router;