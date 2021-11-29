const express = require('express');
const PostController = require('../controllers/PostController');
const { isLoggedIn } = require('../middleware');

const router = express.Router();

router.get('/posts', PostController.getPosts); // Login required

router.post('/posts/:user_id', PostController.createPost); // Login required

router.post('/posts/:post_id', PostController.updatePost); // Login required

router.delete('/posts/:post_id', PostController.deletePost); // Login required

module.exports = router;
