/**
 * Created by 橘子哥 on 2016/2/25.
 * 引入其他配置文件并实例化
 */

var express = require("./config/express.js");
var mongodb = require("./config/mongoose.js");

var db  = mongodb();
var app = express();


module.exports = app;
