const User = require('../models/User');
const express = require('express');
const session = require('express-session');

module.exports.login = async function(req, res) {
    const user = await User.findOne({ username: req.body.username });
    const data = {
        auth: true,
        username: user.username,
        name: user.name,
        role: user.role
    };
    return res.json(data);
    // res.redirect('/home');
};

module.exports.logout = async function(req, res) {
    req.session.destroy();
    if (req.session) {
        return res.json({ message: 'Something went wrong!' });
    } else {
        return res.json({ success: true });
    }
};

module.exports.update = async function(req, res) {
    const { name, email, phoneNumber, dateOfBirth, fieldOfStudy, introduction } = req.body;
    const { user_id } = req.params;
    const query = { username: user_id };
    const update = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth,
        fieldOfStudy: fieldOfStudy,
        introduction: introduction
    };
    const user = await User.findOneAndUpdate(query, update);

    await user.save().then(() => res.json({ status: 'OK' })).catch((err) => {
        const response = {
            error: err,
            status: 'Failed'
        };
        return res.json(response);
    });
};

module.exports.setPassword = async function(req, res) {
    const { user_id } = req.params;
    const { password } = req.body;
    const query = { username: user_id };
    const update = { password: password };
    const user = await User.findOneAndUpdate(query, update);

    await user.save().then(() => res.json({ status: 'OK' })).catch((err) => {
        const response = {
            error: err,
            status: 'Failed'
        };
        res.json(response);
    });
};

module.exports.getInfo = async function(req, res) {
    const { user_id } = req.params;
    const user = await User.findOne({ username: user_id });

    if (user) {
        return res.json(user);
    } else {
        return res.json({ message: 'Something went wrong!' });
    }
};