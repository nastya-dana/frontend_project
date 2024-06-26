const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: pach.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        clean: true,
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.js',
            template: './src/index.html',
        }
        ),
        new HTMLInlineCSSWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            // chunkFilename: "[id].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],

    },
    devServer: {
        open: true,
        liveReload: true,
        static: path.resolve(__dirname, './src'),
    },
    target: 'web',
}