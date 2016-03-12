import gulp from 'gulp';
import babel from 'gulp-babel';
// Import nodemon from package.json
import nodemon from 'gulp-nodemon';

gulp.task('babel', () => {
  return gulp.src('server.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

// Create the nodemon gulp task
gulp.task('nodemon', () => {
  nodemon({
    script: 'dist/server.js',
    tasks: 'babel'
  });
});

// Create the default gulp task
gulp.task('default', ['nodemon']);
