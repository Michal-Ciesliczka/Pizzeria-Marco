//Include Gulp
var gulp = require('gulp');

//Include Components of Gulp
var sass = require('gulp-sass');
var concat = require('gulp-concat');

//Sass task
gulp.task('sass', function() {
    return gulp.src('assets/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/styles'))
});

//Watch task
gulp.task('watch', function() {
    gulp.watch('assets/styles/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
