const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const commentCtrl = require('../controllers/comment');

router.post('/add', postCtrl.createPost);
router.get('/', postCtrl.getAllPosts);
router.get('/:id', postCtrl.getPost);
router.put('/:id', postCtrl.updatePost);
router.delete('/:id', postCtrl.deletePost);

router.post('/comment/add', commentCtrl.createComment);
router.get('/comments', commentCtrl.getAllComments);
router.get('/comment:id', commentCtrl.getComment);
router.put('/comment:id', commentCtrl.updateComment);
router.delete('/comment:id', commentCtrl.deleteComment);

module.exports = router;