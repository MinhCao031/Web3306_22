const { nanoid } = require('nanoid');

const Notification = require('../models/Notification');
const User = require('../models/User');

module.exports = (io, socket) => {
    const createPostNotification = async (data) => {
        const foundOwner = await User.findOne({ username: data.ownerId });

        if (foundOwner) {
            const notification = new Notification({
                notificationId: nanoid(),
                ownerId: data.ownerId,
                content: `${foundOwner.name} has a new post.`
            });

            await notification.save().catch((err) => console.error(err));

            io.emit('notification', notification);
        } else {
            console.log('No post owner found');
        }
    };

    const createCommentNotification = async (data) => {
        const foundOwner = await User.findOne({ username: data.ownerId });

        if (foundOwner) {
            const notification = new Notification({
                notificationId: nanoid(),
                ownerId: data.ownerId,
                content: `${foundOwner.name} has a new comment.`
            });

            await notification.save().catch((err) => console.error(err));

            io.emit('notification', notification);
        } else {
            console.log('No comment owner found');
        }
    };

    socket.on('create post', createPostNotification);
    socket.on('create comment', createCommentNotification);
};
