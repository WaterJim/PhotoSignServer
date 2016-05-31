/**
 * Created by 橘子哥 on 2016/2/25.
 */
var app = require("../app.js");
//引入https模块，服务器与客户端之间的传输协议使用https
var https = require("https");
var fs = require("fs");

var config = require("../config/config.js");

app.listen(config.port, function () {
    console.log("app started. app listening on port : " + config.port);
});

//设置https密钥及证书
//var options = {
//    key: fs.readFileSync("../config/key/" + config.privatekey),
//    cert: fs.readFileSync("../config/key/" + config.crt)
//};
////使用https启动服务器
//https.createServer(options, app).listen(config.port, function () {
//    console.log("app started. app listening on port : " + config.port);
//});