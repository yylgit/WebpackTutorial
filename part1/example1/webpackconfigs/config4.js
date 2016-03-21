var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {index: ['./src/index'],
          UIStuff: ['./src/UIStuff']}, // .js after index is optional
  output: {
    path: path.join(__dirname, '../dist/dist4'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title:'testtitle',
      hash: true,
      chunks: ['common','index'],
      inject: 'body'
    })

  ]
}

/*
HtmlWebpackPlugin
hash  为生成的html引用的js添加hash值<script src="UIStuff.js?6f347301ad70b306a459">
默认所有的chunks都会在html上引入，chunks: ['index'] 是筛选html引用的chunk
excludeChunks: ['index'] 排除不引用的chunk,
inject 控制chunk插入的地方 ，默认是body里面
*/
