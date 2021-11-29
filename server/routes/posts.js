const express = require('express');
const PostController = require('../controllers/PostController');
const { isLoggedIn } = require('../middleware');

const router = express.Router();

router.get('/', PostController.getPosts); // Login required

router.get('/:post_id', PostController.getPost);

router.post('/:user_id', PostController.createPost); // Login required

router.post('/:post_id', PostController.updatePost); // Login required

router.delete('/:post_id', PostController.deletePost); // Login required

module.exports = router;
