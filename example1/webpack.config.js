var path = require('path');

var number = 'ExtractCSS';
var targetPath = path.resolve(__dirname,'webpackconfigs/config'+number+".js");
module.exports = require(targetPath);