var webpack = require('webpack');
var path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: ["faker", "lodash", "react", "react-dom", "react-input-range", "react-redux", "react-router", "redux", "redux-form", "redux-thunk"]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash:8].js'
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
            inlineSource:'.js$',
            template: './src/index.html'
        })
    ]
};