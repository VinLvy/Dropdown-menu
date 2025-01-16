const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true, // Cleans the dist folder before every build.
    },
    mode: process.env.NODE_ENV || 'development', // Set mode dynamically.
    devtool: 'inline-source-map', // Source maps for easier debugging.
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // Handles CSS files.
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource', // Webpack 5's asset module.
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Sets the HTML template.
        }),
    ],
    devServer: {
        static: './dist', // Serves files from 'dist'.
        port: 3000, // Runs dev server on port 3000.
        open: true, // Automatically opens the browser.
    },
};
