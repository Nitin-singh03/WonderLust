const User = require('../models/user.js');

module.exports.signup = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!");
            return res.redirect("/listings");
        });
    }
    catch (e) {
        req.flash('error', e.message);
        return res.redirect("/signup");
    }
}

module.exports.renderSignupForm = (req, res) =>{
    res.render("users/signup.ejs");
}

module.exports.renderLoginForm = (req, res) =>{
    res.render("users/login.ejs");
}

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    res.redirect("/listings");
}

module.exports.logout = (req, res) =>{
    req.logout((err) =>{
        if(err){
            return next(err);
        }
        req.flash("success", "you are logged out!");
        res.redirect("/listings");
    })
}