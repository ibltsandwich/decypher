const path = require('path');
const webpack = require("webpack");

const plugins = []; // if using any plugins for both dev and production
const devPlugins = []; // if using any plugins for development

const prodPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: true
        }
    })
];

plugins = plugins.concat(
    process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
)

module.exports = {
    context: __dirname,
    entry: './frontend/decypher.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};