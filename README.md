# Scaffold-II-The-Rapid-Design-Boilerplate-with-Gulp-4
A Gulp 4 boilerplate for rapid prototyping and design

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

## Installation

Install dependencies:

```
npm install
```

Compile the code for development and start a local server:

```
gulp
```

## Structure

```
|--dist/                       # →  Static version of the website ready to upload (never edit)
|
|--gulpfile.js/                # →  Gulpfile config and tasks
|--node_modules/               # →  Node.js packages (never edit)
|--src/                        # →  Source files
|  |--assets/                  # →  Assets
|  |  |--fonts/                # →  Assets: Fonts
|  |  |--img/                  # →  Assets: Images
|  |  |  |--favicon/           # →  Assets: Favicons
|  |  |--videos/               # →  Assets: Video
|  |--js/                      # →  JS
|  |  |--plugins/              # →  JS: Components
|  |  |--app.js                # →  JS: Main file
|  |--scss/                    # →  Styles: SASS 7-1 Architecture
|  |  |--abstracts/
|  |  |  |--_variables.scss    # →  Sass Variables
|  |  |  |--_functions.scss    # →  Sass Functions
|  |  |  |--_mixins.scss       # →  Sass Mixins
|  |  |  |--_placeholders.scss # →  Sass Placeholders
|  |  |--base/
|  |  |  |--_reset.scss        # →  Reset - normalize.css
|  |  |  |--_typography.scss   # →  Typography rules
|  |  |--components/
|  |  |  |--_buttons.scss      # →  Buttons
|  |  |  |--_carousel.scss     # →  Carousel
|  |  |  |--_cover.scss        # →  Cover
|  |  |  |--_dropdown.scss     # →  Dropdown
|  |  |  |--_loading-animation.scss     # →  Animated Loader
|  |  |--layout/
|  |  |  |--_navigation.scss   # →  Navigation
|  |  |  |--_grid.scss         # →  Grid system
|  |  |  |--_header.scss       # →  Header
|  |  |  |--_footer.scss       # →  Footer
|  |  |  |--_sidebar.scss      # →  Sidebar
|  |  |  |--_forms.scss        # →  Forms
|  |  |--pages/
|  |  |  |--_about.scss        # →  About specific styles
|  |  |  |--_contact.scss      # →  Contact specific styles
|  |  |  |--_home.scss         # →  Home specific styles
|  |  |--themes/
|  |  |  |--_theme.scss        # →  Default theme
|  |  |  |--_admin.scss        # →  Admin theme
|  |  |--vendors/
|  |  |  |--_bootstrap.scss    # →  Bootstrap
|  |  |  |--_jquery-ui.scss    # →  jQuery UI
|  |  |--main.scss             # →  Main Sass file
|  |--pages/                   # →  Pages HTML
|  |  |--about.html            # →  Templates: Layouts
|--.gitignore                  # →  Gitignore
|--package-lock.json           # →  NPM lock file (never edit)
|--package.json                # →  Node.js dependencies and scripts
```

## Credits

- Images from Unsplash.com
- Video content and gifs of Fortnite [game](https://www.epicgames.com/fortnite/en-US/home)

## License
[MIT](LICENSE)

Made with :zap: by [MrThunder](http://www.mrthunder.com)

[PostCSS Preset Env](href="https://preset-env.cssdb.org/") Use tomorrow’s CSS today
