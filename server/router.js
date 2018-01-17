const router = require('express').Router();
const controllers = require('./controllers');
const passport = require('passport');

router.get('/', controllers.statics.index);

router.get('/login', controllers.statics.login);
router.get('/register', controllers.statics.register);


router.post('/login', passport.authenticate('local-login', {failureRedirect: '/login', failureFlash: true}), (req, res, next) => {
  res.redirect('/');
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

router.post('/register', passport.authenticate('local-signup', {failureRedirect: '/register', failureFlash: true}), (req, res, next) => {
  res.redirect('/login');
})

module.exports = router;