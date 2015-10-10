// The paths are relative to the gulpfile.js

var config = {

  server: {
    root: './'
  },

  js: {
    mainFileName: 'main.js',
    src         : './js/main.js',
    dist        : './build',
    watch       : ['./js/**/**/*.js']

  },

  sass: {
    src  : './sass/main.scss',
    dist : './build',
    watch: ['./sass/**/*.scss', './client/js/components/**/**/**/*.scss', './client/js/**/*.scss']
  },

  img: {
    src : './img/**/**/*.{png,gif,jpg,jpeg}',
    dist: './img/'
  },

  bower: {
    src : './index.html',
    dist: './',
    file: './bower.json'
  },

  live: {
    path: ['./*.html', './js/components/**/**/*.html']
  },

  templateCache: './js/components/**/**/*.html',

  copy: {
    src : [''],
    dist: './production'
  }

}

module.exports = config;
