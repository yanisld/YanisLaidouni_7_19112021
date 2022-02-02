const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const commentCtrl = require('../controllers/comment');
const likeCtrl = require('../controllers/like');
const auth = require('../middleware/auth');

router.post('/', auth, postCtrl.create);
router.get('/', auth, postCtrl.getAll);
router.get('/:id', auth, postCtrl.get);
router.put('/:id', auth, postCtrl.update);
router.delete('/:id', auth, postCtrl.delete);

router.post('/:id/comment/', auth, commentCtrl.create);
router.get('/:id/comments', auth, commentCtrl.getAll);
router.get('/:id/comment/:idcom', auth, commentCtrl.get);
router.put('/:id/comment/:idcom', auth, commentCtrl.update);
router.delete('/:id/comment/:idcom', auth, commentCtrl.delete);

router.post('/:id/like/', auth, likeCtrl.create);

module.exports = router;