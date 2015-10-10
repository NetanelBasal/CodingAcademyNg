var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var browserSync = require('browser-sync');
var browserify = require('browserify');
var plumber = require('gulp-plumber');
var buffer = require('vinyl-buffer');
var notify = require("gulp-notify");
var babel = require('babelify');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

var config = require('./../gulp-config');

gulp.task('js', function() {

  var bundler = browserify(config.js.src, { debug: true }).transform(babel);

  bundler.bundle()
    .on('error', function( err ) {
      console.error(err);
      this.emit('end');
    })
    .pipe(source(config.js.mainFileName))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(ngAnnotate())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(config.js.dist))
    .pipe(notify("Js Finished!"))
    .pipe(browserSync.reload({
      stream: true
    }));

});
