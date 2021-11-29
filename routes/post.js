const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');

router.post('/add', postCtrl.createPost);
router.get('/', postCtrl.getAllPosts);
router.get('/:id', postCtrl.getPost);
router.put('/:id', postCtrl.updatePost);
router.delete('/:id', postCtrl.deletePost);

module.exports = router;