const {src, dest, watch, parallel} = require('gulp') 
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');


const option = {
    out: './Dist',
    src: './src'
}

// Style 
function style(){
    return src(`${option.src}/style/main.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest(`${option.out}`))

}

// Html 
 function htmlTest() {
    return src(`${option.src}/**/*.html`).pipe(dest(`${option.out}`))
 }


//Watch

function watchAll(){
    watch(`${option.src}/style/**/*.scss`, style)
}

exports.default = parallel(htmlTest, style, watchAll)