var path = require('path');

var number = 6;
var targetPath = path.resolve(__dirname,'webpackconfigs/config'+number+".js");
module.exports = require(targetPath);