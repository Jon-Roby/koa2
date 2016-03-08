import gulp from 'gulp';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';

gulp.task('babel', () => {
  return gulp.src('server.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('nodemon', () => {
  nodemon({
    script: 'dist/server.js',
    tasks: 'babel'
  });
});

gulp.task('default', ['nodemon']);
