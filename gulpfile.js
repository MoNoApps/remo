var gulp   = require('gulp');
var jshint = require('gulp-jshint');

var scripts = [
  './*.js',
  './api/*.js',
  './lib/*.js',
  './test/*.js'
];

gulp.task('lint', function() {
  gulp.src(scripts)
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('default', ['lint']);
