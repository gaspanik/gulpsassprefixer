var gulp = require('gulp')
,	sass = require('gulp-ruby-sass')
,	prefix = require('gulp-autoprefixer')
,	minifycss = require('gulp-minify-css')
,	rename = require('gulp-rename');

gulp.task('styles', function() {
	gulp.src('scss/*.scss')
	.pipe(sass({ style: 'expanded' }))
	.pipe(prefix('last 2 version'))
	.pipe(gulp.dest('css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifycss())
	.pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
	gulp.watch(['scss/*.scss'], ['styles']);
});

gulp.task('default', ['styles', 'watch']);
