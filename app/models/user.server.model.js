/**
 * Created by 橘子哥 on 2016/2/26.
 * 创建用户信息模型，并添加到mongoose中
 */

var mongoose = require("mongoose");
var moment = require('moment');

var UserSchema = new mongoose.Schema({
    account: {type: String, default: '000000'},    //用户账号
    password: {type: String, default: '123456'},   //用户密码
    email: {type: String, default: 'example@example.com'},      //用户邮件地址
    phone: {type: String, default: '0000000000'},      //用户电话号码
    nickname: {type: String, default: '人民教师'},       //用户昵称
    tag: {type: String, default: '这个人很懒,什么也没有留下'},        //用户个人说明
    createdate: {type: Date, default: Date.now()},
    lastlogin: {type: Date, default: Date.now()}    //用户最后登录时间
});

var User = mongoose.model("Users", UserSchema, 'userinfo');
