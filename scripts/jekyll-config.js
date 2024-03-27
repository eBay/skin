/* eslint-disable no-console */
/*
 * Updates the Jekyll front matter defaults with the current skin package version from NPM.
 */
const fs = require("fs");
const version = require("../package.json").version;
const files = ["./docs/_config.yml"];

files.forEach((file) => {
    const newContents = fs
        .readFileSync(file, "utf8")
        .replace(/version\:.*\n/gi, `version: ${version}\n`);

    fs.writeFile(file, newContents, "utf8", (err) => {
        if (err) {
            return console.log(err);
        }
    });
});
