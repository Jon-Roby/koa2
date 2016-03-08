import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('babel', () => {
  return gulp.src('server.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});
