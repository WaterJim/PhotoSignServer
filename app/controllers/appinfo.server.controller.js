/**
 * Created by 橘子哥 on 2016/3/3.
 * 客户端版本信息控制器
 */
var mongoose = require("mongoose");
var AppInfo = mongoose.model("AppInfo");
var tencentyoutuyun = require('../../tencentyoutuyun/youtu.fr.js');
var config = require('../../config/config.js');
var Error = require('../common/error.server.js');
var CommonRes = require("../common/response.server.js");


module.exports = {

    //检测APP信息接口(重构完成)
    checkAppInfo: function (req, res, next) {
        //生成万象优图人脸识别签名证书
        //初始化API
        tencentyoutuyun.conf.setAppInfo(config.appid, config.secretid, config.secretkey, config.userid, 0);
        var expired = parseInt(Date.now() / 1000) + config.expiredtime;
        var appSign = tencentyoutuyun.auth.appSign(expired, config.userid);
        var appResult = JSON.parse(JSON.stringify(req.appinfo));
        appResult.sign = appSign;
        var SuccessRes = new CommonRes();
        SuccessRes.data = appResult;
        res.status(200).json(SuccessRes);
    },
    //生成签名
    createSign: function (req, res, next) {
        var appid = config.appid;
        var secretId = config.secretid;
        var secretKey = config.secretkey;
        var userid = config.userid;
        tencentyoutuyun.conf.setAppInfo(appid, secretId, secretKey, userid, 0);
        //获取一个AppId下所有group列表
        tencentyoutuyun.youtu.getgroupids(function (data) {
            console.log(data);
            res.json(data);
        });
        //获取一个组Group中所有person列表
        //tencentyoutuyun.youtu.getpersonIds(group_id, function (data) {
        //    console.log(data);
        //});
    },
    delPerson: function (req, res, next) {
        var appid = config.appid;
        var secretId = config.secretid;
        var secretKey = config.secretkey;
        var userid = config.userid;
        tencentyoutuyun.conf.setAppInfo(appid, secretId, secretKey, userid, 0);
        //获取一个AppId下所有group列表
        tencentyoutuyun.youtu.delperson(req.params.account, function (data) {
            console.log(data);
            res.json(data);
        });
        //获取一个组Group中所有person列表
        //tencentyoutuyun.youtu.getpersonIds(group_id, function (data) {
        //    console.log(data);
        //});
    },

    groupPerson: function (req, res, next) {
        var appid = config.appid;
        var secretId = config.secretid;
        var secretKey = config.secretkey;
        var userid = config.userid;
        tencentyoutuyun.conf.setAppInfo(appid, secretId, secretKey, userid, 0);
        //获取一个组Group中所有person列表
        tencentyoutuyun.youtu.getpersonids(req.params.number, function (data) {
            console.log(data);
            res.json(data);
        });
    }

};