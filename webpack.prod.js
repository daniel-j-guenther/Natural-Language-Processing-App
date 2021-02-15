const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    stats: 'verbose',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({}),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new OptimizeCssAssetsPlugin({}),
    ]
}