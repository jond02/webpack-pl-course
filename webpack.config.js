module.exports = {
    entry: ["./src/js/app.js", "./src/js/utils.js"],
    output: {
        filename: "./src/js/bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader",
                enforce: "pre"
            }
        ]
    },

    resolve: {
        extensions: [".js", ".es6"]
    }

};

//webpack
//webpack-dev-server --inline
//watch: true
//webpack -p //minify code
//webpack --config webpack.production.config.js -p //select the config file and minify



