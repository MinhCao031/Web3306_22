const router = require('express').Router();
const Conversation = require('../models/Conversation');
const ConversationController = require('../controllers/ConversationController');

// Create new conversation between 2 users. Logged in required.
router.post('/', ConversationController.createConversation);

// Get conversations of an user. Logged in required.
router.get('/:userId', ConversationController.getAllConversations);

// Get conversation between 2 users. Logged in required.
router.get('/find/:firstUserId/:secondUserId', ConversationController.getConversation);

module.exports = router;
