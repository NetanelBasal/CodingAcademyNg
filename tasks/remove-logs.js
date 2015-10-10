var gulp = require('gulp');
var stripDebug = require('gulp-strip-debug');

gulp.task('remove-debugs', function() {

  return gulp.src('./production/*.js')
    .pipe(stripDebug())
    .pipe(gulp.dest('./production'));
});
