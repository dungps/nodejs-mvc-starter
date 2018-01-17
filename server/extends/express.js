const ejs = require('ejs');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const compression = require("compression");
const multer = require("multer");
const flash = require('express-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const upload = multer({ dest: "storage/" });
const router = require('../router');
const path = require('path');
const passport = require('passport');

const viewPath = path.resolve(__dirname, '..', '..', 'resources', 'views');
const sessionStore = new session.MemoryStore;

module.exports = (app, express) => {

  app.set("view engine", "ejs");
  app.set("views", viewPath);

  // set static file
  app.use(express.static(path.resolve(__dirname, '..', '..', "public")));

  if (process.env.NODE_ENV == 'development') {
    app.use(morgan("tiny"));
  }

  // setup bodyparser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // enable gzip
  app.use(compression());

  app.use(cookieParser());
  app.use(flash());

  app.use(session({
    secret: 'CMS Starter',
    resave: true,
    saveUninitialized: true
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  // app.use((req, res, next) => {
  //   req.mailer = 
  // })

  app.use('/', router);

  if ( process.env.NODE_ENV == 'production' ) {
    app.use((req, res, next) => {
      var err = new Error('Page not found');
      err.status = 404;
      next(err);
    });

    app.use((err, req, res, next) => {
      var status = err.status || 500;
      var pathToErrFile = path.resolve(__dirname, '..', '..', 'public', status + '.html');
      if (fs.existsSync(pathToErrFile)) {
        res.status(status).sendFile(pathToErrFile);
      }
    });
  }

  return app;
}