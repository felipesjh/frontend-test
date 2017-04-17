var gulp = require('gulp');

var cleanCSS = require('gulp-clean-css');

gulp.task('minificar-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});