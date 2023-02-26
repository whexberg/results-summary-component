const path = require('path');
const webpackCommon = require('./webpack.common');

module.exports = {
    ...webpackCommon,
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 3000,
        open: true,
    },
};
