/* eslint-disable no-console */
/*
 * Updates the Jekyll front matter defaults with the current skin package version from NPM.
 */
const fs = require("fs");
const files = ["./docs/_config.yml"];

files.forEach((file) => {
    const newContents = fs
        .readFileSync(file, "utf8")
        .replace(
            /version\:.*\n/gi,
            `version: ${process.env.npm_package_version}\n`
        );

    fs.writeFile(file, newContents, "utf8", (err) => {
        if (err) {
            return console.log(err);
        }
    });
});
