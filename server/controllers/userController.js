const User = require('../models/user');
const express = require('express');
const session = require('express-session');

// This function is for testing purpose only!
module.exports.register = async function(req, res) {
    const { username, password, firstName, lastName, role, email, phoneNumber } = req.body;
    const user = new User({
        username,
        password,
        firstName,
        lastName,
        role,
        email,
        phoneNumber
    });
    await user.save();
    req.session.user_id = user._id;
    res.redirect('homepage');
};

// This function should be authenticated by middleware function.
module.exports.login = async function(req, res) {
    const user = await User.findOne({ username: req.body.username });
    const data = {
        auth: true,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
    };
    res.json(data);
};

// Need to validate request input from client side first, such as whether request's data empty or not.
module.exports.update = async function(req, res) {
    const { id, firstName, lastName, email, phoneNumber, dateOfBirth } = req.body;

    const query = {
        username: id
    };

    const update = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth
    };

    const user = await User.findOneAndUpdate(query, update);
    await user.save().then(() => res.json({ status: 'OK' })).catch((err) => {
        console.log(err);
        res.json({ status: 'FAILED' });
    });
};

module.exports.setPassword = async function(req, res) {
    const { id, password } = req.body;

    const query = {
        username: id
    };

    const update = {
        password: password
    };

    const user = await User.findOneAndUpdate(query, update);
    await user.save()
    .then(() => res.json({ status: 'OK' }))
    .catch((err) => {
        const response = {
            error: err,
            status: 'Failed'
        }
        res.json(response);
    });
};

// This function is for testing purpose only!
module.exports.renderRegister = (req, res) => {
    res.render('users/register');
};

// This function is for testing purpose only!
module.exports.renderLogin = (req, res) => {
    res.render('users/login');
};

// This function is for testing purpose only!
module.exports.renderUpdate = (req, res) => {
    res.render('users/update');
};
