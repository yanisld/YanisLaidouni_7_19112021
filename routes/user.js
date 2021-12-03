const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/inscription', userCtrl.create);
router.post('/connexion', userCtrl.login);
router.get('/', userCtrl.getAll);
router.get('/:id', userCtrl.get);
router.put('/:id', userCtrl.update);
router.delete('/:id', userCtrl.delete);

module.exports = router;