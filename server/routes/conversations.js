const router = require('express').Router();
const Conversation = require('../models/Conversation');
const ConversationController = require('../controllers/ConversationController');

router.post('/', ConversationController.createConversation);

router.get('/:userId', ConversationController.getAllConversations);

router.get('/find/:firstUserId/:secondUserId', ConversationController.getConversation);

module.exports = router;
