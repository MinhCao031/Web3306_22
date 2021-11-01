const user = require('./models/user');
const express = require('express');
const session = require('express-session');

module.exports.authenticate = async function(req, res, next) {
    const { username, password } = req.body;
    const foundUser = await user.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser.username;
        return next();
    } else {
        res.send({
            auth: false
        });
    }
};

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.session.user_id) {
        res.json({ status: 'Login required'})
    }
    next();
};
