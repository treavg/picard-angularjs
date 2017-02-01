'use strict';

var path = require('path'),
  gulp = require('gulp'),
  extend = require('extend'),
  config = require('./build.conf.js'),
  plugins = require('gulp-load-plugins')();

var ciMode = false;

gulp.task('clean', function () {
  return gulp
    .src(config.buildFolder, {read: false})
    .pipe(plugins.clean());
});

gulp.task('scripts', function () {

  return gulp.src(config.srcJs)

    // jshint
    // .pipe(plugins.jshint())
    // .pipe(plugins.jshint.reporter('jshint-stylish'))
    // .pipe(plugins.if(ciMode, plugins.jshint.reporter('fail')))

    // package
    .pipe(plugins.concat(config.buildJsFilename))
    .pipe(plugins.header(config.closureStart))
    .pipe(plugins.footer(config.closureEnd))
    .pipe(plugins.header(config.banner))
    .pipe(gulp.dest(config.buildFolder))
    .pipe(plugins.filesize())

    // minify
    .pipe(plugins.uglify())
    .pipe(plugins.rename({ extname: '.min.js' }))
    .pipe(gulp.dest(config.buildFolder))
    .pipe(plugins.filesize())
    .on('error', plugins.util.log);

});

gulp.task('connect_ngdocs', function() {
  var connect = require('gulp-connect');
  connect.server({
    root: 'docs',
    livereload: false,
    fallback: 'docs/index.html',
    port: 8083
  });
});

gulp.task('ngdocs', [], function () {
  var gulpDocs = require('gulp-ngdocs');
  var options = {
    title: 'Picard API Documentation'

  };
  //return gulpDocs.sections({
  //    api: {
  //        glob:['src/picard.module.js', 'src/picard.factory.js'],
  //        api: true,
  //        title: 'API Internal'
  //    },
  //    admin: {
  //        glob:['src/admin.js'],
  //        api: true,
  //        title: 'Admin Module'
  //    },
  //    auth: {
  //        glob:['src/auth.js'],
  //        api: true,
  //        title: 'Auth Module'
  //    }})
    return gulp.src('src/*.js').pipe(gulpDocs.process(options)).pipe(gulp.dest('./docs'));
});

gulp.task('watch', function () {
  return gulp.watch(config.srcJs, ['scripts']);
});

gulp.task('ci', function () {
  ciMode = true;
  return gulp.start(['clean', 'scripts']);
});

gulp.task('default', ['scripts']);