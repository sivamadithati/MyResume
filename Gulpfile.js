var gulp = require('gulp');
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    gulp.src('app/resume/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/resume/'));
});
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/resume/*.scss", ['sass']);
    gulp.watch("app/**/*.html").on('change', browserSync.reload);
    gulp.watch("app/**/*.js").on('change', browserSync.reload);
});
gulp.task('default',['serve']);