const {src, dest, watch, parallel} = require('gulp') 
const sass = require('gulp-sass')(require('sass'));


// Style 
function style(){
    return src('./src/style/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist'))

}


//Watch

function watchAll(){
    watch('./src/style/main.scss', style)
}

exports.default = parallel(style, watchAll)