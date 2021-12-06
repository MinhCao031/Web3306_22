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
    console.log('Hi');
    console.log(req.session.id);
    if (!req.session.id) {
        res.json({ message: 'Login required' });
    }
    return next();
};
