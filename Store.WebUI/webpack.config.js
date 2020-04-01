const path = require("path");

module.exports = {
    entry: {
        'layout': './scripts/views/src/shared/layout.js',
        'home.index': './scripts/views/src/home/home.index.js'
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, './scripts/views/', 'dist')
    },
    resolve: {
        modules: ['../node_modules']
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
            {
                loader: "webpack-modernizr-loader",
                options: {
                    // Full list of supported options can be found in [config-all.json](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json).
                    options: ["setClasses"],
                    "feature-detects": [
                        "test/css/flexbox",
                        "test/es6/promises",
                        "test/serviceworker"
                    ]
                    // Uncomment this when you use `JSON` format for configuration
                    // type: 'javascript/auto'
                },
                test: /empty-alias-file\.js$/
            }
        ]
    }
};