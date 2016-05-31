/**
 * Created by 橘子哥 on 2016/2/26.
 * 实现与mongodb的链接
 * 并进行数据库的配置
 */
var mongoose = require("mongoose");
var config = require("./config.js");
module.exports = function () {
    var db = mongoose.connect(config.mongodb);

    //检测是否连接成功
    mongoose.connection.on('error', function(){
        console.log("mongodb connect error...");
    });
    mongoose.connection.once('open', function () {
        console.log("mongodb connected...");
    });

    //添加相应的数据model
    require("../app/models/user.server.model.js");
    require("../app/models/appinfo.server.model.js");
    require("../app/models/student.server.model.js");
    require("../app/models/class.server.model.js");
    require("../app/models/class.server.addstudent.model.js");
    require("../app/models/record.server.model.js");

    return db;
}