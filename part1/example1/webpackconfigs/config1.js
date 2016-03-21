var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: ['./src/index'], // .js after index is optional
  output: {
    path: path.join(__dirname, '../dist/dist1'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  }
}
/*
webpack里最小的单位是module,把所有的层级关系打包在一个文件，多个小module组成更大的module，
module有编号   __webpack_require__(7);
每一个entry对应生成一个js文件
*/