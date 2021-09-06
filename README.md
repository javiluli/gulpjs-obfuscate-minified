# JavaScript ofuscado y minificado con Gulp.js

## Instalar dependencias

```bash
npm i
```

## Iniciar script de Gulp

```bash
npx gulp start
```

## Configurar fichero principal gulpfile.js

Require necesario

```js
const { src, dest, watch } = require('gulp')
const javascriptObfuscator = require('gulp-javascript-obfuscator')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
```

Función principal que maneja las dependencias de gulp

```js
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
```

Función escuchador de gulp

```js
const start = () => watch('./src/js/*.js', bundleJs)
```

Exportar tarea de gulp

```js
exports.start = start
```
