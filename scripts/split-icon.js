#!/usr/bin/env node
/* eslint-disable no-console */
"use strict";
const fs = require("fs");
const path = require("path");
const currentDir = path.dirname(__dirname);
const svgDir = path.resolve(currentDir, "src", "svg");
const { optimize } = require("svgo");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const svgConfig = require("./svgo.config");
const { html2xhtml2 } = require("./util");

async function splitter(file, argv) {
    const skinFile = await fs.promises.readFile(
        path.resolve(svgDir, `${file}.svg`),
        "utf8"
    );

    const symbols = JSDOM.fragment(skinFile);

    for (const symbol of symbols.querySelectorAll("symbol")) {
        const symbolId = symbol.getAttribute("id");
        symbol.removeAttribute("id");
        symbol.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        await fs.promises.writeFile(
            path.resolve(svgDir, "icon", `${symbolId}.svg`),
            html2xhtml2(symbol)
                .replace("<symbol", "<svg")
                .replace("</symbol>", "</svg>")
        );
    }
}

module.exports = { splitter };
