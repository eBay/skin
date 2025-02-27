/* eslint-disable no-console */
/*
 * Updates the Jekyll front matter defaults with the current skin package version from NPM.
 */
const fs = require("fs");
const version = require("../package.json").version;
const files = ["./src/components/data/site.json"];

files.forEach((file) => {
    const newFile = JSON.parse(fs.readFileSync(file, "utf8"));
    newFile.version = version;
    fs.writeFile(file, JSON.stringify(newFile), "utf8", (err) => {
        if (err) {
            return console.log(err);
        }
    });
});
