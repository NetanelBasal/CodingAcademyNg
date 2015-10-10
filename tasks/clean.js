var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function() {
  return del([
    './production/**'
  ], {
    force: true,
    read : false
  });

});
