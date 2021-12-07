const router = require('express').Router();
const Notification = require('../models/Notification');
const NotificationController = require('../controllers/NotificationController');

router.post('/create/:user_id', NotificationController.createNotification);

router.get('/show/:user_id', NotificationController.getAllNotifications);

module.exports = router;
