const User = require('../models/user');
const session = require('express-session');


// This function is for testing purpose only!
module.exports.renderLogin = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json({ auth: true });
    res.send();
    // res.render('users/login');
};

// This function should be authenticated by middleware function.
module.exports.login = async function(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    const { username } = req.body;
    // '19021363' username is for testing purpose only, please use username in request.body instead.
    const user = await User.findOne({ username: '19021363' }); 
    res.json({
        auth: true,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
    });
    res.send();
};

// This function is for testing purpose only!
module.exports.renderRegister = (req, res) => {
    res.render('users/register');
};

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

// This function is for testing purpose only!
module.exports.renderUpdate = (req, res) => {
    res.render('users/update');
};

module.exports.update = async function(req, res) {
    const { id, firstName, lastName, email, phoneNumber } = req.body;

    const query = {
        username: id
    }

    const user = await User.findOneAndUpdate(query, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber
    })
    await user.save();
    
    res.json({
        status: "OK"
    })
    res.send()
};