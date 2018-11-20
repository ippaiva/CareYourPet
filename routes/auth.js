// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const session = require('express-session');
const ensureAuthenticated = require("./authenticated");
const router = express.Router();

// Bcrypt to encrypt pass
const bcryptSalt = 10;
const MongoStore = require('connect-mongo')(session);
const User = require('../models/user');

// SignUp View
router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});

// Signup process
router.post('/signup', (req, res, next) => {
  const { username, email, password} = req.body;
  if (email === '' || password === '') {
    res.render('auth/signup');
    return;
  }

  // User.findOne({ email }, (err, user) => {
  //   if (user !== null) {
  //     // res.render('auth/signup', { message: 'The account with this email already exists' });
  //     console.log("usuário já existe");
  //     return;
  //   }
  // }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashPass
    });
    console.log(newUser);

    newUser.save()
    .then( () => {
      session.save;
      .then( () => {
        res.redirect("/forms/user");
      })
    .catch(err => {
      console.log(err);
      res.render("auth/signup", { message: "Something went wrong" });
    });
  });
});

// LOGIN view
router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/home",
  failureRedirect: "/auth/login",
  passReqToCallback: true
}));

// LOGOUT process
router.get('/logout', ensureAuthenticated, (req, res, next) => {
  if (!req.session.currentUser) {
    res.redirect('/');
    return;
  }

  req.session.destroy((err) => {
    if (err) {
      next(err);
      return;
    }
    req.logout();
    res.redirect('/');
  });
});

// GOOGLE AUTH
router.get(
  '/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/plus.profile.emails.read'
    ]
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
    successRedirect: '/home'
  })
);

// FACEBOOK AUTH
// app.get('/auth/facebook', passport.authenticate('facebook'));

// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));

// TWITTER AUTH


module.exports = router;