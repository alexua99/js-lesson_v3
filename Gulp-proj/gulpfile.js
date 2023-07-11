const {src, dest, watch, series, parallel} = require('gulp') 
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');


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


// clear Dist

function clear1() {
    return src('./Dist', {read: false})
    .pipe(clean());
}

exports.default = series(clear1, parallel( htmlTest, style, watchAll)) 