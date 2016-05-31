/**
 * Created by 橘子哥 on 2016/2/26.
 * 定义与用户相关的操作
 */

var mongoose = require("mongoose");
var User = mongoose.model("Users");
var moment = require('moment');
var Error = require('../common/error.server.js');
var CommonRes = require("../common/response.server.js");
//定义相应的用户操作
module.exports = {
    /**
     * 注册用户(重构完成)
     * @param req
     * @param res
     * @param next
     */
    register: function (req, res, next) {
        var SuccessRes = new CommonRes();
        res.status(200).json(SuccessRes);
    },
    /**
     * 用户登录(重构完成)
     * @param req
     * @param res
     * @param next
     */
    login: function (req, res, next) {

        req.session.account = req.body.account;
        var loginResult = JSON.parse(JSON.stringify(req.userinfo));
        loginResult.sessiontoken = req.sessionID;
        loginResult.lastlogin = moment(loginResult.lastlogin).format("YYYY-MM-DD");
        var SuccessRes = new CommonRes();
        SuccessRes.data = loginResult;
        res.status(200).json(SuccessRes);
    },
    //检查用户是否仍在登录有效期内
    checkLogined: function (req, res, next) {

    },
    //设置用户信息(重构完成)
    setinfo: function (req, res, next) {
        var SuccessRes = new CommonRes();
        SuccessRes.data = req.userinfo;
        res.status(200).json(SuccessRes);
    }


};
