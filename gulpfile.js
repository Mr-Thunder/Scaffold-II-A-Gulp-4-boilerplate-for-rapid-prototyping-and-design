const autoprefixer = require('autoprefixer'); // - Adds vendor prefixes to CSS
const browserSync = require('browser-sync').create(); // - Live reload across 
const cache = require('gulp-cache');// - File based caching
const concat = require('gulp-concat'); // - Merges JS files
const cssnano = require('cssnano'); // - Minifies CSS
const del = require("del"); // - Allows deleting of files and folders
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin'); // - Minifies HTML
const imagemin = require('gulp-imagemin'); // - Minifies images
const modernizr = require('gulp-modernizr'); //  detects features in browser.
const notify = require('gulp-notify'); // - Notifys messages in the terminal
const postcss = require('gulp-postcss'); // -
const sass = require('gulp-sass'); // - Transforms Sass into CSS
const sourcemaps = require('gulp-sourcemaps'); // - Creates sourcemaps
const { src, series, parallel, dest, } = require('gulp');
const uglify = require('gulp-uglify'); // - Mminifies JS

//=====================================================================
//Compile scss into css
//=====================================================================
function cssTask(){
    // Locate scss files in src folder
    return gulp.src('./src/scss/**/*.scss')
    // Initialise sourcemaps before compilation starts
    .pipe( sourcemaps.init())
    // Pass scss files through the sass compiler
    .pipe(sass())
    // Log sass errors in the terminal
    .on('error', sass.logError)
    // Autoprefix css for selected browsers and minify
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
                      // Change if you do not which to minify
                    normalizeWhitespace: true,
                    discardComments: true,
                }],
            }),
        )]
    ))
    // Now add/write the sourcemaps
    .pipe(sourcemaps.write('.'))
    // Save compiled css to dist folder
    .pipe(gulp.dest('./dist/css'))
    // Stream changes to all browsers
    .pipe(browserSync.stream());
}

//=====================================================================
// Concatonate and minify JS
//=====================================================================
function jsTask(){ 
    // Locate js files in js folder and add Jquery
    return gulp.src(['./src/js/**/*.js','./node_modules/jquery/dist/jquery.js'])
        // Initialise sourcemaps before compilation starts
        .pipe(sourcemaps.init())
        // Concatante/combine all js files
        .pipe(concat('all.js'))
        // Minify combined js files
        .pipe(uglify(
            {
                // Change if you do not which to minify
                mangle: true,
                compress: true,
                output: { beautify: false }
            }
        ))
        // Add/write the sourcemaps
        .pipe(sourcemaps.write('.'))
        // Save compiled js to dist folder
        .pipe(gulp.dest('./dist/js'))
         // Notify the files copied in the terminal
        .pipe(notify('Minified <%= file.relative %> to <%= file.path %>' ))
}
//=====================================================================
// Copy and minify HTML
//=====================================================================
function htmlTask (done) {
    // Locate files
    return gulp.src('./src/**/*html',)
    // Minify HTML
    .pipe(htmlmin(
        {
            // Change if you do not which to minify
            collapseWhitespace: true
        }
    ))
    // Copy the files to the dist folder
    .pipe(gulp.dest('./dist'))
    // Notify the files copied in the terminal
     .pipe(notify('Minified <%= file.relative %> to <%= file.path %>')),
     done();
}
//=====================================================================
// Imagemin to compress imges and reduce filesize
//=====================================================================
function imageMin(done) {
     // Locate unprocessed images
    gulp.src('./src/assets/images/*')
     // Optimise images and reduce file size, use gulp-cache to stop repeating
    .pipe(cache(imagemin([
        imagemin.gifsicle({interlaced: true, optimizationLevel: 3}), // 1 to 3
        imagemin.mozjpeg({quality: 90, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}), // 0 to 7
        imagemin.svgo({
            plugins: [{cleanupIDs: false}]
            })
        ],
        {verbose: true }
    )))
    // Send optimised images to folder
    .pipe(gulp.dest('./dist/assets/images')),
    done();
}
//=====================================================================
// Modernizr detects the features available in a user's browser.
//=====================================================================

