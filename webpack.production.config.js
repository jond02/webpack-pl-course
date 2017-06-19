"use strict";

//add production features to the base dev config

let devConfig = require("./webpack.config.js");
let WebpackStrip = require("strip-loader");

let stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader("console.log", "perfLog")
};

devConfig.module.rules.push(stripLoader);

module.exports = devConfig;