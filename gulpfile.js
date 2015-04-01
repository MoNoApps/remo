var gulp   = require('gulp');
var jshint = require('gulp-jshint');

var scripts = [
'./index.js',
'./api/*.js',
'./sv/*.js'
];

gulp.task('lint', function() {
  gulp.src(scripts)
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('default', ['lint']);
