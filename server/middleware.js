const user = require("./models/user");
const session = require('express-session');


module.exports.authenticate = async function(req, res, next) {
    const { username, password } = req.body;
    const foundUser = await user.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser.username;
        return next();
    } else {
        console.log("Error")
        return res.redirect("/login")
    }
}

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect("/login");
    }
    next();
}

