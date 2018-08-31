/*
GOAL: This module should mirror the NodeJS module system according the documented behavior.
The module transport will send down code that registers module definitions by an assigned path. In addition,
the module transport will send down code that registers additional metadata to allow the module resolver to
resolve modules in the browser. Additional metadata includes the following:

- "mains": The mapping of module directory paths to a fully resolved module path
- "remaps": The remapping of one fully resolved module path to another fully resolved module path (used for browser overrides)
- "run": A list of entry point modules that should be executed when ready

Inspired by:
https://github.com/joyent/node/blob/master/lib/module.js
*/
(function() {
    var win;

    if (typeof window !== 'undefined') {
        win = window;

        // This lasso modules client has already been loaded on the page. Do nothing;
        if (win.$_mod) {
            return;
        }

        win.global = win;
    }

    /** the module runtime */
    var $_mod;

    // this object stores the module factories with the keys being module paths and
    // values being a factory function or object (e.g. "/baz$3.0.0/lib/index" --> Function)
    var definitions = {};

    // Search path that will be checked when looking for modules
    var searchPaths = [];

    // The _ready flag is used to determine if "run" modules can
    // be executed or if they should be deferred until all dependencies
    // have been loaded
    var _ready = false;

    // If $_mod.run() is called when the page is not ready then
    // we queue up the run modules to be executed later
    var runQueue = [];

    // this object stores the Module instance cache with the keys being paths of modules (e.g., "/foo$1.0.0/bar" --> Module)
    var instanceCache = {};

    // This object maps installed dependencies to specific versions
    //
    // For example:
    // {
    //   // The package "foo" with version 1.0.0 has an installed package named "bar" (foo/node_modules/bar") and
    //   // the version of "bar" is 3.0.0
    //   "/foo$1.0.0/bar": "3.0.0"
    // }
    var installed = {};

    // Maps builtin modules such as "path", "buffer" to their fully resolved paths
    var builtins = {};

    // this object maps a directory to the fully resolved module path
    //
    // For example:
    //
    var mains = {};

    // used to remap a one fully resolved module path to another fully resolved module path
    var remapped = {};

    var cacheByDirname = {};

    // When a module is mapped to a global varialble we add a reference
    // that maps the path of the module to the loaded global instance.
    // We use this mapping to ensure that global modules are only loaded
    // once if they map to the same path.
    //
    // See issue #5 - Ensure modules mapped to globals only load once
    // https://github.com/raptorjs/raptor-modules/issues/5
    var loadedGlobalsByRealPath = {};

    function moduleNotFoundError(target, from) {
        var err = new Error('Cannot find module "' + target + '"' + (from ? ' from "' + from + '"' : ''));

        err.code = 'MODULE_NOT_FOUND';
        return err;
    }

    function Module(filename) {
       /*
        A Node module has these properties:
        - filename: The path of the module
        - id: The path of the module (same as filename)
        - exports: The exports provided during load
        - loaded: Has module been fully loaded (set to false until factory function returns)

        NOT SUPPORTED:
        - parent: parent Module
        - paths: The search path used by this module (NOTE: not documented in Node.js module system so we don't need support)
        - children: The modules that were required by this module
        */
        this.id = this.filename = filename;
        this.loaded = false;
        this.exports = undefined;
    }

    Module.cache = instanceCache;

    // temporary variable for referencing the Module prototype
    var Module_prototype = Module.prototype;

    Module_prototype.load = function(factoryOrObject) {
        var filename = this.id;

        if (factoryOrObject && factoryOrObject.constructor === Function) {
            // factoryOrObject is definitely a function
            var lastSlashPos = filename.lastIndexOf('/');

            // find the value for the __dirname parameter to factory
            var dirname = filename.substring(0, lastSlashPos);

            // local cache for requires initiated from this module/dirname
            var localCache = cacheByDirname[dirname] || (cacheByDirname[dirname] = {});

            // this is the require used by the module
            var instanceRequire = function(target) {
                // Only store the `module` in the local cache since `module.exports` may not be accurate
                // if there was a circular dependency
                var module = localCache[target] || (localCache[target] = requireModule(target, dirname));
                return module.exports;
            };

            // The require method should have a resolve method that will return the resolved
            // path but not actually instantiate the module.
            // This resolve function will make sure a definition exists for the corresponding
            // path of the target but it will not instantiate a new instance of the target.
            instanceRequire.resolve = function(target) {
                if (!target) {
                    throw moduleNotFoundError('');
                }

                var resolved = resolve(target, dirname);

                if (!resolved) {
                    throw moduleNotFoundError(target, dirname);
                }

                // NOTE: resolved[0] is the path and resolved[1] is the module factory
                return resolved[0];
            };

            // NodeJS provides access to the cache as a property of the "require" function
            instanceRequire.cache = instanceCache;

            // Expose the module system runtime via the `runtime` property
            // TODO: We should deprecate this in favor of `Module.prototype.__runtime`
            // @deprecated
            instanceRequire.runtime = $_mod;

            // $_mod.def("/foo$1.0.0/lib/index", function(require, exports, module, __filename, __dirname) {
            this.exports = {};

            // call the factory function
            factoryOrObject.call(this, instanceRequire, this.exports, this, filename, dirname);
        } else {
            // factoryOrObject is not a function so have exports reference factoryOrObject
            this.exports = factoryOrObject;
        }

        this.loaded = true;
    };

    /**
     * Defines a packages whose metadata is used by raptor-loader to load the package.
     */
    function define(path, factoryOrObject, options) {
        /*
        $_mod.def('/baz$3.0.0/lib/index', function(require, exports, module, __filename, __dirname) {
            // module source code goes here
        });
        */

        var globals = options && options.globals;

        definitions[path] = factoryOrObject;

        if (globals) {
            var target = win || global;
            for (var i=0;i<globals.length; i++) {
                var globalVarName = globals[i];
                var globalModule = loadedGlobalsByRealPath[path] = requireModule(path);
                target[globalVarName] = globalModule.exports;
            }
        }
    }

    function registerMain(path, relativePath) {
        mains[path] = relativePath;
    }

    function remap(fromPath, toPath) {
        remapped[fromPath] = toPath;
    }

    function builtin(name, target) {
        builtins[name] = target;
    }

    function registerInstalledDependency(parentPath, packageName, packageVersion) {
        // Example:
        // dependencies['/my-package$1.0.0/$/my-installed-package'] = '2.0.0'
        installed[parentPath + '/' + packageName] =  packageVersion;
    }

    /**
     * This function will take an array of path parts and normalize them by handling handle ".." and "."
     * and then joining the resultant string.
     *
     * @param {Array} parts an array of parts that presumedly was split on the "/" character.
     */
    function normalizePathParts(parts) {

        // IMPORTANT: It is assumed that parts[0] === "" because this method is used to
        // join an absolute path to a relative path
        var i;
        var len = 0;

        var numParts = parts.length;

        for (i = 0; i < numParts; i++) {
            var part = parts[i];

            if (part === '.') {
                // ignore parts with just "."
                /*
                // if the "." is at end of parts (e.g. ["a", "b", "."]) then trim it off
                if (i === numParts - 1) {
                    //len--;
                }
                */
            } else if (part === '..') {
                // overwrite the previous item by decrementing length
                len--;
            } else {
                // add this part to result and increment length
                parts[len] = part;
                len++;
            }
        }

        if (len === 1) {
            // if we end up with just one part that is empty string
            // (which can happen if input is ["", "."]) then return
            // string with just the leading slash
            return '/';
        } else if (len > 2) {
            // parts i s
            // ["", "a", ""]
            // ["", "a", "b", ""]
            if (parts[len - 1].length === 0) {
                // last part is an empty string which would result in trailing slash
                len--;
            }
        }

        // truncate parts to remove unused
        parts.length = len;
        return parts.join('/');
    }

    function join(from, target) {
        var targetParts = target.split('/');
        var fromParts = from == '/' ? [''] : from.split('/');
        return normalizePathParts(fromParts.concat(targetParts));
    }

    function withoutExtension(path) {
        var lastDotPos = path.lastIndexOf('.');
        var lastSlashPos;

        /* jshint laxbreak:true */
        return ((lastDotPos === -1) || ((lastSlashPos = path.lastIndexOf('/')) !== -1) && (lastSlashPos > lastDotPos))
            ? null // use null to indicate that returned path is same as given path
            : path.substring(0, lastDotPos);
    }

    function splitPackageIdAndSubpath(path) {
        path = path.substring(1); /* Skip past the first slash */
        // Examples:
        //     '/my-package$1.0.0/foo/bar' --> ['my-package$1.0.0', '/foo/bar']
        //     '/my-package$1.0.0' --> ['my-package$1.0.0', '']
        //     '/my-package$1.0.0/' --> ['my-package$1.0.0', '/']
        //     '/@my-scoped-package/foo/$1.0.0/' --> ['@my-scoped-package/foo$1.0.0', '/']
        var slashPos = path.indexOf('/');

        if (path.charAt(1) === '@') {
            // path is something like "/@my-user-name/my-scoped-package/subpath"
            // For scoped packages, the package name is two parts. We need to skip
            // past the second slash to get the full package name
            slashPos = path.indexOf('/', slashPos+1);
        }

        var packageIdEnd = slashPos === -1 ? path.length : slashPos;

        return [
            path.substring(0, packageIdEnd), // Everything up to the slash
            path.substring(packageIdEnd) // Everything after the package ID
        ];
    }

    function resolveInstalledModule(target, from) {
        // Examples:
        // target='foo', from='/my-package$1.0.0/hello/world'

        if (target.charAt(target.length-1) === '/') {
            // This is a hack because I found require('util/') in the wild and
            // it did not work because of the trailing slash
            target = target.slice(0, -1);
        }

        // Check to see if the target module is a builtin module.
        // For example:
        // builtins['path'] = '/path-browserify$0.0.0/index'
        var builtinPath = builtins[target];
        if (builtinPath) {
            return builtinPath;
        }

        var fromParts = splitPackageIdAndSubpath(from);
        var fromPackageId = fromParts[0];


        var targetSlashPos = target.indexOf('/');
        var targetPackageName;
        var targetSubpath;

        if (targetSlashPos < 0) {
            targetPackageName = target;
            targetSubpath = '';
        } else {

            if (target.charAt(0) === '@') {
                // target is something like "@my-user-name/my-scoped-package/subpath"
                // For scoped packages, the package name is two parts. We need to skip
                // past the first slash to get the full package name
                targetSlashPos = target.indexOf('/', targetSlashPos + 1);
            }

            targetPackageName = target.substring(0, targetSlashPos);
            targetSubpath = target.substring(targetSlashPos);
        }

        var targetPackageVersion = installed[fromPackageId + '/' + targetPackageName];
        if (targetPackageVersion) {
            var resolvedPath = '/' + targetPackageName + '$' + targetPackageVersion;
            if (targetSubpath) {
                resolvedPath += targetSubpath;
            }
            return resolvedPath;
        }
    }

    function resolve(target, from) {
        var resolvedPath;

        if (target.charAt(0) === '.') {
            // turn relative path into absolute path
            resolvedPath = join(from, target);
        } else if (target.charAt(0) === '/') {
            // handle targets such as "/my/file" or "/$/foo/$/baz"
            resolvedPath = normalizePathParts(target.split('/'));
        } else {
            var len = searchPaths.length;
            for (var i = 0; i < len; i++) {
                // search path entries always end in "/";
                var candidate = searchPaths[i] + target;
                var resolved = resolve(candidate, from);
                if (resolved) {
                    return resolved;
                }
            }

            resolvedPath = resolveInstalledModule(target, from);
        }

        if (!resolvedPath) {
            return undefined;
        }

        // target is something like "/foo/baz"
        // There is no installed module in the path
        var relativePath;

        // check to see if "target" is a "directory" which has a registered main file
        if ((relativePath = mains[resolvedPath]) !== undefined) {
            if (!relativePath) {
                relativePath = 'index';
            }

            // there is a main file corresponding to the given target so add the relative path
            resolvedPath = join(resolvedPath, relativePath);
        }

        var remappedPath = remapped[resolvedPath];
        if (remappedPath) {
            resolvedPath = remappedPath;
        }

        var factoryOrObject = definitions[resolvedPath];
        if (factoryOrObject === undefined) {
            // check for definition for given path but without extension
            var resolvedPathWithoutExtension;
            if (((resolvedPathWithoutExtension = withoutExtension(resolvedPath)) === null) ||
                ((factoryOrObject = definitions[resolvedPathWithoutExtension]) === undefined)) {
                return undefined;
            }

            // we found the definition based on the path without extension so
            // update the path
            resolvedPath = resolvedPathWithoutExtension;
        }

        return [resolvedPath, factoryOrObject];
    }

    function requireModule(target, from) {
        if (!target) {
            throw moduleNotFoundError('');
        }

        var resolved = resolve(target, from);
        if (!resolved) {
            throw moduleNotFoundError(target, from);
        }

        var resolvedPath = resolved[0];

        var module = instanceCache[resolvedPath];

        if (module !== undefined) {
            // found cached entry based on the path
            return module;
        }

        // Fixes issue #5 - Ensure modules mapped to globals only load once
        // https://github.com/raptorjs/raptor-modules/issues/5
        //
        // If a module is mapped to a global variable then we want to always
        // return that global instance of the module when it is being required
        // to avoid duplicate modules being loaded. For modules that are mapped
        // to global variables we also add an entry that maps the path
        // of the module to the global instance of the loaded module.

        if (loadedGlobalsByRealPath.hasOwnProperty(resolvedPath)) {
            return loadedGlobalsByRealPath[resolvedPath];
        }

        var factoryOrObject = resolved[1];

        module = new Module(resolvedPath);

        // cache the instance before loading (allows support for circular dependency with partial loading)
        instanceCache[resolvedPath] = module;

        module.load(factoryOrObject);

        return module;
    }

    function require(target, from) {
        var module = requireModule(target, from);
        return module.exports;
    }

    /*
    $_mod.run('/$/installed-module', '/src/foo');
    */
    function run(path, options) {
        var wait = !options || (options.wait !== false);
        if (wait && !_ready) {
            return runQueue.push([path, options]);
        }

        require(path, '/');
    }

    /*
     * Mark the page as being ready and execute any of the
     * run modules that were deferred
     */
    function ready() {
        _ready = true;

        var len;
        while((len = runQueue.length)) {
            // store a reference to the queue before we reset it
            var queue = runQueue;

            // clear out the queue
            runQueue = [];

            // run all of the current jobs
            for (var i = 0; i < len; i++) {
                var args = queue[i];
                run(args[0], args[1]);
            }

            // stop running jobs in the queue if we change to not ready
            if (!_ready) {
                break;
            }
        }
    }

    function addSearchPath(prefix) {
        searchPaths.push(prefix);
    }

    var pendingCount = 0;
    var onPendingComplete = function() {
        pendingCount--;
        if (!pendingCount) {
            // Trigger any "require-run" modules in the queue to run
            ready();
        }
    };

    /*
     * $_mod is the short-hand version that that the transport layer expects
     * to be in the browser window object
     */
    Module_prototype.__runtime = $_mod = {
        /**
         * Used to register a module factory/object (*internal*)
         */
        def: define,

        /**
         * Used to register an installed dependency (e.g. "/$/foo" depends on "baz") (*internal*)
         */
        installed: registerInstalledDependency,
        run: run,
        main: registerMain,
        remap: remap,
        builtin: builtin,
        require: require,
        resolve: resolve,
        join: join,
        ready: ready,

        /**
         * Add a search path entry (internal)
         */
        searchPath: addSearchPath,

        /**
         * Sets the loader metadata for this build.
         *
         * @param asyncPackageName {String} name of asynchronous package
         * @param contentType {String} content type ("js" or "css")
         * @param bundleUrl {String} URL of bundle that belongs to package
         */
        loaderMetadata: function(data) {
            // We store loader metadata in the prototype of Module
            // so that `lasso-loader` can read it from
            // `module.__loaderMetadata`.
            Module_prototype.__loaderMetadata = data;
        },

        /**
         * Asynchronous bundle loaders should call `pending()` to instantiate
         * a new job. The object we return here has a `done` method that
         * should be called when the job completes. When the number of
         * pending jobs drops to 0, we invoke any of the require-run modules
         * that have been declared.
         */
        pending: function() {
            _ready = false;
            pendingCount++;
            return {
                done: onPendingComplete
            };
        }
    };

    if (win) {
        win.$_mod = $_mod;
    } else {
        module.exports = $_mod;
    }
})();

