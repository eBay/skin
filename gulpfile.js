var gulp = require('gulp');
var runSequence = require('run-sequence');
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
var cdnFileExtensionName = '.min.css';
var cdnTarget = './_cdn/skin/v'+pkg.version;

var comment = [
    '/*!',
    'Skin v<%= pkg.version %>',
    'Copyright 2017 eBay! Inc. All rights reserved.',
    'Licensed under the BSD License.',
    'https://github.com/eBay/skin/blob/master/LICENSE.txt"',
    '*/\n'
].join('\n');

gulp.task('less', ['modules', 'adaptive', 'grid', 'grid-full', 'megabundles']);

// Compile all modules to /dist
gulp.task('modules', function (cb) {
   return gulp.src(['./src/less/**/*.less', '!./src/less/bundles/**/*.less', '!./src/less/mixins/**/*.less', '!./src/less/less/**/*.less', '!./src/less/**/*-*.less', '!./src/**/base/*.less'])
    .pipe(less({plugins: [autoprefixPlugin]}))
    .pipe(gulp.dest(distTarget))
});

// Compile Skin adaptive modules to /dist
gulp.task('adaptive', function () {
   return gulp.src(['./src/less/**/*-large.less', '!./src/less/bundles/**/*.less', '!./src/less/grid/**/*.less'])
    .pipe(less({plugins: [autoprefixPlugin]}))
    .pipe(gulp.dest(distTarget))
});

// Compile grid modules to /dist
gulp.task('grid', function() {
    return gulp.src(['./src/less/grid/ds4/grid-core.less', './src/less/grid/ds4/grid-small.less', './src/less/grid/ds4/grid-large.less'])
    .pipe(less({plugins: [autoprefixPlugin]}))
    .pipe(gulp.dest(distTarget + '/grid/ds4'))
});

// #1 Compile grid-full module to dist, docs/static & _site/static
// #2 Then minify to _cdn
gulp.task('grid-full', function() {
    return gulp.src(['./src/less/grid/ds4/grid-full.less'])
    .pipe(less({plugins: [autoprefixPlugin]}))
    .pipe(banner(comment, {pkg: pkg}))
    .pipe(gulp.dest(docsStaticTarget + '/ds4'))
    .pipe(gulp.dest(siteStaticTarget + '/ds4'))
    .pipe(gulp.dest(distTarget + '/grid/ds4'))
    .pipe(less({plugins: [cleanCSSPlugin]}))
    .pipe(rename(function (path) {
        path.extname = cdnFileExtensionName;
    }))
    .pipe(gulp.dest(cdnTarget + '/ds4'))
});

// #1 Compile the full skin ds4 & ds6 bundles to docs/static & _site/static
// #2 Then minify to _cdn
gulp.task('megabundles', function () {
   return gulp.src(['./src/less/bundles/skin/**/*.less'])
    .pipe(less({plugins: [autoprefixPlugin]}))
    .pipe(banner(comment, {pkg: pkg}))
    .pipe(gulp.dest(docsStaticTarget))
    .pipe(gulp.dest(siteStaticTarget))
    .pipe(less({plugins: [cleanCSSPlugin]}))
    .pipe(rename(function (path) {
        path.extname = cdnFileExtensionName;
    }))
    .pipe(gulp.dest(cdnTarget))
});

// Static Server + watching src & docs files
gulp.task('server', function() {
    // Start the server.
    browserSync.init({server: "_site"});
    // Watch less files under src/less. Resync CSS on change.
    gulp.watch("src/less/**/*.less", ['syncSkinCss']);
    // Watch less files under docs. Resync CSS on change.
    gulp.watch("docs/src/less/**/*.less", ['syncDocsCss']);
    // Watch js files under docs. Resync JS on change.
    gulp.watch("docs/src/js/**/*.js", ['syncDocsJs']);
    // Watch html files under docs. Regenerate _site on change.
    gulp.watch("docs/**/*.html", ['syncDocsHtml']);
    // Watch html files under _site. Resync browser on change.
    gulp.watch("_site/**/*.html").on('change', browserSync.reload);
});


// Run LESS, move compiled CSS to jekyll _site, inject into browsers
gulp.task('syncSkinCss', function(cb) {
    runSequence('less', 'injectSkinCSS', cb);
});

// Inject CSS into browsers
gulp.task('injectSkinCSS', function(cb) {
    return gulp.src(['_site/**/*.css'])
        .pipe(browserSync.stream());
});

// Re-lasso the docs CSS, copy to jekyll _site/static, inject into browsers
gulp.task('syncDocsCss', function() {
    return child_process.spawn('npm', ['run', 'lasso:docs'], {stdio: 'inherit'}).on('close', function() {
        gulp.src(['./docs/static/ds4/docs.css'])
            .pipe(gulp.dest(siteStaticTarget + '/ds4'))
            .pipe(browserSync.stream());

        gulp.src(['./docs/static/ds6/docs.css'])
            .pipe(gulp.dest(siteStaticTarget + '/ds6'))
            .pipe(browserSync.stream());
    });
});

// Re-lasso the docs JS, copy it to jekyll _site/static, then reload browsers
gulp.task('syncDocsJs', function() {
    return child_process.spawn('npm', ['run', 'lasso:docs'], {stdio: 'inherit'}).on('close', function() {
        gulp.src(['./docs/static/ds4/docs.js'])
            .pipe(gulp.dest(siteStaticTarget + '/ds4'));

        gulp.src(['./docs/static/ds6/docs.js'])
            .pipe(gulp.dest(siteStaticTarget + '/ds6'));

        browserSync.reload();
    });
});

// Run Jekyll build
gulp.task('syncDocsHtml', function (done) {
    return child_process.spawn('bundler', ['exec', 'jekyll', 'build', '--config', 'docs/_config.yml,docs/_config.localhost.yml'], {stdio: 'inherit'}).on('close', done);
});
