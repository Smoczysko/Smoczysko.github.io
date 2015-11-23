var gulp = require('gulp'),
    bower = require('gulp-bower'),
    clean = require('gulp-clean'),
    inject = require('gulp-inject'),
    runSequence = require('run-sequence');

gulp.task('default', ['bower']);

gulp.task('prepare-for-commit', function () {
    runSequence(
        'clean-libs',
        'copy-libs',
        'inject-js',
        'remove-components'
    );
});

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest('bower_components/'))
});

gulp.task('clean-libs', function () {
    return gulp.src('lib', {read: false, force: true})
        .pipe(clean());
});

gulp.task('copy-js-libs', function() {
    return gulp.src([
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-resource/angular-resource.min.js',
        'bower_components/underscore/underscore-min.js'
    ]).pipe(gulp.dest('lib/js'));
});

gulp.task('copy-css-libs', function() {
    return gulp.src([
        'bower_components/bootswatch/lumen/bootstrap.min.css',
        'bower_components/fontawesome/css/font-awesome.min.css'
    ]).pipe(gulp.dest('lib/css'));
});

gulp.task('copy-fonts-libs', function() {
    return gulp.src([
        'bower_components/fontawesome/fonts/**/*.*'
    ]).pipe(gulp.dest('lib/fonts'));
});

gulp.task('copy-libs', [
    'copy-js-libs',
    'copy-css-libs',
    'copy-fonts-libs'
]);

gulp.task('remove-components', function () {
    return gulp.src(['bower_components', 'node_modules'], {read: false, force: true})
        .pipe(clean());
});

gulp.task('inject-js', function () {
    var target = gulp.src('./index.html');
    var sources = gulp.src(['!./lib/**/angular.min.js', './lib/**/*.js', './scripts/**/*.js', './lib/**/*.css'], {read: false});

    return target.pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('./'));
});