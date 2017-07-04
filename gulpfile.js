var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpack2 = require('webpack')

gulp.task('dev', function() {
  var config = require('./webpack.config.dev.js');
  config.watch = true;
  return gulp.src('src/index.js')
    .pipe(webpack(config, webpack2))
    .pipe(gulp.dest('bin/'));
});
