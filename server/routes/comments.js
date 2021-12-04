const express = require('express');
const CommentController = require('../controllers/CommentController');
const { isLoggedIn } = require('../middleware');

const router = express.Router();

router.post('/:post_id/:user_id', CommentController.createComment); // Login required

router.post('/:post_id/:user_id/:comment_id', CommentController.updateComment); // Login required

router.delete('/:post_id/:comment_id', CommentController.deleteComment); // Login required

module.exports = router;
