var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('default', ['build']);

gulp.task('build', function() {
    return gulp.src('src/main.scss').
        pipe(sass().on('error', sass.logError)).
        pipe(autoprefixer({ browsers: ['last 2 versions'] })).
        pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function() {
    gulp.watch('src/**/*.scss', ['build']);
});

