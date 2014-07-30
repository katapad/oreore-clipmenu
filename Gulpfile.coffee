gulp = require 'gulp'
coffee = require 'gulp-coffee'
newer = require 'gulp-newer'
#gutil = require 'gulp-util'


coffeeDest = "./"
gulp.task "coffee", ->
  gulp.src("./src/coffee/**/*.coffee")
    .pipe(newer(coffeeDest))
    .pipe(coffee(bare: true))
    .pipe(gulp.dest(coffeeDest))




gulp.task 'watch', ->
  gulp.watch 'src/**/*.coffee', ['coffee']
  return


gulp.task('default', ['coffee', 'watch']);