var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var chunksort = ['vender','common','global','page1','page2'];
module.exports = {
    entry: {
        vender:['./src2/Vue.js','./src2/vender.js'],
        common: ['./src2/component1.js','./src2/component2.js'],
        global:['./src2/global.js'], //需要全局进行配置的代码
        page1: ['./src2/page1.js'],
        page2: ['./src2/page2.js']
    },
    output: {
        path: path.join(__dirname, '../dist/dist6'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style', 'css']
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['common','vender','webpack-bootstrap'], 
            filename: '[name].[chunkhash].js',
            minChunks: 2
        }),
        //这个common 块的顺序还有关系，
        //先把vender入口配置的Vue，打包到一起，然后将其他文件中引用这里的Vue
        //然后是common配置的component1和component2打包到一起，其他文件中的component1和component2引用common里的
        //最后是把其他文件中的公共部分抽出来，放在最后抽的common文件中。

       
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "commonChunk",
        //     filename: '[name].[hash].js',
        //     minChunks: 2
        // })
        //像这种name没有相应入口的话，会把所有文件的公共部分抽出来放在一起


        new HtmlWebpackPlugin({
          template: './src2/index.html',
          title:'testtitle',
          inject: 'body',
          chunksSortMode: function (a, b) {
              var aIndex =chunksort.indexOf(a.names[0]);
              var bIndex =chunksort.indexOf(b.names[0]);
              return aIndex - bIndex;
          }
        })
    ]
}
