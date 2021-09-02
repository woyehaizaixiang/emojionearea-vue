// build/gen-style.js
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const components = require('./components.json');

function buildCss(cb) {
  gulp.src('../styles/index.scss')
    .pipe(sass({
      includePaths: ['node_modules']
    }))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('index.css'))
    .pipe(gulp.dest('../lib'));
  cb()
}

function buildSeperateCss(cb) {
  Object.keys(components).forEach(compName => {
    gulp.src(`../styles/${compName}.scss`)
      .pipe(sass({
        includePaths: ['node_modules']
      }))
      .pipe(autoprefixer())
      .pipe(cleanCSS())
      .pipe(rename(`index.css`))
      .pipe(gulp.dest(`../lib/${compName}`));
  })
  cb()
}

exports.default = gulp.series(buildCss, buildSeperateCss);