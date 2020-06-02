var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var child_process = require('child_process');
var banner = require('gulp-banner');
var pkg = require('./package.json');
var flatten = require('gulp-flatten');
var rename = require("gulp-rename");
var browserSync = require('browser-sync').create();
var LessPluginCleanCSS = require('less-plugin-clean-css');
var cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var autoprefixPlugin = new LessPluginAutoPrefix();
var distTarget = './dist';
var siteStaticTarget = './_site/static';
var docsStaticTarget = './docs/static';
var minifiedFileExtensionName = '.min.css';
var cdnTarget = './_cdn/skin/v'+pkg.version;


var comment = [
    '/*!',
    'Skin v<%= pkg.version %>',
    'Copyright 2017 eBay! Inc. All rights reserved.',
    'Licensed under the BSD License.',
    'https://github.com/eBay/skin/blob/master/LICENSE.txt"',
    '*/\n'
].join('\n');

// Compile all modules to /dist
function modules () {
   return gulp.src([
       './src/less/**/*.less',
       '!./src/**/base/*.less',
       '!./src/less/**/*-static.less',
       '!./src/less/bundles/**/*.less',
       '!./src/less/gh/**/*.less',
       '!./src/less/grid/**/*.less',
       '!./src/less/less/**/*.less',
       '!./src/less/mixins/**/*.less',
       '!./src/less/variables/**/*.less',
       '!./src/less/properties/**/*.less'
    ])
    .pipe(less({plugins: [autoprefixPlugin]}))
    .pipe(gulp.dest(distTarget))
}

// Compile and minify the full skin bundle to docs/static, _site/static and cdn
function megabundle() {
   return gulp.src(['./src/less/bundles/skin/**/*.less'])
    .pipe(banner(comment, {pkg: pkg}))
    .pipe(rename(function (path) {
        path.extname = minifiedFileExtensionName;
    }))
    .pipe(less({plugins: [autoprefixPlugin]}))
    .pipe(less({plugins: [cleanCSSPlugin]}))
    .pipe(gulp.dest(docsStaticTarget))
    .pipe(gulp.dest(siteStaticTarget))
    .pipe(gulp.dest(cdnTarget))
}

// Static Server + watching src & docs files
function server() {
    // Start the server.
    browserSync.init({server: "_site"});
    // Watch less files under src/less. Resync CSS on change.
    gulp.watch("src/less/**/*.less", gulp.series('default', injectSkinCSS));
    // Watch less files under docs. Resync CSS on change.
    gulp.watch("docs/src/less/**/*.less", syncDocsCss);
    // Watch js files under docs. Resync JS on change.
    gulp.watch("docs/src/js/**/*.js", syncDocsJs);
    // Watch html files under docs. Regenerate _site on change.
    gulp.watch("docs/**/*.html", syncDocsHtml);
    // Watch html files under _site. Resync browser on change.
    gulp.watch("_site/**/*.html").on('change', browserSync.reload);
}

// Inject Skin CSS into browsers
function injectSkinCSS() {
    return gulp.src(['_site/**/*.css', '_site/**/*.min.css']).pipe(browserSync.stream());
}

// Re-lasso the docs CSS, copy to jekyll _site/static, inject into browsers
function syncDocsCss() {
    return child_process.spawn('npm', ['run', 'lasso:docs'], {stdio: 'inherit'}).on('close', function() {
        gulp.src(['./docs/static/ds4/docs.min.css'])
            .pipe(gulp.dest(siteStaticTarget + '/ds4'))
            .pipe(browserSync.stream());

        gulp.src(['./docs/static/ds6/docs.min.css'])
            .pipe(gulp.dest(siteStaticTarget + '/ds6'))
            .pipe(browserSync.stream());
    });
}

// Re-lasso the docs JS, copy it to jekyll _site/static, then reload browsers
function syncDocsJs() {
    return child_process.spawn('npm', ['run', 'lasso:docs'], {stdio: 'inherit'}).on('close', function() {
        gulp.src(['./docs/static/ds4/docs.min.js'])
            .pipe(gulp.dest(siteStaticTarget + '/ds4'));

        gulp.src(['./docs/static/ds6/docs.min.js'])
            .pipe(gulp.dest(siteStaticTarget + '/ds6'));

        browserSync.reload();
    });
}

// Run Jekyll build
function syncDocsHtml(cb) {
    return child_process.spawn('bundler', ['exec', 'jekyll', 'build', '--config', 'docs/_config.yml,docs/_config.localhost.yml'], {stdio: 'inherit'}).on('close', cb);
}

// public tasks listed below

exports.server = server;
exports.default = gulp.series(gulp.parallel(modules, megabundle));
