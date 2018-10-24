const { resolve } = require('path');
const webpack = require('webpack');
const conf = require('./config');
const { CheckerPlugin } = require('awesome-typescript-loader');

const config = {

    devtool: 'source-map',

    entry: [
        `webpack-dev-server/client?http://${conf.devServer.host}:${conf.devServer.port}`,
        'webpack/hot/only-dev-server',
        './index',
    ],

    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/',
    },

    context: resolve(__dirname, 'src'),

    devServer: {
        hot: true,
        index: 'index.html',
        port: conf.devServer.port,
        disableHostCheck: true,
        historyApiFallback: true,
        contentBase: resolve(__dirname, 'public'),
        publicPath: '/'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".webpack.js", ".json", ".scss", ".css"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: [
                    'babel-loader',
                    'awesome-typescript-loader?configFileName=tsconfig.json',
                ],
                include: __dirname,
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                loaders: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: [{
                    loader: "style-loader" // creates styles nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=15000&name=images/[name].[ext]' },
            { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader?&name=fonts/[name].[ext]' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
            { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=images/[name].[ext]' },
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CheckerPlugin(),
    ],

    externals: {},
};

module.exports = config;
