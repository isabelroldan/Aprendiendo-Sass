const gulp = require('gulp');

// Tarea inicio
gulp.task('inicio', function () {
    console.log('Generando proyecto CV');
});

// Tarea final
gulp.task('final', function () {
    console.log('Proyecto CV generado');
});

// Tarea por defecto
gulp.task('defecto', function () {
    return gulp.src(['*.html', '*.css'])
        .pipe(gulp.dest('dist/'));
});