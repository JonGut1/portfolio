var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');
/**
* converts the .scss files to css and stores,
* them in a new folder.
* also adds prefixes to certain commands, so that they,
* would work for other browsers and also for the last 2 versions.
*/
gulp.task('styles', function(done) {
	gulp.src('src/scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 5 versions']
	}))
	.pipe(gulp.dest('docs/css'))
	browserSync.reload();
	done()
});
/**
* Runs the default gulp command.
* it watches for the changes in .scss files, index.html and .js files.
*/
gulp.task('default', function(done) {
	/**
	* Refreshes the page after save file
	*/
	browserSync.init({
     server: "docs/",
     browser: ["google chrome"]
});
	gulp.watch('src/scss/*.scss', gulp.series('styles'))
	gulp.watch('src/index.html', gulp.series('copy-html'))
	gulp.watch('src/js/*.js', gulp.series('scripts'))
	done()
});
/**
* Creates new .js files that are converted to ES 2015.
* also those files are saved in a different folder.
*/
gulp.task('scripts', function(done) {
	gulp.src('src/js/*.js')
	.pipe(babel( {
		plugins: ['transform-runtime'],
        presets: ['env']
    }))
	.pipe(gulp.dest('docs/js'))
	browserSync.reload();
	done()
});
/**
* Copies the index.html file to a dist folder on save.
*/
gulp.task('copy-html', function(done) {
	gulp.src('src/index.html')
	.pipe(gulp.dest('docs'))
	browserSync.reload();
	done()
});

