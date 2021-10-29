const User = require('../models/user');
const session = require('express-session');

module.exports.renderLogin = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json({ auth: true });
    res.send();
    // res.render('users/login');
};

module.exports.login = async function(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    console.log("OK");
    const { username } = req.body;
    const user = await User.findOne({ username: '19021363' });
    res.json({
        auth: true,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
    });
    res.send();
};

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
};

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
