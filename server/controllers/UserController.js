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
    console.log(update);
    const user = await User.findOneAndUpdate(query, update);

    await user.save().then(() => res.json({ status: 'OK' })).catch((err) => {
        const response = {
            error: err,
            status: 'Failed'
        };
        return res.json(response);
    });
};

//codeTT
module.exports.importFile = async function(req, res) {
    
    var arr = req.body.inpjson;
    for (var i = 0; i < arr.length; i++){
        var obj = arr[i];
        const { id, dateOfBirth, drl, gender, gpa, hometown, level, name, username } = obj;
            const user = new User({
                username: username,
                password: username,
                level: level,
                name: name,
                dateOfBirth: dateOfBirth,
                gender: gender,
                hometown: hometown,
                gpa: gpa,
                drl: drl
            });
           
            await user.save()
            .then(() => {return res.json({ status: 'OK' })})
            .catch((err) => {
                const response = {
                    error: err,
                    status: 'Failed'
                };
                console.log(response);
                return res.json(response);
            });
            // user
            //     .save()
            //     .then((data) => {
            //         console.log(data);
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     });
            }
        
};

module.exports.setPassword = async function(req, res) {
    const { user_id } = req.params;
    const { oldPassword, newPassword } = req.body;

    isValid = await User.findAndValidate(user_id, oldPassword);

    if (isValid) {
        const user = await User.findOne({ username: user_id });
        user.password = newPassword;

        await user
            .save()
            .then(() => {
                res.json({ success: true });
            })
            .catch((err) => {
                const response = {
                    error: err,
                    success: false
                };
                res.json(response);
            });
    } else {
        res.json({ success: false });
    }
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
