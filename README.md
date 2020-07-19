# Scaffold II - A Gulp 4 boilerplate for rapid prototyping and design

Scaffold II is a design focused gulp boilerplate that automates tasks to speed up workflow, such as SCSS, HTML and JS compilation and minification. It allows for experimental CSS with PostCSS Preset Env and follows and the recommended SASS 7-1 file architecture. Image optimisation, live reload across multiple devices and the latest jQuery, normalize.css and customisable modernizr are also included.

![Sacffold II](http://mrthunder.com/app/assets/images/scaffold-II.png)

## Features

- [gulp 4](https://gulpjs.com/) Gulp is a build system or task runner that automates common tasks.
- [browserSync](https://www.browsersync.io/) Allows live reload and browser synchronization across multiple devices simultaneously
- [gulp-sass](https://www.npmjs.com/package/gulp-sass) Transforms CSS into [SASS](http://https://sass-lang.com/), using the SAAS [7-1 pattern](http://https://sass-guidelin.es/#architecture)
- [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) Minifies images. Compresses GIF with [Gifsicle](https://github.com/imagemin/imagemin-gifsicle), compresses JPEG [Mozjpeg](https://github.com/imagemin/imagemin-mozjpeg), compresses PNG with [Optipng](https://github.com/imagemin/imagemin-optipng)  and compresses SVG with [SVGO](https://github.com/imagemin/imagemin-svgo).
- [gulp-modernizr](https://www.npmjs.com/package/gulp-modernizr) Detects features in the user's browser.
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) Minifies JS.
- [gulp-rename](https://www.npmjs.com/package/gulp-rename) Allows renaming of files to add .min
- [Jquery](https://www.npmjs.com/package/jquery) jQuery is a JavaScript library, that will be updated to the latest version via NPM
- [node-normalize-scss](https://github.com/necolas/normalize.css) Adds CSS reset for browsers via NPM
- [gulp-notify](https://github.com/mikaelbr/gulp-notify) Allows notifcation messages in the terminal to give extra information and feedback on files that are being copied etc.
- [cssnano](https://cssnano.co) Minifies CSS
- [gulp-postcss](https://www.npmjs.com/package/gulp-postcss) PostCSS pipes CSS through other plugins such as Autoprefixer.
- [autoprefixer](https://www.npmjs.com/package/autoprefixer) Adds vendor prefixes to CSS
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) Sourcemaps allow the browser to map CSS and JS generated by Sass and Uglify back to the original source file.
- [gulp-cache](https://github.com/jgable/gulp-cache) A temp file based caching proxy, used to stop repeating Imagemin optimisations.
- [del](https://www.npmjs.com/package/del) Allows cleaning and deleting of generated files.
- [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) Minifies HTML.
- [gulp-concat](https://www.npmjs.com/package/gulp-concat) Merges JS files.
- [PostCSS-Preset-Env](https://preset-env.cssdb.org/) Use tomorrow’s CSS today

## Installation and Prerequisites

Node and gulp must be installed.

### [Node.js](https://nodejs.org) above 12.0.x.


### [Gulp](http://gulpjs.com) above 4.0.x.

```
$ npm install --global gulp-cli
```

Install Scaffold II dependencies:

```
npm install
```

## Tasks

Compile the code for development, start local server, watch files for changes  and automatically Refresh Across Devices:

```
gulp
```

Delete files in dist folder

```
gulp clean
```

Clear the cache

```
gulp clearCache
```


## Structure

```
|--dist/                              # →  Static version of the website ready to upload (never edit)
|
|--gulpfile.js/                       # →  Gulpfile config and tasks
|--node_modules/                      # →  Node.js packages (never edit)
|--src/                               # →  Source files
|  |--assets/                         # →  Assets
|  |  |--fonts/                       # →  Assets: Fonts
|  |  |--img/                         # →  Assets: Images
|  |  |  |--favicon/                  # →  Assets: Favicons
|  |  |--videos/                      # →  Assets: Video
|  |--js/                             # →  JS
|  |  |--plugins/                     # →  JS: Plugins
|  |  |  |--modernizr.js              # →  Plugins: Modernizr file 
|  |  |--global.js                    # →  JS: Main file
|  |--scss/                           # →  Styles: SASS 7-1 Architecture
|  |  |--abstracts/
|  |  |  |--_variables.scss           # →  Abstracts: Sass Variables
|  |  |  |--_functions.scss           # →  Abstracts: Sass Functions
|  |  |  |--_mixins.scss              # →  Abstracts: Sass Mixins
|  |  |  |--_placeholders.scss        # →  Abstracts: Sass Placeholders
|  |  |--base/
|  |  |  |--_reset.scss               # →  Base: Reset - normalize.css
|  |  |  |--_typography.scss          # →  Base: Typography rules
|  |  |--components/
|  |  |  |--_buttons.scss             # →  Components: Buttons
|  |  |  |--_carousel.scss            # →  Components: Carousel
|  |  |  |--_cover.scss               # →  Components: Cover
|  |  |  |--_dropdown.scss            # →  Components: Dropdown
|  |  |  |--_loading-animation.scss   # →  Components: Animated Loader
|  |  |--layout/
|  |  |  |--_navigation.scss          # →  Layout: Navigation
|  |  |  |--_grid.scss                # →  Layout: Grid system
|  |  |  |--_header.scss              # →  Layout: Header
|  |  |  |--_footer.scss              # →  Layout: Footer
|  |  |  |--_sidebar.scss             # →  Layout: Sidebar
|  |  |  |--_forms.scss               # →  Layout: Forms
|  |  |--pages/
|  |  |  |--_about.scss               # →  Pages: About specific styles
|  |  |  |--_contact.scss             # →  Pages: Contact specific styles
|  |  |  |--_home.scss                # →  Pages: Home specific styles
|  |  |--themes/
|  |  |  |--_theme.scss               # →  Themes: Default theme
|  |  |  |--_admin.scss               # →  Themes: Admin theme
|  |  |--vendors/
|  |  |  |--_bootstrap.scss           # →  Vendors: Bootstrap
|  |  |  |--_jquery-ui.scss           # →  Vendors: jQuery UI
|  |  |--main.scss                    # →  SCSS: Main Sass file
|  |--pages/                          # →  Pages 
|  |  |--about.html                   # →  Pages: HTML
|--.gitignore                         # →  Gitignore
|--package-lock.json                  # →  NPM lock file (never edit)
|--package.json                       # →  Node.js dependencies and scripts
```

## Credits

- Images from [Unsplash](https://www.unsplash.com)
- Video content and gifs of [Fortnite](https://www.epicgames.com/fortnite/en-US/home) game 

## License
[MIT](LICENSE)

Made with :zap: by [MrThunder](http://www.mrthunder.com)

