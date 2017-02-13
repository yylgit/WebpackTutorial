var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var chunksort = ['boot','vender','common','global'];
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var cssExtract = new ExtractTextPlugin("[name].[contenthash].css")
module.exports = {
    entry: {
        js1: ['./src/testExtract/js1.js'],
        js2: ['./src/testExtract/js2.js']
    },
    output: {
        path: path.join(__dirname, '../dist/extractCSS'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /\.s?css$/,
            loader: cssExtract.extract("style-loader", "css-loader") 
        }
        // ,{
        //     test: /\.scss$/,
        //     loaders: ['style', 'css','sass']
        // }
        ]
    },
    plugins: [
        cssExtract,
        // new ExtractTextPlugin("[name].[contenthash].css")
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['common'], 
        //     filename: '[name].[chunkhash].js',
        //     minChunks: 2
        // }),
        new HtmlWebpackPlugin({
          template: './src/index.html',
          title:'testExtractCSS',
          inject: 'body',
          chunksSortMode: function (a, b) {
              var aIndex =chunksort.indexOf(a.names[0]);
              var bIndex =chunksort.indexOf(b.names[0]);
              return aIndex - bIndex;
          }
        })
    ]
}
