/**
 * Created by 橘子哥 on 2016/2/25.
 * 系统配置文件
 * 根据系统的环境变量参数调用不同的配置文件
* 默认调用development.js
*/
var config = null;
if(process && process.env &&  process.env.NODE_ENV){
    config = require("./env/" + process.env.NODE_ENV );
}else{
    config = require("./env/development.js");
}

module.exports = config;