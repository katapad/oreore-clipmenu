gulp = require 'gulp'
coffee = require 'gulp-coffee'
#gutil = require 'gulp-util'

gulp.task "coffee", ->
  gulp.src("./src/coffee/**/*.coffee")
    .pipe(coffee(bare: true))
    .pipe(gulp.dest("./"))




gulp.task 'watch', ->
  gulp.watch 'src/**/*.coffee', ['coffee']
  return
