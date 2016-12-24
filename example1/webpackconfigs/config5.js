var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {index: ['./src/index'],
          UIStuff: ['./src/UIStuff']
          // vender: ['react','fetch']
          }, // .js after index is optional
          

  output: {
    path: path.join(__dirname, '../dist/dist5'),
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(true),
    // new webpack.optimize.CommonsChunkPlugin({
    //         name: ["index"],
    //         filename: 'index.js',
    //         minChunks: Infinity
    //     }),
      new webpack.optimize.CommonsChunkPlugin({
            name: ["commons"],
            filename: '[name].[hash].js',
            minChunks: 2
        }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title:'testtitle',
      hash: true,
      chunks: ['UIStuff','index','commons'],
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

CommonsChunkPlugin   会把被两个以上的chunk调用的部分抽取出来放到一个文件中，在用到的
chunk中调用其模块，模块都是挂在。 如果不用这个插件，则就是以每一个文件为一个单元进行模块的调用，

*/
