const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.createOne);
router.get('/users', userCtrl.getAll);
router.get('/user/:id', userCtrl.getOne);
router.put('/user/:id', userCtrl.updateOne);
router.delete('/user/:id', userCtrl.deleteOne);

module.exports = router;