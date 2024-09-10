// This is a hack added in order to allow the carousel to work in older parsers
const fs = require("fs");
const path = require("path");
const currentDir = path.dirname(__dirname);
const carousel = path.resolve(currentDir, "dist", "carousel");
const carouselCSS = path.resolve(carousel, `carousel.css`);
fs.readFile(carouselCSS, "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    const result = data
        .replace(
            /\@supports not (.|\n)+?\{/,
            `/* autoprefixer: ignore next */
@supports not /*!Y */
      (
            /*!Y */ (-webkit-scroll-snap-coordinate: 0 0) or /*!Y */
            (-ms-scroll-snap-coordinate: 0 0) or /*!Y */
            (scroll-snap-coordinate: 0 0) or /*!Y */ (scroll-snap-align: start)
      ) {`,
        )
        .replace(
            /\@supports \((.|\n)+?\{/,
            `/* autoprefixer: ignore next */
@supports (
    /*!Y */ (-webkit-scroll-snap-coordinate: 0 0) or /*!Y */
        (-ms-scroll-snap-coordinate: 0 0) or /*!Y */
        (scroll-snap-coordinate: 0 0) or /*!Y */ (scroll-snap-align: start)
) {`,
        );

    fs.writeFile(carouselCSS, result, "utf8", function (err) {
        if (err) return console.log(err);
    });
});
