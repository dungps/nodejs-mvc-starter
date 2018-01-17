module.exports = {
  index: (req, res, next) => {
    res.render('home');
  },

  login: (req, res, next) => {
    if ( req.user ) {
      res.redirect('/');
    }

    res.render('login', {
      error : req.flash("error"),
      success: req.flash("success"),
    });
  },

  register: (req, res, next) => {
    if (req.user) {
      res.redirect('/');
    }

    res.render('register', {
      error : req.flash("error"),
      success: req.flash("success"),
    });
  }
}