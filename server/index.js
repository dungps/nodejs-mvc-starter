const http = require('http');
const gulp = require('gulp');
const passport = require('passport');

module.exports = (app, express) => {
  
  require('./extends/passport')(passport);
  require('./extends/express')(app, express);

  if (process.env.NODE_ENV == 'development') {
    require('../gulpfile');
    gulp.run('build');
  }

  http.createServer(app).listen(process.env.APP_PORT, "0.0.0.0", () => {
    console.log(`Server is running in port ${process.env.APP_PORT}`);
  });
}