$_mod.installed("@ebay/skin$6.0.0-6", "makeup-expander", "0.4.0");
$_mod.main("/makeup-expander$0.4.0", "");
$_mod.installed("makeup-expander$0.4.0", "custom-event-polyfill", "0.3.0");
$_mod.main("/custom-event-polyfill$0.3.0", "custom-event-polyfill");
$_mod.def("/custom-event-polyfill$0.3.0/custom-event-polyfill", function(require, exports, module, __filename, __dirname) { // Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

try {
    var ce = new window.CustomEvent('test');
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
        // IE has problems with .preventDefault() on custom events
        // http://stackoverflow.com/questions/23349191
        throw new Error('Could not prevent default');
    }
} catch(e) {
  var CustomEvent = function(event, params) {
    var evt, origPrevent;
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };

    evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    origPrevent = evt.preventDefault;
    evt.preventDefault = function () {
      origPrevent.call(this);
      try {
        Object.defineProperty(this, 'defaultPrevented', {
          get: function () {
            return true;
          }
        });
      } catch(e) {
        this.defaultPrevented = true;
      }
    };
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent; // expose definition to window
}

});
$_mod.run("/custom-event-polyfill$0.3.0/custom-event-polyfill");
$_mod.installed("makeup-expander$0.4.0", "makeup-next-id", "0.0.2");
$_mod.main("/makeup-next-id$0.0.2", "");
$_mod.def("/makeup-next-id$0.0.2/index", function(require, exports, module, __filename, __dirname) { 'use strict';

var sequenceMap = {};
var defaultPrefix = 'nid';

module.exports = function (el) {
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPrefix;

    // prevent empty string
    var _prefix = prefix === '' ? defaultPrefix : prefix;

    // initialise prefix in sequence map if necessary
    sequenceMap[_prefix] = sequenceMap[_prefix] || 0;

    if (!el.id) {
        el.setAttribute('id', _prefix + '-' + sequenceMap[_prefix]++);
    }
};

});
$_mod.installed("makeup-expander$0.4.0", "makeup-exit-emitter", "0.0.4");
$_mod.main("/makeup-exit-emitter$0.0.4", "");
$_mod.installed("makeup-exit-emitter$0.0.4", "custom-event-polyfill", "0.3.0");
$_mod.installed("makeup-exit-emitter$0.0.4", "makeup-next-id", "0.0.2");
$_mod.def("/makeup-exit-emitter$0.0.4/index", function(require, exports, module, __filename, __dirname) { 'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nextID = require('/makeup-next-id$0.0.2/index'/*'makeup-next-id'*/);
var focusExitEmitters = {};

// requires CustomEvent polyfill for IE9+
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent

function doFocusExit(el, fromElement, toElement) {
    el.dispatchEvent(new CustomEvent('focusExit', {
        detail: { fromElement: fromElement, toElement: toElement },
        bubbles: false // mirror the native mouseleave event
    }));
}

function onDocumentFocusIn(e) {
    var newFocusElement = e.target;
    var targetIsDescendant = this.el.contains(newFocusElement);

    // if focus has moved to a focusable descendant
    if (targetIsDescendant === true) {
        // set the target as the currently focussed element
        this.currentFocusElement = newFocusElement;
    } else {
        // else focus has not gone to a focusable descendant
        window.removeEventListener('blur', this.onWindowBlurListener);
        document.removeEventListener('focusin', this.onDocumentFocusInListener);
        doFocusExit(this.el, this.currentFocusElement, newFocusElement);
        this.currentFocusElement = null;
    }
}

function onWindowBlur() {
    doFocusExit(this.el, this.currentFocusElement, undefined);
}

function onWidgetFocusIn() {
    // listen for focus moving to anywhere in document
    // note that mouse click on buttons, checkboxes and radios does not trigger focus events in all browsers!
    document.addEventListener('focusin', this.onDocumentFocusInListener);
    // listen for focus leaving the window
    window.addEventListener('blur', this.onWindowBlurListener);
}

var FocusExitEmitter = function () {
    function FocusExitEmitter(el) {
        _classCallCheck(this, FocusExitEmitter);

        this.el = el;

        this.currentFocusElement = null;

        this.onWidgetFocusInListener = onWidgetFocusIn.bind(this);
        this.onDocumentFocusInListener = onDocumentFocusIn.bind(this);
        this.onWindowBlurListener = onWindowBlur.bind(this);

        this.el.addEventListener('focusin', this.onWidgetFocusInListener);
    }

    _createClass(FocusExitEmitter, [{
        key: 'removeEventListeners',
        value: function removeEventListeners() {
            window.removeEventListener('blur', this.onWindowBlurListener);
            document.removeEventListener('focusin', this.onDocumentFocusInListener);
            this.el.removeEventListener('focusin', this.onWidgetFocusInListener);
        }
    }]);

    return FocusExitEmitter;
}();

function addFocusExit(el) {
    var exitEmitter = null;

    nextID(el);

    if (!focusExitEmitters[el.id]) {
        exitEmitter = new FocusExitEmitter(el);
        focusExitEmitters[el.id] = exitEmitter;
    }

    return exitEmitter;
}

function removeFocusExit(el) {
    var exitEmitter = focusExitEmitters[el.id];

    if (exitEmitter) {
        exitEmitter.removeEventListeners();
        delete focusExitEmitters[el.id];
    }
}

module.exports = {
    addFocusExit: addFocusExit,
    removeFocusExit: removeFocusExit
};

});
$_mod.installed("makeup-expander$0.4.0", "makeup-focusables", "0.0.3");
$_mod.main("/makeup-focusables$0.0.3", "");
$_mod.def("/makeup-focusables$0.0.3/index", function(require, exports, module, __filename, __dirname) { 'use strict';

var focusableElList = ['a[href]', 'area[href]', 'button:not([disabled])', 'embed', 'iframe', 'input:not([disabled])', 'object', 'select:not([disabled])', 'textarea:not([disabled])', '*[tabindex]', '*[contenteditable]'];

var focusableElSelector = focusableElList.join();

module.exports = function (el) {
    var keyboardOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var focusableEls = Array.prototype.slice.call(el.querySelectorAll(focusableElSelector));

    // filter out elements with display: none
    focusableEls = focusableEls.filter(function (focusableEl) {
        return window.getComputedStyle(focusableEl).display !== 'none';
    });

    if (keyboardOnly === true) {
        focusableEls = focusableEls.filter(function (focusableEl) {
            return focusableEl.getAttribute('tabindex') !== '-1';
        });
    }

    return focusableEls;
};

});
$_mod.def("/makeup-expander$0.4.0/index", function(require, exports, module, __filename, __dirname) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nextID = require('/makeup-next-id$0.0.2/index'/*'makeup-next-id'*/);
var ExitEmitter = require('/makeup-exit-emitter$0.0.4/index'/*'makeup-exit-emitter'*/);
var focusables = require('/makeup-focusables$0.0.3/index'/*'makeup-focusables'*/);

var defaultOptions = {
    autoCollapse: false,
    collapseOnFocusOut: false,
    collapseOnMouseOut: false,
    collapseOnClickOut: false,
    contentSelector: '.expander__content',
    expandOnClick: false,
    expandOnFocus: false,
    expandOnHover: false,
    focusManagement: null,
    hostContainerClass: 'expander__host-container',
    hostSelector: '.expander__host',
    simulateSpacebarClick: false
};

// when options.expandOnClick is true, we set a flag if spacebar or enter are pressed
// the idea being that this flag is set BEFORE the click event
function _onKeyDown(e) {
    var keyCode = e.keyCode;

    if (keyCode === 13 || keyCode === 32) {
        this.keyDownFlag = true;

        // if hostEl does not naturally trigger click events, we can force one to trigger here.
        // careful! if host already triggers click events naturally, we end up with a "double-click".
        if (keyCode === 32 && this.options.simulateSpacebarClick === true) {
            this.hostEl.click();
        }
    }
}

function _onDocumentClick(e) {
    if (this.el.contains(e.target) === false) {
        this.el.dispatchEvent(new CustomEvent('clickOut', {
            bubbles: false
        }));
    }
}

module.exports = function () {
    function _class(el, selectedOptions) {
        _classCallCheck(this, _class);

        this.options = _extends({}, defaultOptions, selectedOptions);

        this.el = el;
        this.hostEl = el.querySelector(this.options.hostSelector); // the keyboard focusable host el
        this.expandeeEl = el.querySelector(this.options.contentSelector);
        this.hostContainerEl = null;
        this.hostContainerExpandedClass = this.options.hostContainerClass + '--expanded';
        this.hostIsNested = false;

        // ensure the widget and expandee have an id
        nextID(this.el, 'expander');
        nextID(this.expandeeEl, this.el.id + '-content');

        ExitEmitter.addFocusExit(this.el);

        this._hostKeyDownListener = _onKeyDown.bind(this);
        this._documentClickListener = _onDocumentClick.bind(this);

        this._hostClickListener = this.toggle.bind(this);
        this._hostFocusListener = this.expand.bind(this);
        this._hostHoverListener = this.expand.bind(this);

        this._focusExitListener = this.collapse.bind(this);
        this._mouseLeaveListener = this.collapse.bind(this);
        this._clickOutListener = this.collapse.bind(this);

        if (this.hostEl.getAttribute('aria-expanded') === null) {
            this.hostEl.setAttribute('aria-expanded', 'false');
        }

        this.hostEl.setAttribute('aria-controls', this.expandeeEl.id);

        this.hostIsNested = this.hostEl.parentNode !== this.el;

        // if the host el is nested one level deep we need a reference to it's container
        if (this.hostIsNested === true) {
            this.hostContainerEl = this.hostEl.parentNode;
            this.hostContainerEl.classList.add(this.options.hostContainerClass);
        }

        this.expandOnClick = this.options.expandOnClick;
        this.expandOnFocus = this.options.expandOnFocus;
        this.expandOnHover = this.options.expandOnHover;

        if (this.options.autoCollapse === false) {
            this.collapseOnClickOut = this.options.collapseOnClickOut;
            this.collapseOnFocusOut = this.options.collapseOnFocusOut;
            this.collapseOnMouseOut = this.options.collapseOnMouseOut;
        }
    }

    _createClass(_class, [{
        key: 'isExpanded',
        value: function isExpanded() {
            return this.hostEl.getAttribute('aria-expanded') === 'true';
        }
    }, {
        key: 'collapse',
        value: function collapse() {
            if (this.isExpanded() === true) {
                this.hostEl.setAttribute('aria-expanded', 'false');
                if (this.hostContainerEl) {
                    this.hostContainerEl.classList.remove(this.hostContainerExpandedClass);
                }
                this.el.dispatchEvent(new CustomEvent('expander-collapse', { bubbles: true, detail: this.expandeeEl }));
            }
        }
    }, {
        key: 'expand',
        value: function expand(isKeyboard) {
            if (this.isExpanded() === false) {
                this.hostEl.setAttribute('aria-expanded', 'true');
                if (this.hostContainerEl) {
                    this.hostContainerEl.classList.add(this.hostContainerExpandedClass);
                }
                if (isKeyboard === true) {
                    var focusManagement = this.options.focusManagement;

                    if (focusManagement === 'content') {
                        this.expandeeEl.setAttribute('tabindex', '-1');
                        this.expandeeEl.focus();
                    } else if (focusManagement === 'focusable') {
                        focusables(this.expandeeEl)[0].focus();
                    } else if (focusManagement === 'interactive') {
                        focusables(this.expandeeEl, true)[0].focus();
                    } else if (focusManagement !== null) {
                        var el = this.expandeeEl.querySelector('#' + focusManagement);
                        if (el) {
                            el.focus();
                        }
                    }
                }
                this.el.dispatchEvent(new CustomEvent('expander-expand', { bubbles: true, detail: this.expandeeEl }));
            }
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            if (this.isExpanded() === true) {
                this.collapse();
            } else {
                this.expand(this.keyDownFlag);
            }
            this.keyDownFlag = false;
        }
    }, {
        key: 'expandOnClick',
        set: function set(bool) {
            var clickTargetEl = this.hostIsNested === true ? this.hostContainerEl : this.hostEl;

            if (bool === true) {
                this.hostEl.addEventListener('keydown', this._hostKeyDownListener);
                clickTargetEl.addEventListener('click', this._hostClickListener);

                if (this.options.autoCollapse === true) {
                    this.collapseOnClickOut = true;
                    this.collapseOnFocusOut = true;
                }
            } else {
                clickTargetEl.removeEventListener('click', this._hostClickListener);
                this.hostEl.removeEventListener('keydown', this._hostKeyDownListener);
            }
        }
    }, {
        key: 'expandOnFocus',
        set: function set(bool) {
            if (bool === true) {
                this.hostEl.addEventListener('focus', this._hostFocusListener);

                if (this.options.autoCollapse === true) {
                    this.collapseOnFocusOut = true;
                }
            } else {
                this.hostEl.removeEventListener('focus', this._hostFocusListener);
            }
        }
    }, {
        key: 'expandOnHover',
        set: function set(bool) {
            var hoverTargetEl = this.hostIsNested === true ? this.hostContainerEl : this.hostEl;

            if (bool === true) {
                hoverTargetEl.addEventListener('mouseenter', this._hostHoverListener);

                if (this.options.autoCollapse === true) {
                    this.collapseOnMouseOut = true;
                }
            } else {
                hoverTargetEl.removeEventListener('mouseenter', this._hostHoverListener);
            }
        }
    }, {
        key: 'collapseOnClickOut',
        set: function set(bool) {
            if (bool === true) {
                document.addEventListener('click', this._documentClickListener);
                this.el.addEventListener('clickOut', this._clickOutListener);
            } else {
                this.el.removeEventListener('clickOut', this._clickOutListener);
                document.removeEventListener('click', this._documentClickListener);
            }
        }
    }, {
        key: 'collapseOnFocusOut',
        set: function set(bool) {
            if (bool === true) {
                this.el.addEventListener('focusExit', this._focusExitListener);
            } else {
                this.el.removeEventListener('focusExit', this._focusExitListener);
            }
        }
    }, {
        key: 'collapseOnMouseOut',
        set: function set(bool) {
            if (bool === true) {
                this.el.addEventListener('mouseleave', this._mouseLeaveListener);
            } else {
                this.el.removeEventListener('mouseleave', this._mouseLeaveListener);
            }
        }
    }]);

    return _class;
}();

});
$_mod.installed("@ebay/skin$6.0.0-6", "makeup-floating-label", "0.0.2");
$_mod.main("/makeup-floating-label$0.0.2", "");
$_mod.def("/makeup-floating-label$0.0.2/index", function(require, exports, module, __filename, __dirname) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultOptions = {
    labelElementAnimateModifier: 'floating-label__label--animate',
    labelElementInlineModifier: 'floating-label__label--inline'
};

function hasValue(input) {
    return input.value.length > 0;
}

function _onBlur() {
    if (!hasValue(this.textboxEl)) {
        this.labelEl.classList.add(this.options.labelElementInlineModifier);
    }
}

function _onFocus() {
    this.labelEl.classList.add(this.options.labelElementAnimateModifier);
    this.labelEl.classList.remove(this.options.labelElementInlineModifier);
}

module.exports = function () {
    function _class(el, userOptions) {
        _classCallCheck(this, _class);

        this.options = _extends({}, defaultOptions, userOptions);

        this.rootEl = el;
        this.labelEl = this.rootEl.querySelector('label');
        this.textboxEl = this.rootEl.querySelector('input');

        this._onBlurListener = _onBlur.bind(this);
        this._onFocusListener = _onFocus.bind(this);

        this.textboxEl.addEventListener('blur', this._onBlurListener);
        this.textboxEl.addEventListener('focus', this._onFocusListener);

        if (!hasValue(this.textboxEl)) {
            this.labelEl.classList.add(this.options.labelElementInlineModifier);
        }
    }

    _createClass(_class, [{
        key: 'refresh',
        value: function refresh() {
            if (hasValue(this.textboxEl)) {
                this.labelEl.classList.remove(this.options.labelElementInlineModifier);
            } else {
                this.labelEl.classList.add(this.options.labelElementInlineModifier);
            }
        }
    }]);

    return _class;
}();

});
$_mod.installed("@ebay/skin$6.0.0-6", "makeup-roving-tabindex", "0.0.5");
$_mod.main("/makeup-roving-tabindex$0.0.5", "");
$_mod.installed("makeup-roving-tabindex$0.0.5", "makeup-navigation-emitter", "0.0.6");
$_mod.main("/makeup-navigation-emitter$0.0.6", "");
$_mod.installed("makeup-navigation-emitter$0.0.6", "custom-event-polyfill", "0.3.0");
$_mod.def("/makeup-navigation-emitter$0.0.6/util", function(require, exports, module, __filename, __dirname) { "use strict";

function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

module.exports = {
    nodeListToArray: nodeListToArray
};

});
$_mod.installed("makeup-navigation-emitter$0.0.6", "makeup-key-emitter", "0.0.3");
$_mod.main("/makeup-key-emitter$0.0.3", "");
$_mod.installed("makeup-key-emitter$0.0.3", "custom-event-polyfill", "0.3.0");
$_mod.def("/makeup-key-emitter$0.0.3/util", function(require, exports, module, __filename, __dirname) { 'use strict';

/*
    IE uses a different naming scheme for KeyboardEvent.key so we map the keyCode instead
    https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
 */

var keyCodeToKeyMap = {
    '13': 'Enter',
    '27': 'Escape',
    '32': 'Spacebar',
    '33': 'PageUp',
    '34': 'PageDown',
    '35': 'End',
    '36': 'Home',
    '37': 'ArrowLeft',
    '38': 'ArrowUp',
    '39': 'ArrowRight',
    '40': 'ArrowDown'
};

function uncapitalizeFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

module.exports = {
    keyCodeToKeyMap: keyCodeToKeyMap,
    uncapitalizeFirstLetter: uncapitalizeFirstLetter
};

});
$_mod.def("/makeup-key-emitter$0.0.3/index", function(require, exports, module, __filename, __dirname) { 'use strict';

// requires CustomEvent polyfill for IE9+
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent

var util = require('/makeup-key-emitter$0.0.3/util'/*'./util.js'*/);

function onKeyDownOrUp(evt, el, keyEventType) {
    if (!evt.shiftKey) {
        var key = util.keyCodeToKeyMap[evt.keyCode];

        switch (key) {
            case 'Enter':
            case 'Escape':
            case 'Spacebar':
            case 'PageUp':
            case 'PageDown':
            case 'End':
            case 'Home':
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'ArrowRight':
            case 'ArrowDown':
                el.dispatchEvent(new CustomEvent(util.uncapitalizeFirstLetter(key + 'Key' + keyEventType), {
                    detail: evt,
                    bubbles: true
                }));
                break;
            default:
                return;
        }
    }
}

function onKeyDown(e) {
    onKeyDownOrUp(e, this, "Down");
}

function onKeyUp(e) {
    onKeyDownOrUp(e, this, "Up");
}

function addKeyDown(el) {
    el.addEventListener('keydown', onKeyDown);
}

function addKeyUp(el) {
    el.addEventListener('keyup', onKeyUp);
}

function removeKeyDown(el) {
    el.removeEventListener('keydown', onKeyDown);
}

function removeKeyUp(el) {
    el.removeEventListener('keyup', onKeyUp);
}

function add(el) {
    addKeyDown(el);
    addKeyUp(el);
}

function remove(el) {
    removeKeyDown(el);
    removeKeyUp(el);
}

module.exports = {
    addKeyDown: addKeyDown,
    addKeyUp: addKeyUp,
    removeKeyDown: removeKeyDown,
    removeKeyUp: removeKeyUp,
    add: add,
    remove: remove
};

});
$_mod.installed("makeup-navigation-emitter$0.0.6", "makeup-exit-emitter", "0.0.4");
$_mod.def("/makeup-navigation-emitter$0.0.6/index", function(require, exports, module, __filename, __dirname) { 'use strict';

// requires Object.assign polyfill or transform for IE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = require('/makeup-navigation-emitter$0.0.6/util'/*'./util.js'*/);
var KeyEmitter = require('/makeup-key-emitter$0.0.3/index'/*'makeup-key-emitter'*/);
var ExitEmitter = require('/makeup-exit-emitter$0.0.4/index'/*'makeup-exit-emitter'*/);
var dataSetKey = 'data-makeup-index';

var defaultOptions = {
    autoInit: 0,
    autoReset: null,
    wrap: false
};

function setData(els) {
    els.forEach(function (el, index) {
        el.setAttribute(dataSetKey, index);
    });
}

function onKeyPrev() {
    if (!this.atStart()) {
        this.index--;
    } else if (this.options.wrap) {
        this.index = this.items.length - 1;
    }
}

function onKeyNext() {
    if (!this.atEnd()) {
        this.index++;
    } else if (this.options.wrap) {
        this.index = 0;
    }
}

function onClick(e) {
    var indexData = e.target.dataset.makeupIndex;
    if (indexData !== undefined) {
        this.index = indexData;
    }
}

function onKeyHome() {
    this.index = 0;
}

function onKeyEnd() {
    this.index = this.items.length;
}

function onFocusExit() {
    if (this.options.autoReset !== null) {
        this._index = this.options.autoReset; // do not use index setter, it will trigger change event
        this._el.dispatchEvent(new CustomEvent('navigationModelReset', {
            detail: {
                toIndex: this.options.autoReset
            },
            bubbles: false
        }));
    }
}

function onMutation() {
    this.items = Util.nodeListToArray(this._el.querySelectorAll(this._itemSelector));
    setData(this.items);

    this._el.dispatchEvent(new CustomEvent('navigationModelMutation'));
}

var NavigationModel = function NavigationModel(el, itemSelector, selectedOptions) {
    _classCallCheck(this, NavigationModel);

    this.options = _extends({}, defaultOptions, selectedOptions);
    this._el = el;
    this._itemSelector = itemSelector;
    this.items = Util.nodeListToArray(el.querySelectorAll(itemSelector));
};

var LinearNavigationModel = function (_NavigationModel) {
    _inherits(LinearNavigationModel, _NavigationModel);

    function LinearNavigationModel(el, itemSelector, selectedOptions) {
        _classCallCheck(this, LinearNavigationModel);

        var _this = _possibleConstructorReturn(this, (LinearNavigationModel.__proto__ || Object.getPrototypeOf(LinearNavigationModel)).call(this, el, itemSelector, selectedOptions));

        if (_this.options.autoInit !== null) {
            _this._index = _this.options.autoInit;
            _this._el.dispatchEvent(new CustomEvent('navigationModelInit', {
                detail: {
                    toIndex: _this.options.autoInit
                },
                bubbles: false
            }));
        }
        return _this;
    }

    _createClass(LinearNavigationModel, [{
        key: 'atEnd',
        value: function atEnd() {
            return this.index === this.items.length - 1;
        }
    }, {
        key: 'atStart',
        value: function atStart() {
            return this.index <= 0;
        }
    }, {
        key: 'index',
        get: function get() {
            return this._index;
        },
        set: function set(newIndex) {
            if (newIndex !== this.index) {
                this._el.dispatchEvent(new CustomEvent('navigationModelChange', {
                    detail: {
                        toIndex: newIndex,
                        fromIndex: this.index
                    },
                    bubbles: false
                }));
                this._index = newIndex;
            }
        }
    }]);

    return LinearNavigationModel;
}(NavigationModel);

// 2D Grid Model will go here

/*
class GridModel extends NavigationModel {
    constructor(el, rowSelector, colSelector) {
        super();
        this._coords = null;
    }
}
*/

var NavigationEmitter = function () {
    function NavigationEmitter(el, model) {
        _classCallCheck(this, NavigationEmitter);

        this.model = model;

        this._keyPrevListener = onKeyPrev.bind(model);
        this._keyNextListener = onKeyNext.bind(model);
        this._keyHomeListener = onKeyHome.bind(model);
        this._keyEndListener = onKeyEnd.bind(model);
        this._clickListener = onClick.bind(model);
        this._focusExitListener = onFocusExit.bind(model);
        this._observer = new MutationObserver(onMutation.bind(model));

        setData(model.items);

        KeyEmitter.addKeyDown(el);
        ExitEmitter.addFocusExit(el);

        el.addEventListener('arrowLeftKeyDown', this._keyPrevListener);
        el.addEventListener('arrowRightKeyDown', this._keyNextListener);
        el.addEventListener('arrowUpKeyDown', this._keyPrevListener);
        el.addEventListener('arrowDownKeyDown', this._keyNextListener);
        el.addEventListener('homeKeyDown', this._keyHomeListener);
        el.addEventListener('endKeyDown', this._keyEndListener);
        el.addEventListener('click', this._clickListener);
        el.addEventListener('focusExit', this._focusExitListener);

        this._observer.observe(el, { childList: true, subtree: true });
    }

    _createClass(NavigationEmitter, null, [{
        key: 'createLinear',
        value: function createLinear(el, itemSelector, selectedOptions) {
            var model = new LinearNavigationModel(el, itemSelector, selectedOptions);

            return new NavigationEmitter(el, model);
        }

        /*
        static createGrid(el, rowSelector, colSelector, selectedOptions) {
            return null;
        }
        */

    }]);

    return NavigationEmitter;
}();

module.exports = NavigationEmitter;

});
$_mod.def("/makeup-roving-tabindex$0.0.5/util", function(require, exports, module, __filename, __dirname) { "use strict";

function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

module.exports = {
    nodeListToArray: nodeListToArray
};

});
$_mod.def("/makeup-roving-tabindex$0.0.5/index", function(require, exports, module, __filename, __dirname) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavigationEmitter = require('/makeup-navigation-emitter$0.0.6/index'/*'makeup-navigation-emitter'*/);
var Util = require('/makeup-roving-tabindex$0.0.5/util'/*'./util.js'*/);

var defaultOptions = {
    autoReset: null,
    index: 0
};

function onModelMutation() {
    var modelIndex = this._navigationEmitter.model.index;

    this._items = Util.nodeListToArray(this._el.querySelectorAll(this._itemSelector));

    this._items.forEach(function (el, index) {
        if (index !== modelIndex) {
            el.setAttribute('tabindex', '-1');
        } else {
            el.setAttribute('tabindex', '0');
        }
    });
}

function onModelInit(e) {
    this._index = e.detail.toIndex;

    this._items.forEach(function (el) {
        el.setAttribute('tabindex', '-1');
    });

    this._items[e.detail.toIndex].setAttribute('tabindex', '0');
}

function onModelReset(e) {
    this._index = e.detail.toIndex;

    this._items.forEach(function (el) {
        el.setAttribute('tabindex', '-1');
    });

    this._items[e.detail.toIndex].setAttribute('tabindex', '0');
}

function onModelChange(e) {
    var fromItem = this._items[e.detail.fromIndex];
    var toItem = this._items[e.detail.toIndex];

    if (fromItem) {
        fromItem.setAttribute('tabindex', '-1');
    }

    if (toItem) {
        toItem.setAttribute('tabindex', '0');
        toItem.focus();
    }

    this._el.dispatchEvent(new CustomEvent('rovingTabindexChange', {
        detail: {
            toIndex: e.detail.toIndex,
            fromIndex: e.detail.fromIndex
        }
    }));
}

var RovingTabindex = function RovingTabindex(el) {
    _classCallCheck(this, RovingTabindex);

    this._el = el;
    this._onMutationListener = onModelMutation.bind(this);
    this._onChangeListener = onModelChange.bind(this);
    this._onInitListener = onModelInit.bind(this);
    this._onResetListener = onModelReset.bind(this);

    el.addEventListener('navigationModelMutation', this._onMutationListener);
    el.addEventListener('navigationModelChange', this._onChangeListener);
    el.addEventListener('navigationModelInit', this._onInitListener);
    el.addEventListener('navigationModelReset', this._onResetListener);
};

var LinearRovingTabindex = function (_RovingTabindex) {
    _inherits(LinearRovingTabindex, _RovingTabindex);

    function LinearRovingTabindex(el, itemSelector, selectedOptions) {
        _classCallCheck(this, LinearRovingTabindex);

        var _this = _possibleConstructorReturn(this, (LinearRovingTabindex.__proto__ || Object.getPrototypeOf(LinearRovingTabindex)).call(this, el));

        _this._options = _extends({}, defaultOptions, selectedOptions);

        _this._itemSelector = itemSelector;
        _this._items = Util.nodeListToArray(el.querySelectorAll(itemSelector));

        _this._navigationEmitter = NavigationEmitter.createLinear(el, itemSelector, {
            autoInit: _this._options.index,
            autoReset: _this._options.autoReset
        });
        return _this;
    }

    _createClass(LinearRovingTabindex, [{
        key: 'wrap',
        set: function set(newWrap) {
            this._navigationEmitter.model.options.wrap = newWrap;
        }
    }]);

    return LinearRovingTabindex;
}(RovingTabindex);

/*
class GridRovingTabindex extends RovingTabindex {
    constructor(el, rowSelector, cellSelector) {
        super(el);
    }
}
*/

function createLinear(el, itemSelector, selectedOptions) {
    return new LinearRovingTabindex(el, itemSelector, selectedOptions);
}

module.exports = {
    createLinear: createLinear
};

});
$_mod.installed("@ebay/skin$6.0.0-6", "makeup-key-emitter", "0.0.3");
$_mod.installed("@ebay/skin$6.0.0-6", "makeup-prevent-scroll-keys", "0.0.2");
$_mod.main("/makeup-prevent-scroll-keys$0.0.2", "");
$_mod.def("/makeup-prevent-scroll-keys$0.0.2/index", function(require, exports, module, __filename, __dirname) { 'use strict';

function onKeyDown(e) {
    if (e.keyCode >= 32 && e.keyCode <= 36 || e.keyCode === 38 || e.keyCode === 40) {
        e.preventDefault();
    }
}

function add(el) {
    el.addEventListener('keydown', onKeyDown);
}

function remove(el) {
    el.removeEventListener('keydown', onKeyDown);
}

module.exports = {
    add: add,
    remove: remove
};

});
$_mod.installed("@ebay/skin$6.0.0-6", "makeup-modal", "0.0.4");
$_mod.main("/makeup-modal$0.0.4", "");
$_mod.installed("makeup-modal$0.0.4", "makeup-keyboard-trap", "0.0.9");
$_mod.main("/makeup-keyboard-trap$0.0.9", "");
$_mod.installed("makeup-keyboard-trap$0.0.9", "custom-event-polyfill", "0.3.0");
$_mod.installed("makeup-keyboard-trap$0.0.9", "makeup-focusables", "0.0.3");
$_mod.def("/makeup-keyboard-trap$0.0.9/index", function(require, exports, module, __filename, __dirname) { 'use strict';

var focusables = require('/makeup-focusables$0.0.3/index'/*'makeup-focusables'*/);

// when bundled up with isomorphic components on the server, this code is run,
// so we must check if 'document' is defined.
var body = typeof document === 'undefined' ? null : document.body;

// for the element that will be trapped
var trappedEl = void 0;

// for the trap boundary/bumper elements
var topTrap = void 0;
var outerTrapBefore = void 0;
var innerTrapBefore = void 0;
var innerTrapAfter = void 0;
var outerTrapAfter = void 0;
var botTrap = void 0;

// for the first and last focusable element inside the trap
var firstFocusableElement = void 0;
var lastFocusableElement = void 0;

function createTrapBoundary() {
    var trapBoundary = document.createElement('div');

    trapBoundary.setAttribute('tabindex', '0');
    trapBoundary.className = 'keyboard-trap-boundary';

    return trapBoundary;
}

function setFocusToFirstFocusableElement() {
    firstFocusableElement.focus();
}

function setFocusToLastFocusableElement() {
    lastFocusableElement.focus();
}

function createTraps() {
    topTrap = createTrapBoundary();
    outerTrapBefore = topTrap.cloneNode();
    innerTrapBefore = topTrap.cloneNode();
    innerTrapAfter = topTrap.cloneNode();
    outerTrapAfter = topTrap.cloneNode();
    botTrap = topTrap.cloneNode();

    topTrap.addEventListener('focus', setFocusToFirstFocusableElement);
    outerTrapBefore.addEventListener('focus', setFocusToFirstFocusableElement);
    innerTrapBefore.addEventListener('focus', setFocusToLastFocusableElement);
    innerTrapAfter.addEventListener('focus', setFocusToFirstFocusableElement);
    outerTrapAfter.addEventListener('focus', setFocusToLastFocusableElement);
    botTrap.addEventListener('focus', setFocusToLastFocusableElement);
}

function untrap() {
    if (trappedEl) {
        topTrap = body.removeChild(topTrap);
        outerTrapBefore = trappedEl.parentNode.removeChild(outerTrapBefore);
        innerTrapBefore = trappedEl.removeChild(innerTrapBefore);
        innerTrapAfter = trappedEl.removeChild(innerTrapAfter);
        outerTrapAfter = trappedEl.parentNode.removeChild(outerTrapAfter);
        botTrap = body.removeChild(botTrap);

        trappedEl.classList.remove('keyboard-trap--active');

        // let observers know the keyboard is no longer trapped
        trappedEl.dispatchEvent(new CustomEvent('keyboardUntrap', { bubbles: true }));

        trappedEl = null;
    }
    return trappedEl;
}

function trap(el) {
    if (!topTrap) {
        createTraps();
    } else {
        untrap();
    }

    trappedEl = el;

    var focusableElements = focusables(trappedEl);
    firstFocusableElement = focusableElements[0];
    lastFocusableElement = focusableElements[focusableElements.length - 1];

    body.insertBefore(topTrap, body.childNodes[0]);
    trappedEl.parentNode.insertBefore(outerTrapBefore, trappedEl);
    trappedEl.insertBefore(innerTrapBefore, trappedEl.childNodes[0]);
    trappedEl.appendChild(innerTrapAfter);
    trappedEl.parentNode.insertBefore(outerTrapAfter, trappedEl.nextElementSibling);
    body.appendChild(botTrap);

    // let observers know the keyboard is now trapped
    trappedEl.dispatchEvent(new CustomEvent('keyboardTrap', { bubbles: true }));

    trappedEl.classList.add('keyboard-trap--active');

    return trappedEl;
}

function refresh() {
    if (topTrap && trappedEl) {
        var focusableElements = focusables(trappedEl);
        focusableElements = focusableElements.filter(function (el) {
            return !el.classList.contains('keyboard-trap-boundary');
        });
        firstFocusableElement = focusableElements[0];
        lastFocusableElement = focusableElements[focusableElements.length - 1];
    }
}

module.exports = {
    refresh: refresh,
    trap: trap,
    untrap: untrap
};

});
$_mod.installed("makeup-modal$0.0.4", "makeup-screenreader-trap", "0.0.5");
$_mod.main("/makeup-screenreader-trap$0.0.5", "");
$_mod.installed("makeup-screenreader-trap$0.0.5", "custom-event-polyfill", "0.3.0");
$_mod.def("/makeup-screenreader-trap$0.0.5/util", function(require, exports, module, __filename, __dirname) { 'use strict';

// filter function for ancestor elements

var filterAncestor = function filterAncestor(item) {
    return item.nodeType === 1 && item.tagName.toLowerCase() !== 'body' && item.tagName.toLowerCase() !== 'html';
};

// filter function for sibling elements
var filterSibling = function filterSibling(item) {
    return item.nodeType === 1 && item.tagName.toLowerCase() !== 'script';
};

// reducer to flatten arrays
var flattenArrays = function flattenArrays(a, b) {
    return a.concat(b);
};

// recursive function to get previous sibling nodes of given element
function getPreviousSiblings(el) {
    var siblings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var previousSibling = el.previousSibling;

    if (!previousSibling) {
        return siblings;
    }

    siblings.push(previousSibling);

    return getPreviousSiblings(previousSibling, siblings);
}

// recursive function to get next sibling nodes of given element
function getNextSiblings(el) {
    var siblings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var nextSibling = el.nextSibling;

    if (!nextSibling) {
        return siblings;
    }

    siblings.push(nextSibling);

    return getNextSiblings(nextSibling, siblings);
}

// returns all sibling element nodes of given element
function getSiblings(el) {
    var allSiblings = getPreviousSiblings(el).concat(getNextSiblings(el));

    return allSiblings.filter(filterSibling);
}

// recursive function to get all ancestor nodes of given element
function getAllAncestors(el) {
    var ancestors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var nextAncestor = el.parentNode;

    if (!nextAncestor) {
        return ancestors;
    }

    ancestors.push(nextAncestor);

    return getAllAncestors(nextAncestor, ancestors);
}

// get ancestor nodes of given element
function getAncestors(el) {
    return getAllAncestors(el).filter(filterAncestor);
}

// get siblings of ancestors (i.e. aunts and uncles) of given el
function getSiblingsOfAncestors(el) {
    return getAncestors(el).map(function (item) {
        return getSiblings(item);
    }).reduce(flattenArrays, []);
}

module.exports = {
    getSiblings: getSiblings,
    getAncestors: getAncestors,
    getSiblingsOfAncestors: getSiblingsOfAncestors
};

});
$_mod.def("/makeup-screenreader-trap$0.0.5/index", function(require, exports, module, __filename, __dirname) { 'use strict';

var util = require('/makeup-screenreader-trap$0.0.5/util'/*'./util.js'*/);

// the main landmark
var mainEl = void 0;

// the element that will be trapped
var trappedEl = void 0;

// collection of elements that get 'dirtied' with aria-hidden attr
var dirtyObjects = void 0;

function prepareAttribute(el, dirtyValue) {
    return {
        el: el,
        cleanValue: el.getAttribute('aria-hidden'),
        dirtyValue: dirtyValue
    };
}

function dirtyAttribute(preparedObj) {
    preparedObj.el.setAttribute('aria-hidden', preparedObj.dirtyValue);
}

function cleanAttribute(preparedObj) {
    if (preparedObj.cleanValue) {
        preparedObj.el.setAttribute('aria-hidden', preparedObj.cleanValue);
    } else {
        preparedObj.el.removeAttribute('aria-hidden');
    }
}

function untrap() {
    if (trappedEl) {
        // restore 'dirtied' elements to their original state
        dirtyObjects.forEach(function (item) {
            return cleanAttribute(item);
        });

        dirtyObjects = [];

        // 're-enable' the main landmark
        if (mainEl) {
            mainEl.setAttribute('role', 'main');
        }

        // let observers know the screenreader is now untrapped
        trappedEl.dispatchEvent(new CustomEvent('screenreaderUntrap', { bubbles: true }));

        trappedEl = null;
    }
}

function trap(el) {
    // ensure current trap is deactivated
    untrap();

    // update the trapped el reference
    trappedEl = el;

    // update the main landmark reference
    mainEl = document.querySelector('main, [role="main"]');

    // we must remove the main landmark to avoid issues on voiceover iOS
    if (mainEl) {
        mainEl.setAttribute('role', 'presentation');
    }

    // cache all ancestors, siblings & siblings of ancestors for trappedEl
    var ancestors = util.getAncestors(trappedEl);
    var siblings = util.getSiblings(trappedEl);
    var siblingsOfAncestors = util.getSiblingsOfAncestors(trappedEl);

    // prepare elements
    dirtyObjects = [prepareAttribute(trappedEl, 'false')].concat(ancestors.map(function (item) {
        return prepareAttribute(item, 'false');
    })).concat(siblings.map(function (item) {
        return prepareAttribute(item, 'true');
    })).concat(siblingsOfAncestors.map(function (item) {
        return prepareAttribute(item, 'true');
    }));

    // update DOM
    dirtyObjects.forEach(function (item) {
        return dirtyAttribute(item);
    });

    // let observers know the screenreader is now trapped
    trappedEl.dispatchEvent(new CustomEvent('screenreaderTrap', { bubbles: true }));
}

module.exports = {
    trap: trap,
    untrap: untrap
};

});
$_mod.def("/makeup-modal$0.0.4/index", function(require, exports, module, __filename, __dirname) { 'use strict';

var keyboardTrap = require('/makeup-keyboard-trap$0.0.9/index'/*'makeup-keyboard-trap'*/);
var screenreaderTrap = require('/makeup-screenreader-trap$0.0.5/index'/*'makeup-screenreader-trap'*/);

var modalEl = void 0;

function unmodal() {
    if (modalEl) {
        screenreaderTrap.untrap(modalEl);
        keyboardTrap.untrap(modalEl);

        // let observers know the keyboard is now trapped
        var event = document.createEvent('Event');
        event.initEvent('unmodal', false, true);
        modalEl.dispatchEvent(event);

        modalEl = null;
    }
    return modalEl;
}

function modal(el) {
    unmodal();
    modalEl = el;
    screenreaderTrap.trap(modalEl);
    keyboardTrap.trap(modalEl);

    // let observers know the element is now modal
    var event = document.createEvent('Event');
    event.initEvent('modal', false, true);
    modalEl.dispatchEvent(event);

    return modalEl;
}

module.exports = {
    modal: modal,
    unmodal: unmodal
};

});
$_mod.def("/@ebay/skin$6.0.0-6/docs/src/js/ds6/transition", function(require, exports, module, __filename, __dirname) { /**
 * This module should be shared with ebayui-core and potentially extracted into it's own package.
 */

var ELEMENT_NODE = 1;
var TRANSITION_END = 'transitionend';
var IMMEDIATE_TRANSITION_REG = /0m?s(?:, )?/g;

/**
 * Applies a primer `-init` class before starting a transition
 * to make transitioning properties that are not animatable easier.
 * 
 * **Order**
 * 1. Add class: "$name-init"
 * 2. Wait one frame.
 * 3. Remove class "$name-init".
 * 4. Add class "$name".
 * 5. Wait for animation to finish.
 * 6. Remove class "$name".
 *
 * @param {HTMLElement} el The root element that contains the animation.
 * @param {string} name The base className to use for the transition.
 * @param {Function} cb A callback called after the transition as ended.
 */
module.exports = function transition(el, baseClass, cb) {
  var ended;
  var pending;
  var ran = 0;
  var classList = el.classList;
  var initClass = baseClass + '-init';
  var cancelFrame = nextFrame(function () {
    el.addEventListener(TRANSITION_END, listener, true);
    classList.add(baseClass);
    classList.remove(initClass);
    pending = getTransitionCount(el);
    cancelFrame = undefined;
    if (pending === 0) {
      cancel();
    }
  });

  classList.add(initClass);

  return cancel;

  /**
   * Cancels the current transition and resets the className.
   */
  function cancel() {
    if (ended) {
      return;
    }


    ended = true;
    el.removeEventListener(TRANSITION_END, listener, true);

    if (cancelFrame) {
      cancelFrame();
      classList.remove(initClass);
    } else {
      classList.remove(baseClass);
    }
  }

  /**
   * Handles a single transition end event.
   * Once all child transitions have ended the overall animation is completed.
   */
  function listener() {
    if (++ran === pending) {
      ended = true;
      el.removeEventListener(TRANSITION_END, listener, true);
      classList.remove(baseClass);
      if (cb) {
        cb();
      }
    }
  }
}


/**
 * Walks the tree of an element and counts how many transitions have been applied.
 *
 * @param {HTMLElement} el 
 * @return {number}
 */
function getTransitionCount(el) {
  var count = window
    .getComputedStyle(el)
    .transitionDuration
    .replace(IMMEDIATE_TRANSITION_REG, '') ? 1 : 0;

  var child = el.firstElementChild;
  while (child) {
    count += getTransitionCount(child);
    child = child.nextElementSibling;
  }

  return count;
}

/**
 * Runs a function during the next animation frame.
 *
 * @param {function} fn a function to run on the next animation frame.
 * @return {function} a function to cancel the callback.
 */
function nextFrame(fn) {
  var frame;
  var cancelFrame;

  if (window.requestAnimationFrame) {
    frame = requestAnimationFrame(function () {
      frame = requestAnimationFrame(fn);
    });
    cancelFrame = cancelAnimationFrame;
  } else {
    frame = setTimeout(fn, 26); // 16ms to simulate RAF, 10ms to ensure called after the frame.
    cancelFrame = clearTimeout;
  }

  return function () {
    if (frame) {
      cancelFrame(frame);
      frame = undefined;
    }
  }
}

});
$_mod.def("/@ebay/skin$6.0.0-6/docs/src/js/ds6/main", function(require, exports, module, __filename, __dirname) { // Most of this is code for the menu and combobox logic, which will be abstracted away into their own modules at some point

// makeup-js accessibility modules
var Expander = require('/makeup-expander$0.4.0/index'/*'makeup-expander'*/);
var Rover = require('/makeup-roving-tabindex$0.0.5/index'/*'makeup-roving-tabindex'*/);
var keyEmitter = require('/makeup-key-emitter$0.0.3/index'/*'makeup-key-emitter'*/);
var scrollKeyPreventer = require('/makeup-prevent-scroll-keys$0.0.2/index'/*'makeup-prevent-scroll-keys'*/);
var modal = require('/makeup-modal$0.0.4/index'/*'makeup-modal'*/);
var transition = require('/@ebay/skin$6.0.0-6/docs/src/js/ds6/transition'/*"./transition"*/);
var FloatingLabel = require('/makeup-floating-label$0.0.2/index'/*'makeup-floating-label'*/);

// util function
function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

// BUTTON WIDGET

// simple button logic on buttons
nodeListToArray(document.querySelectorAll('.btn:not([aria-disabled="true"]):not(.dialog-button):not(.tourtip-button):not(.tourtip--link-button)')).forEach(function(el, i) {
    el.addEventListener('click', function(e) {
        alert('You clicked ' + this);
    });
});

// simple aria-expanded logic on expand button example
nodeListToArray(document.querySelectorAll('.expand-btn-example')).forEach(function(el, i) {
    el.addEventListener('click', function(e) {
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    })
});

// MENU WIDGET (basic interactivity only)

// roving tab index logic on menu items container
nodeListToArray(document.querySelectorAll('[role=menu]')).forEach(function(el, i) {
    var widget = Rover.createLinear(el, '[role^=menuitem]', {autoReset: 0});
});

// aria expanded logic on menu button and overlay
// escape key logic on menu (closes menu)
nodeListToArray(document.querySelectorAll('.menu, .fake-menu')).forEach(function(el, i) {
    var widget = new Expander(el, {
        autoCollapse: true,
        expandOnClick: true,
        focusManagement: 'interactive',
        hostSelector: '.expand-btn',
        contentSelector: '.menu__items, .fake-menu__items'
    });

    var optionEls = nodeListToArray(el.querySelectorAll('[role^=menuitem]'));
    var updateRadios = function(newSelection) {
        optionEls.forEach(function(el) {
            el.setAttribute('aria-checked', el === newSelection);
        });
    }

    optionEls.forEach(function(el, i) {
        // add a click handler to each el
        el.addEventListener('click', function(e) {
            var role = this.getAttribute('role');
            widget.collapse();
            if (role === 'menuitemradio') {
                updateRadios(this);
            } else if (role === 'menuitemcheckbox') {
                el.setAttribute('aria-checked', el.getAttribute('aria-checked') !== 'true');
            }
        });
    });

    keyEmitter.addKeyDown(el);

    el.addEventListener('escapeKeyDown', function() {
        this.querySelector('.expand-btn').focus();
        widget.collapse();
    });

    el.addEventListener('expander-expand', function() {
        // TODO: normalize code with combobox
        var firstSelectedOptionEl = nodeListToArray(el.querySelectorAll('[role^=menuitem][aria-checked=true]'))[0];
        
        if (!firstSelectedOptionEl) {
            return;
        }

        var firstSelectedOptionParent = firstSelectedOptionEl && firstSelectedOptionEl.parentElement;

        if (firstSelectedOptionEl.offsetTop < firstSelectedOptionParent.scrollTop) {
            firstSelectedOptionParent.scrollTop = firstSelectedOptionEl.offsetTop;
        } else {
            var offsetBottom = firstSelectedOptionEl.offsetTop + firstSelectedOptionEl.offsetHeight;
            var scrollBottom = firstSelectedOptionParent.scrollTop + firstSelectedOptionParent.offsetHeight;
            if (offsetBottom > scrollBottom) {
                firstSelectedOptionParent.scrollTop = offsetBottom - firstSelectedOptionParent.offsetHeight;
            }
        }
    });
});

// prevent scroll keys logic on menu items
nodeListToArray(document.querySelectorAll('[role^=menuitem]')).forEach(function(el, i) {
    scrollKeyPreventer.add(el);
});

// COMBOBOX WIDGET (basic interactivity only)

nodeListToArray(document.querySelectorAll('.combobox')).forEach(function(el, i) {
    var inputEl = el.querySelector('input:not([disabled])[role=combobox]');

    if (!inputEl) {
        return;
    }

    var widget = new Expander(el, {
        autoCollapse: true,
        expandOnClick: true,
        hostSelector: 'input[role=combobox]',
        hostContainerClass: 'combobox__control',
        contentSelector: '.combobox__options',
        simulateSpacebarClick: true
    });

    var optionEls = nodeListToArray(el.querySelectorAll('[role=option]'));
    var selectedOptionEl = el.querySelector('[role=option][aria-selected=true]');
    var size = optionEls.length;
    var currentIndex;

    var updateCombobox = function(newIndex) {
        selectedOptionEl.setAttribute('aria-selected', 'false');
        currentIndex = newIndex;
        inputEl.value = 'Option ' + (currentIndex + 1);
        selectedOptionEl = optionEls[currentIndex];
        selectedOptionEl.setAttribute('aria-selected', 'true');
    };

    optionEls.forEach(function(el, i) {
        if (!el.dataset) {
            el.dataset = {};
        }

        // assign an index data attribute to each el
        el.dataset.comboboxIndex = i;

        // add a click handler to each el
        el.addEventListener('click', function(e) {
            updateCombobox(parseInt(this.dataset.comboboxIndex, 10));
            widget.collapse();
            inputEl.focus();
        });
    });

    currentIndex = parseInt(selectedOptionEl.dataset.comboboxIndex, 10);

    keyEmitter.addKeyDown(el);
    scrollKeyPreventer.add(el);

    el.addEventListener('escapeKeyDown', function() {
        widget.collapse();
        inputEl.focus();
    });

    el.addEventListener('arrowDownKeyDown', function(e) {
        if (currentIndex < (size - 1)) {
            updateCombobox(currentIndex + 1);
        }
    });

    el.addEventListener('arrowUpKeyDown', function(e) {
        if (currentIndex > 0) {
            updateCombobox(currentIndex - 1);
        }
    });

    el.addEventListener('expander-expand', function() {
        // TODO: normalize code with menu
        var firstSelectedOptionEl = nodeListToArray(el.querySelectorAll('[role=option][aria-selected=true]'))[0];

        if (!firstSelectedOptionEl) {
            return;
        }

        var firstSelectedOptionParent = firstSelectedOptionEl && firstSelectedOptionEl.parentElement;

        if (firstSelectedOptionEl.offsetTop < firstSelectedOptionParent.scrollTop) {
            firstSelectedOptionParent.scrollTop = firstSelectedOptionEl.offsetTop;
        } else {
            var offsetBottom = firstSelectedOptionEl.offsetTop + firstSelectedOptionEl.offsetHeight;
            var scrollBottom = firstSelectedOptionParent.scrollTop + firstSelectedOptionParent.offsetHeight;
            if (offsetBottom > scrollBottom) {
                firstSelectedOptionParent.scrollTop = offsetBottom - firstSelectedOptionParent.offsetHeight;
            }
        }
    });
});

// INFOTIP WIDGET
nodeListToArray(document.querySelectorAll('.infotip-icon, .tourtip-button')).forEach(function(el) {
    var customTooltipWindow = el.nextElementSibling;
    el.addEventListener('click', handleOpen);

    if (!customTooltipWindow.hasAttribute('hidden')) {
        var btnClose = customTooltipWindow.querySelector('.tooltip-close');
        btnClose.addEventListener('click', handleClose, true);
        if (el.className.indexOf('infotip-span') !== -1) {
            btnClose.focus();
        }
    }

    function handleOpen () {
        if (!customTooltipWindow.hasAttribute('hidden')) {
            customTooltipWindow.setAttribute('hidden', '');
        } else {
            el.classList.add('icon-background');
            customTooltipWindow.removeAttribute('hidden');
            var infotipClose = customTooltipWindow.querySelector('.tooltip-close');
            infotipClose.addEventListener('click', handleClose, true);
            infotipClose.focus();
        }
    }

    function handleClose () {
        customTooltipWindow.setAttribute('hidden', '');
        el.addEventListener('click', handleOpen);
        var infotipClose = customTooltipWindow.querySelector('.tooltip-close');
        infotipClose.removeEventListener('click', handleClose, true);
        el.focus();
    }
});


// DIALOG WIDGET
nodeListToArray(document.querySelectorAll('.dialog-button')).forEach(function (btn) {
    var cancel;
    var dialog = btn.nextElementSibling;
    var dialogBody = dialog.querySelector('.dialog__body');
    var dialogClose = dialog.querySelector('.dialog__close');
    btn.addEventListener('click', handleOpen);

    function handleOpen () {
        if (cancel) {
            cancel();
        }

        cancel = transition(dialog, 'dialog--show', handleTransitionEnd(true));
        dialog.removeAttribute('hidden');
        btn.removeEventListener('click', handleOpen);
        dialog.addEventListener('click', handleClose, true);
        document.body.setAttribute("style", "overflow:hidden");
        modal.modal(dialog.querySelector('.dialog__window'));
    }

    function handleClose (ev) {
        if (dialogBody.contains(ev.target)) {
            return;
        }

        if (cancel) {
            cancel();
        }

        cancel = transition(dialog, 'dialog--hide', handleTransitionEnd(false));
        dialog.setAttribute('hidden', '');
        btn.addEventListener('click', handleOpen);
        dialog.removeEventListener('click', handleClose, true);
        document.body.removeAttribute("style");
        modal.unmodal();
        btn.focus();
    }

    function handleTransitionEnd (isOpening) {
        // focus on the close button
        if (isOpening) {
            dialogClose.focus();
        }

        cancel = undefined;
    }
});

// set up initial matchMedia query
window.mobileMediaQuery = 'all and (max-width: 600px)';
window.mm = window.matchMedia(window.mobileMediaQuery);

window.sidebar = document.querySelector('nav .fixed-nav');
window.sidebar_top = sidebar.offsetTop;

// debounce utility function
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function fixTheSidebar() {
    var isMobile = window.mm.matches;
    var y = window.scrollY || window.pageYOffset;

    // fix the navigation on scroll
    if (!isMobile && y >= window.sidebar_top) {
        window.sidebar.classList.add('fixed');
    } else {
        window.sidebar.classList.remove('fixed');
    }
}

window.addEventListener('resize', debounce(function() {
    // re-run matchMedia on resize
    mm = window.matchMedia(mobileMediaQuery);
}, 50));

window.addEventListener('load', function() {
    fixTheSidebar();

    window.addEventListener('scroll', fixTheSidebar);
});

nodeListToArray(document.querySelectorAll('.floating-label')).forEach(function(el) {
    var floatingLabel = new FloatingLabel(el);
});

});
$_mod.run("/@ebay/skin$6.0.0-6/docs/src/js/ds6/main");