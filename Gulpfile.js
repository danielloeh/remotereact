var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

gulp.task('scripts', ['copyStaticResources'], function () {
  return browserify({entries: './app/main.js', extensions: ['.js'], debug: true})
    .transform(babelify, {presets: ["react"]})
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('build'));

});

gulp.task('copyStaticResources', function () {
  gulp.src('./static/**/*')
    .pipe(gulp.dest('build/static'));
});

gulp.task('default', ['copyStaticResources', 'scripts']);


