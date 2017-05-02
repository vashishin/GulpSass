var gulp = require('gulp'); // главная переменная пректа. Инициальзация Gulp
var sass = require('gulp-sass'); //Подключаем Sass пакет

gulp.task('myfirstask', function() {
    // я просто комментарий
    var name = "Dmitriy";
    console.log("Привет меня зовут "+ name);
    console.log('Это Ваша первая инструкция (Task)');
});



gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('app/sass/style.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством пакета gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});
