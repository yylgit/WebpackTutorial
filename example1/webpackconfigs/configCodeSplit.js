const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: ['./src/codeSplit/index.js']
    },
    output: {
        path: path.resolve(__dirname,'../dist/codeSplit'),
        filename: '[name].js'
    },
    module: {
        loaders: [

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/codeSplit/index.html',
          title:'testcodeSplit',
          inject: 'body',
          chunksSortMode: function (a, b) {
              var aIndex =chunksort.indexOf(a.names[0]);
              var bIndex =chunksort.indexOf(b.names[0]);
              return aIndex - bIndex;
          }
        })
    ]

}