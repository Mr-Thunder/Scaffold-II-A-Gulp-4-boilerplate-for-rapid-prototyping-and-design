# Scaffold-II-The-Rapid-Design-Boilerplate-with-Gulp-4
A Gulp 4 boilerplate for rapid prototyping and design
![Rapid Image Hover Menu](http://mrthunder.com/app/assets/images/scaffold-II.png)


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
|--dist/                   # →  Static version of the website ready to upload (never edit)
|
|--gulpfile.js/            # →  Gulpfile config and tasks
|--node_modules/           # →  Node.js packages (never edit)
|--src/                    # →  Source files
|  |--assets/              # →  Assets
|  |  |--fonts/            # →  Assets: Fonts
|  |  |--img/              # →  Assets: Images
|  |  |--videos/           # →  Assets: Video
|  |--modules/             # →  Modules: Multi-part components e.g. Navbar (HTML, CSS and JS)
|  |--js/             # →  JS
|  |  |--components/       # →  JS: Components
|  |  |--app.js            # →  JS: Main file
|  |--scss/                # →  Styles: SASS 7-1 Architecture
|  |  |--main.scss         # →  Styles: Main stylesheet file
|  |  |  |--abstracts/         # →  Styles: Main stylesheet file
|  |--pages/               # →  Pages (Twig.js)
|  |  |--about.html        # →  Templates: Layouts
|  |  |--components/       # →  Templates: Components
|  |  |--pages/            # →  Templates: Pages
|--.gitignore              # →  Gitignore
|--package-lock.json       # →  NPM lock file (never edit)
|--package.json            # →  Node.js dependencies and scripts
```

## Credits

- Images from Unsplash.com
- Video content and gifs of Fortnite [game](https://www.epicgames.com/fortnite/en-US/home)

## License
[MIT](LICENSE)

Made with :zap: by [MrThunder](http://www.mrthunder.com)
