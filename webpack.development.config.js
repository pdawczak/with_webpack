var webpack = require("webpack");
var path = require("path");
var SaveHashes = require('assets-webpack-plugin');

// Plugins
var saveHashesPlugin = new SaveHashes({ path: path.join(__dirname, './assets/manifest'), filename: 'development.json' });
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin("common.js", "build/common.js");

module.exports = {
    entry: {
        'App.js': './assets/src/js/app.js'
    },
    output: {
        path: __dirname + '/public/javascripts/',
        filename: 'build/[name]',
        sourceMapFilename: 'build/[name].map',
    },
    module: {
        loaders: [
            { test: path.join(__dirname, './assets/src'), loader: 'babel-loader' },
            { test: /\.sass$/, loader: 'style!css!sass' },
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    plugins: [
        saveHashesPlugin,
        commonsPlugin
    ]
};
