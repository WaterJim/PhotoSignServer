/**
 * Created by 橘子哥 on 2016/3/3.
 * 创建客户端版本信息模型，并添加到mongoose中
 */

var mongoose = require("mongoose");

var AppInfoSchema = mongoose.Schema({
    appname: {type: String, default: "P签到"},
    version: {type: String, default: '1.0.0'}
});

var AppInfo = mongoose.model("AppInfo", AppInfoSchema, 'appinfo');
