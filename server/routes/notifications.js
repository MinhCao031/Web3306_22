const router = require('express').Router();
const Notification = require('../models/Notification');
const NotificationController = require('../controllers/NotificationController');

router.post('/create', NotificationController.createNotification);

router.get('/show', NotificationController.getAllNotifications);

module.exports = router;
