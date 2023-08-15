var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', async function(){
    gulp.src('css/styles.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'))
});