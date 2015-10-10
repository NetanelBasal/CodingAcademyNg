var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var sourcemaps = require('gulp-sourcemaps');

var config = require('./../gulp-config');

gulp.task('sass', function() {

  gulp.src(config.sass.src)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass.sync())
    .pipe(prefix("last 5 versions"))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(config.sass.dist))
    .pipe(browserSync.stream({match: '**/*.css'}))
    .pipe(notify("Sass Finished!"))

});
