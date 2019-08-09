/*
 * Updates the CDN paths with the current version of NPM
 */
const fs = require('fs');
const files = ['./docs/index.html', './docs/ds6/index.html'];

files.forEach(file => {    
    const newContents = fs.readFileSync(file, 'utf8').replace(/version\:.*\n/gi, `version: ${process.env.npm_package_version}\n`);

    fs.writeFile(file, newContents, 'utf8', (err) => {
        if (err) {
            return console.log(err);
        }
    });
});
