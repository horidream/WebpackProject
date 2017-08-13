var webpack = require('webpack');
var path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: ["faker", "lodash", "react", "react-dom", "react-input-range", "react-redux", "react-router", "redux", "redux-form", "redux-thunk"]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash:8].js'
    },
    devServer:{
        stats: {
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: false,
        errorDetails: false,
        warnings: false,
        publicPath: false
      }
    },
    module:{
        rules:[
        {
            use:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        }
        ,{
            use:['style-loader','css-loader'],
            test:/\.css$/
        }
        
      ]},
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor",'manifest']
        }),
        new HTMLWebpackPlugin({
            inlineSource: '.(js|css)$',
            template: './src/index.html'
        })
        , new HTMLWebpackInlineSourcePlugin()
        , new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};