function modernizrTask () {
    return gulp.src('./src/js/**/*.js')
      .pipe(modernizr(
        {
            'options': [
                'setClasses',
                "html5printshiv"
            ],
            'tests': [
                'touchevents',
                'backgroundcliptext',
                'cssfilters',
                'objectfit',
                'videoautoplay',
                'cssgrid',
                'cssgridlegacy',
                'cssmask',
                'smil',
                'svgclippaths'
            ],
            excludeTests: ['csstransforms3d']
          }
      ))
        // Copy the files to the src js plugins folder to added to the jsTask
      .pipe(gulp.dest('./src/js/plugins'))
  };

//=====================================================================
// Copy files that do not need to be compressed or altered
//=====================================================================

// Copy video to dist folder
function copyVideo (done) {
    // Locate files
    return gulp.src('./src/assets/video/*',)
    // Copy the files to the dist folder
    .pipe(gulp.dest('./dist/assets/video'))
     // Notify the files copied in the terminal
    .pipe(notify('Copied <%= file.relative %> to <%= file.path %>')),
    done();
}
// Copy fonts to dist folder
function copyFonts (done) {
    // Locate files
    return gulp.src('./src/assets/fonts/**/*')
    // Copy the files to the dist folder
    .pipe(gulp.dest('./dist/assets/fonts'))
     // Notify the files copied in the terminal
    .pipe(notify('Copied <%= file.relative %> to <%= file.path %>')),
    done();
}
// Copy Favicon to dist folder
function copyFavicon (done) {
    // Locate files that do not need to be compressed or altered
    return gulp.src('./src/assets/images/favicon/*')
    // Copy the files to the dist folder
    .pipe(gulp.dest('./dist/assets/images/favicon'))
    // Notify the files copied in the terminal
    .pipe(notify('Copied <%= file.relative %> to favicon folder ')),
    done();
}

//=====================================================================
//Watch for changes to files
//=====================================================================

function watchTask() {
    browserSync.init({
        server : {
            baseDir: './dist'
        },
        debugInfo: true,
        logConnections: true,
        logPrefix: "Scaffold II",
        notify: true,
        ghostMode: {
            scroll: true,
            links: true,
            forms: false
        },
        port:4000
    });
    // When anything changes in scss files, run "style" function to compile scss and update browser css without refreshing page
    gulp.watch('./src/scss/**/*.scss', cssTask);
    // When anything changes in the html files, update browser html and refresh page
    gulp.watch('./src/*.html', htmlTask).on('change', browserSync.reload);
    // When anything changes in the js files, update browser js and refresh page
    gulp.watch('./src/js/**/*.js', jsTask).on('change', browserSync.reload);
    // When a file is added to the images folder run imagemin to optimise the file
    gulp.watch('./src/assets/images/*', imageMin);
    // When a video is added copy it to the dist video folder 
    gulp.watch('./src/assets/video/*', copyVideo);
    // When a favicon is added to the dist favicon folder 
    gulp.watch('./src/assets/images/favicon/*', copyFavicon);
    // When a font is added copy it to the dist fonts folder 
    gulp.watch('./src/assets/fonts/**/*', copyFonts);
}

//=====================================================================
// Cleaning using terminal commands
//=====================================================================

// Clean assets by deleting dist folders Run 'gulp clean' in the terminal.
function clean() {
    // Del allows deletetion of files and folders using globs
    return del('./dist/*')
}

//  Clear the image cache. Run 'gulp clear' in the terminal.
function clearCache () {
    return cache.clearAll();
}

//=====================================================================
// Export tasks as private functions
//=====================================================================

exports.copyFavicon = copyFavicon;
exports.copyFonts = copyFonts;
exports.copyVideo = copyVideo;
exports.cssTask = cssTask;
exports.htmlTask = htmlTask;
exports.imageMin = imageMin;
exports.jsTask = jsTask;
exports.modernizrTask = modernizrTask;
exports.watchTask = watchTask;

// Gulp commands to be run in terminal
exports.clean = clean;
exports.clearCache = clearCache;

//=====================================================================
// Run Gulp
//=====================================================================

 exports.default = series(
     modernizrTask,
     parallel(imageMin, cssTask, jsTask, htmlTask, copyFavicon, copyFonts, copyVideo),
     watchTask
);

