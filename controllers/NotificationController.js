const Class = require('../models/Class');
const Notification = require('../models/Notification');
const User = require('../models/User');
const { nanoid } = require('nanoid');

module.exports.createNotification = async function(req, res) {
    //   try {
    const foundUser = await User.findOne({ username: req.params.user_id });
    let foundClass = undefined;
    if (foundUser.role == 'Teacher') {
        foundClass = await Class.findOne({ teacherId: foundUser.username });
    } else {
        foundClass = await Class.findOne({ studentIds: foundUser.username });
    }

    if (foundUser && foundClass) {
        const notification = new Notification({
            notificationId: nanoid(),
            ownerId: req.params.user_id,
            teacherId: foundClass.teacherId,
            content: `${foundUser.name} đã thêm một ${req.query.type} mới.`
        });

        await notification.save().catch((err) => res.status(500).json(err));

        res.status(200).json(notification);
    } else {
        res.status(200).json({ message: 'Something went wrong' });
    }
    //   } catch (error) {
    //     res.status(500).json(error);
    //   }
};

module.exports.getAllNotifications = async function(req, res) {
    //try {
    const foundUser = await User.findOne({ username: req.params.user_id });
    let foundClass = undefined;
    if (foundUser.role == 'Teacher') {
        foundClass = await Class.findOne({ teacherId: foundUser.username }).catch((err) => console.log(err));
    } else {
        foundClass = await Class.findOne({ studentIds: foundUser.username });
    }

    if (foundUser && foundClass) {
        let foundNotifications = await Notification.find({
            teacherId: foundClass.teacherId
        });
        foundNotifications = foundNotifications.filter((notification) => notification.ownerId != foundUser.username);
        res.status(200).json(foundNotifications);
    } else {
        res.status(200).json({ message: 'Something went wrong' });
    }
    //}
    //   catch (err) {
    //     res.status(500).json(err);
    //   }
};
