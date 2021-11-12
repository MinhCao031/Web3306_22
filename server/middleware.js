const express = require('express');
const session = require('express-session');

const User = require('./models/User');

module.exports.authenticate = async function(req, res, next) {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);

    if (foundUser) {
        req.session.id = foundUser.username;
        return next();
    } else {
        res.send({
            auth: false
        });
    }
};

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.session.id) {
        res.json({ message: 'Login required' });
    }
    return next();
};
