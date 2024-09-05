const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        signup: './src/index.js',
        login: './src/login.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    optimization: {
        runtimeChunk: 'single',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Signup',
            template: './src/index.html',
            excludeChunks: ['login']
        }),
        new HtmlWebpackPlugin({
            title: 'Login',
            template: './src/login.html',
            filename: 'login.html',
            chunks: ['login']
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    }
}