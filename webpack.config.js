//webpack config

const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "/src/index.js",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        clean: true,
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use:
                {
                    loader: "html-loader"
                }

            },
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    "css-loader",
                ]
            },
            {
                test: /\.(jpg|png|gif)/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "assets/static/[name].[contenthash].[ext]"
                    }
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new miniCssExtractPlugin({
            filename: "assets/styles/[name].[contenthash].css"
        })
    ],
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 3000
    }
}