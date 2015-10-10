var gulp = require('gulp');
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');
var config = require('./../gulp-config');

gulp.task('browser-sync', function() {
  browserSync({
    port  : 9000,
    server: {
      baseDir   : config.server.root,
      middleware: [historyApiFallback()]
    }
  });
});

