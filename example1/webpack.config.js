var path = require('path');

var number = 'CodeSplit';
var targetPath = path.resolve(__dirname,'webpackconfigs/config'+number+".js");
module.exports = require(targetPath);