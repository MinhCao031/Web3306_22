const Class = require('../models/Class');
const Message = require('../models/Message');

module.exports.addMessage = async function(req, res) {
    const newMessage = new Message(req.body);

    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports.getAllMessages = async function(req, res) {
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId
        });
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json(err);
    }
};
