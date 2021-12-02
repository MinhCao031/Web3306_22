const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema(
    {
        notificationId: {
            type: String
        },
        ownerId: {
            type: String
        },
        content: {
            type: String
        }
    },
    { timestamps: true }
);

const Notification = mongoose.model('Notification', NotificationSchema);

module.exports = Notification;
