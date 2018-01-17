const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user');


module.exports = (passport) => {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    'local-login',
    new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    }, (req, username, password, done) => {
      new UserModel({email: username}).fetch().then(model => {
        if ( !model ) return done(null, false, req.flash('error', 'Sorry Your Account Not Exits, Please Create Account.'));
        model.authenticate(password).then((user) => {
          return done(null, model);
        }, err => {
          return done(null, false, req.flash('error', 'Invalid Password.'))
        });
      })
    })
  );

  passport.use(
    'local-register',
    new LocalStrategy({
      usernameField: 'email',
      passwordField: 'passwordField',
      passReqToCallback: true
    }, (req, username, password, done) => {
      new UserModel({email: username}).fetch().then(model => {
        if (model) return done(null, false, req.flash('error', 'That email is already taken.'));

        new UserModel({
          email: username,
          password: password
        }).save().then(model => {
          return done(null, model, req.flash('success', 'Account Created Successfully'));
        })
      })
    })
  );
}