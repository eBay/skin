const path = require("path");

module.exports = (ctx) => ({
    plugins: [
        require("autoprefixer"),
        require("cssnano")({
            preset: [
                "default",
                {
                    normalizeWhitespace: ctx.env === "production",
                    rawCache: ctx.env === "production",
                    colormin: ctx.env === "production",
                },
            ],
        }),
    ],
});
