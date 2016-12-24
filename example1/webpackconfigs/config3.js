var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: ['./src/index'], // .js after index is optional
  output: {
    path: path.join(__dirname, '../dist/dist3'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true)
  ]
}

/*
通过module被引用的次数（出现的次数），来分配Id，用的次数多的module id就越小。
意义不是很大。
*/
