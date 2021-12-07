const router = require('express').Router();
const Message = require('../models/Message');
const MessageController = require('../controllers/MessageController');

// Add new message. Logged in required.
router.post('/', MessageController.addMessage);

// Get conversation. Logged in required.
router.get('/:conversationId', MessageController.getAllMessages);

module.exports = router;
