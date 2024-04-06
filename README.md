# MarionetteJS with RequireJS

MarionetteJS web app project skeleton that uses RequireJS for module definition and dependency management. The latter follows the AMD (Asynchronous Module Definition) specification. It defines an application programming interface that defines code modules and their dependencies, and loads them asynchronously if desired.

## How to execute this project

* Clone/Download the project
* Execute `npm install`
* Execute `node server.js`. Visit the page at localhost:3000

## How it works

When index.html is served, the script `require-config.js` is executed. This javascript executes the RequireJS config specified. It has three options:

* `baseUrl` defines the root directory from which module paths are resolved.
* `paths` defines map module names to specific file paths or URLs. It allows you to define custom aliases for module names and specify where to load modules from.
* `shims` is used to configure dependencies for scripts that do not support AMD (Asynchronous Module Definition) or other module formats.

After the modules are defined the App is loaded by 'importing' main module (`main.js`) in `require-config.js`. Loading `main.js` will result to http requests for its dependencies in the following manner. Note that same level files, in terms of dependencies, maybe loaded in a different order:

* `views/sample-item/sample-item.view.js` is loaded from local express server. It's a dependency of `main.js`.
    * `text` is retrieved from the cdn. It's a dependency of `views/sample-item/sample-item.view.js`
        * `views/sample-item/sample-item.view.html` is loaded from local express server. It is a dependency of `views/sample-item/sample-item.view.js` and loaded via `text`
* `jquery` is retrieved from the cdn. It's a dependency of `backbone` and `backbone.radio`.
* `underscore` is loaded from the cdn. It's a dependency of `backbone`, `backbone.radio`, and `views/sample-item/sample-item.view.js`.
    * `backbone` is loaded from the cdn. It's a dependency of `marionette`.
    * `backbone.radio` is loaded from the cdn. It's a dependency of `marionette`.
        * `marionette` is loaded from the cdn. It's a dependency of `main.js` and `views/sample-item/sample-item.view.js`.

## A word regarding usage of `npm` and `express`

ExpressJS was used to serve the static files (e.g. App server)