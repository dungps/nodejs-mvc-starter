"use strict";

var gulp = require("gulp");
// var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var sass = require("gulp-sass");
var maps = require("gulp-sourcemaps");
// var cssmin = require("gulp-cssnano");
var autoprefixer = require("gulp-autoprefixer");
// var rename = require("gulp-rename");
var fs = require("fs");
var pkg = JSON.parse(fs.readFileSync("./package.json"));

// autoprefixer settings
var autoprefixerOptions = {
  browsers: ["last 2 versions", "ie 9", "android 2.3", "android 4", "opera 12"]
};

// sass options
var sassOptions = {
  errLogToConsole: true,
  outputStyle: "expanded"
};

var jsFiles = [
  './resources/minton/assets/js/jquery.min.js',
  './resources/minton/assets/js/popper.min.js',
  './resources/minton/assets/js/bootstrap.min.js',
  './resources/js/*.js'
];

var copies = [
  './resources/minton/assets/scss/icons/font-awesome/fonts'
];

gulp.task('build', ['sass', 'concat', 'copy'], () => {
  console.log('gulp build done');
});

gulp.task('concat', () => {
  gulp
  .src(jsFiles)
  .pipe(maps.init())
  .pipe(concat(`main.js`))
  .pipe(maps.write())
  .pipe(gulp.dest('./public/js'));
})

gulp.task('sass', () => {
  gulp
  .src('./resources/sass/main.scss')
  .pipe(maps.init())
  .pipe(sass(sassOptions)).on('error', sass.logError)
  .pipe(maps.write())
  .pipe(autoprefixer(autoprefixerOptions))
  .pipe(gulp.dest('./public/css'));
});

gulp.task('copy', () => {
  copies.forEach((v) => {
    gulp
    .src(`${v}/**/*`)
    .pipe(gulp.dest('./public/fonts'));
  });
})