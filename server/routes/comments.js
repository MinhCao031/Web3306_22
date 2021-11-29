const express = require('express');
const CommentController = require('../controllers/CommentController');
const { isLoggedIn } = require('../middleware');

const router = express.Router();

router.get('/:post_id/comments', CommentController.getAllComment); // Login required

router.post('/:post_id/comments/:user_id', CommentController.createComment); // Login required

router.post('/:post_id/comments/:id', CommentController.updateComment); // Login required

router.delete('/:post_id/comments/:id', CommentController.deleteComment); // Login required

module.exports = router;
