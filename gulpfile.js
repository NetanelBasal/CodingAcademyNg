var gulp = require('gulp');
var config = require('./gulp-config');
var requireDir = require('require-dir');

var runSequence = require('run-sequence');

requireDir('./tasks', {
  recurse: true
});

gulp.task('dev', ['js', 'sass', 'browser-sync'], function() {
  gulp.watch(config.js.watch, ['js']);
  gulp.watch(config.sass.watch, ['sass']);
  gulp.watch(config.bower.file, ['bower']);
  gulp.watch(config.live.path, ['bs-reload']);
});

gulp.task('build', function( cb ) {
  runSequence('clean', 'copy', 'usemin', cb);
});



