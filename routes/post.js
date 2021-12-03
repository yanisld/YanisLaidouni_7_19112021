const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');

router.post('/', auth, postCtrl.create);
router.get('/', auth, postCtrl.getAll);
router.get('/:id', auth, postCtrl.get);
router.put('/:id', auth, postCtrl.update);
router.delete('/:id', auth, postCtrl.delete);

router.post('/comment/add', commentCtrl.create);
router.get('/comments', commentCtrl.getAll);
router.get('/comment:id', commentCtrl.get);
router.put('/comment:id', commentCtrl.update);
router.delete('/comment:id', commentCtrl.delete);

module.exports = router;