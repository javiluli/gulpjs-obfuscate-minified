'use strict'

const { src, dest, watch } = require('gulp')
const javascriptObfuscator = require('gulp-javascript-obfuscator')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

const bundleJs = function () {
  return (
    src('src/js/*.js')
      // Genera el codigo fuente como ofuscado
      .pipe(javascriptObfuscator())
      // Genera codigo minificado
      .pipe(uglify())
      // Renombra un fichero generado
      .pipe(rename({ extname: '.min.js' }))
      // Directorio de destino
      .pipe(dest('./dist/js/'))
  )
}

// Funcion que se encuentra a la escucha de los ficheros y la funcion requerida
const start = () => watch('./src/js/*.js', bundleJs)

exports.start = start
