# MarionetteJS with RequireJS

MarionetteJS web app project skeleton that uses RequireJS for module definition and dependency management. The former follows the AMD (Asynchronous Module Definition) specification. It defines an application programming interface that defines code modules and their dependencies, and loads them asynchronously if desired.

## How it works

When index.html is served, the script require-config.js is executed. This javascript executes the RequireJS config specified. It has three options:

* `baseUrl` defines the root directory from which module paths are resolved.
* `paths` defines map module names to specific file paths or URLs. It allows you to define custom aliases for module names and specify where to load modules from.
* `shims` is used to configure dependencies for scripts that do not support AMD (Asynchronous Module Definition) or other module formats.

After the modules are defined the App is loaded by 'importing' main in `require-config.js`

## A word regarding usage of `npm` and `express`

ExpressJS was used to serve the static files (e.g. App server)