/**
 * Created by netanelbasal on 24/05/15.
 */
var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var config = require('./../gulp-config');

gulp.task('templateCache', function() {
  gulp.src(config.templateCache)
    .pipe(templateCache({
      standalone: true,
      root      : 'js/components'
    }))
    .pipe(gulp.dest('js'));
});
