const Class = require('../models/Class');
const Notification = require('../models/Notification');

module.exports.createNotification = async function(req, res) {
    try {
        const foundUser = await User.findOne({ username: req.params.user_id });
        const foundClass = undefined;
        if (foundUser.role == 'Teacher') {
            foundClass = await Class.findOne({ teacherId: foundUser.username });
        } else {
            foundClass = await Class.findOne({ studentIds: foundUser.username });
        }

        if (foundOwner && foundClass) {
            const notification = new Notification({
                notificationId: nanoid(),
                ownerId: req.params.user_id,
                teacherId: foundClass.teacherId,
                content: `${foundOwner.name} has a new ${req.query.type}.`
            });

            await notification.save().catch((err) => res.status(500).json(err));

            res.status(200).json(notification);
        } else {
            res.status(200).json({ message: 'Something went wrong' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports.getAllNotifications = async function(req, res) {
    try {
        const foundUser = await User.findOne({ username: req.params.user_id });
        const foundClass = undefined;
        if (foundUser.role == 'Teacher') {
            foundClass = await Class.findOne({ teacherId: foundUser.username });
        } else {
            foundClass = await Class.findOne({ studentIds: foundUser.username });
        }

        if (foundUser && foundClass) {
            const foundNotifications = await Notification.find({ teacherId: foundClass.teacherId });
            res.status(200).json(foundNotifications);
        } else {
            res.status(200).json({ message: 'Something went wrong' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
