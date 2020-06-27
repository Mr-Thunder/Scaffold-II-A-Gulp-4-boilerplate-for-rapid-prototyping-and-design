const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const cache = require('gulp-cache');
const concat = require('gulp-concat');
const cssnano = require('cssnano');
const del = require("del");
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const { parallel } = require('gulp');
const uglify = require('gulp-uglify');

//=====================================================================
//Compile scss into css
//=====================================================================
function styleTask(){
    // 1. Locate scss files in src folder
    return gulp.src('./src/scss/**/*.scss')
    // 2. Initialise sourcemaps before compilation starts
    .pipe( sourcemaps.init())
    // 3. Pass scss files through the sass compiler
    .pipe(sass())
    // 4. Log sass errors in the terminal
    .on('error', sass.logError)
    // 5. Autoprefix css for selected browsers and minify
    .pipe(postcss(
        [autoprefixer(
            'last 4 versions',
            'firefox >= 4',
            'safari 7',
            'safari 8',
            'IE 8',
            'IE 9',
            'IE 10',
            'IE 11'
            ),
        cssnano( ({
            preset: [
                'default', {
                    // Allow minification true/false
                    normalizeWhitespace: true,
                    discardComments: true,
                }],
            }),
        )]
    ))
    // 6. Now add/write the sourcemaps
    .pipe(sourcemaps.write('.'))
    // 7. Save compilled css to dist folder
    .pipe(gulp.dest('./dist/css'))
    // 8. Stream changes to all browsers
    .pipe(browserSync.stream());
}

//=====================================================================
// concatonate and minify JS
//=====================================================================

function jsTask(){
    return gulp.src(['./src/js/plugins/*.js', './src/js/*.js'])
        .pipe(concat('global.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}
//=====================================================================
// Imagemin to compress imges and reduce filesize
//=====================================================================

function imageMin() {
    // Locate unprocessed images
    return gulp.src('./src/assets/images/*.{gif,png,jpg,svg}')
        // Optimise images and reduce file size,
        // use gulp-cache to remember which files have been optimised to avoid replecation of task.
        .pipe(cache(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ])))
        // Send optimised images to folder
        .pipe(gulp.dest('./dist/assets/images'))
}

//=====================================================================
// Copy files that do not need to be compressed or altered
//=====================================================================

// Copy HTML files to dist folder
function copyHTML (done) {
    // Locate files
    return gulp.src('./src/*html',)
    // Copy the files to the dist folder
    .pipe(gulp.dest('./dist'))
    .pipe(notify('Gulp copied a HTML file'))
    done();
}

// Copy video to dist folder
function copyVideos (done) {
    // Locate files
    return gulp.src('./src/assets/video/*',)
    // Copy the files to the dist folder
    .pipe(gulp.dest('./dist/assets/video'))
    .pipe(notify('Gulp copied a video'))
    done();
}
// Copy fonts to dist folder
function copyFonts (done) {
    // Locate files that do not need to be compressed or altered
    return gulp.src('./src/assets/fonts/**/*')
    // Copy the files to the dist folder
    .pipe(gulp.dest('./dist/assets/fonts'))
    done();
}
// Copy Favicon to dist folder
function copyFavicon (done) {
    // Locate files that do not need to be compressed or altered
    return gulp.src('./src/assets/images/favicon/**/*')
    // Copy the files to the dist folder
    .pipe(gulp.dest('./dist/assets/images/favicon'))
    done();
}

//=====================================================================
//Watch for changes to files
//=====================================================================

function watch() {
    browserSync.init({
        server : {
            baseDir: './dist'
        },
        debugInfo: true,
        logConnections: true,
        logPrefix: "Scaffold II",
        notify: true,
        ghostMode: {
            scroll: false,
            links: false,
            forms: false
        }
    });
    // When anything changes in scss files, run "style" function to compile scss and update browser css without refreshing page
    gulp.watch('./src/scss/**/*.scss', styleTask);
    // When anything changes in the html files, update browser html and refresh page
    gulp.watch('./src/*.html').on('change', browserSync.reload);
    // When anything changes in the js files, update browser js and refresh page
    gulp.watch('./src/js/**/*.js', jsTask).on('change', browserSync.reload);
    // When a file is added to the images folder run imagemin to optimise the file
    gulp.watch('./src/assets/images/*', imageMin);
    // gulp.series(parallel(style, js, imageMin));
    // gulp.watch('./src/assets/video/*', copyFiles);

    // gulp.watch('./src/*html',
    // './src/assets/video/*',
    // './src/assets/images/favicon/*',
    // './src/assets/images/fonts/*', copyFiles);
}

//=====================================================================
// Cleaning using terminal commands
//=====================================================================

//  Clear the image cache. Run 'gulp clear' in the terminal.
function clearCache () {
    return cache.clearAll();
}

// Clean assets by deleting dist folders Run 'gulp clean' in the terminal.
function clean() {
    return del('./dist/*',);
}

//=====================================================================
// Export amd run tasks
//=====================================================================

exports.style = styleTask;
exports.jsTask = jsTask;
exports.watch = watch;
exports.imageMin = imageMin;
exports.copyHTML = copyHTML;
exports.copyFavicon = copyFavicon;
exports.copyFonts = copyFonts;
exports.copyVideos = copyVideos;

// Gulp runs 3 file copying tasks parallel
exports.copyFiles = parallel(copyFavicon, copyFonts, copyFonts);


// Gulp commands to be run in terminal
exports.clearCache = clearCache;
exports.clean = clean;

// gulp.task('default', gulp.parallel())
// gulp.task('default', gulp.series(watch, browserSync));

 //this will first trigger sass() and js() functions parallel, then after executing these two, browser_sync will run
 //exports.default = series(parallel(sass, js), browser_sync);

//   exports.default = series(parallel(style, js, imageMin), watch);
// gulp.task('default', gulp.parallel(style, js, imageMin, copyFiles), watch);

//   gulp.task('copyFiles',gulp.parallel(copyFavicon,copyFonts, copyFonts));

//   gulp.task('default', gulp.series (gulp.parallel(style, js, imageMin, copyFiles), watch, browserSync));
//   gulp.task('default', gulp.series(clean, gulp.parallel(scripts, styles)));

// gulp.task('default', gulp.parallel(style, imageMin), watch);