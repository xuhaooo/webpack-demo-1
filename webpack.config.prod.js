const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config.base.js')
const path = require('path');

module.exports = {
    ...base,
    mode: "production",
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false,
        }),
    ],
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
};
