const gulp = require('gulp');
const sassdoc = require('sassdoc');
const sass = require('gulp-sass');

// ...

// Tarea sassdoc
gulp.task('sassdoc', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sassdoc());
});


// Tarea css
gulp.task('css', function () {
    return gulp.src('scss/style.scss') // Ruta al archivo principal .scss
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css')); // Carpeta de destino para el archivo .css generado
});

// Tarea copy-images
gulp.task('copy-images', function () {
    return gulp.src('img/**/*')
        .pipe(gulp.dest('dist/img'));
});

// Tarea por defecto
gulp.task('default', gulp.parallel('sassdoc', 'css', 'copy-images'));