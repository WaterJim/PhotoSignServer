/**
 * Created by 橘子哥 on 2016/5/19.
 * 处理UserInfo模型操作中间件
 */
var mongoose = require("mongoose");
var User = mongoose.model("Users");
var Error = require('../common/error.server.js');
module.exports = {

    /**
     * 检查某个用户是否存在
     */
    existUser: function (req, res, next) {
        var user_id = req.body.account;
        User.findOne({account: user_id},
            function (err, result) {
                if (err) {
                    res.status(200).json(Error.serverError());
                }
                if (result) {
                    res.status(200).json(Error.userIsExist());
                } else {
                    next();
                }
            });
    },

    existUserAndReturn: function (req, res, next) {
        User.findOne({account: req.body.account},
            function (err, userinfo) {
                if (err) {
                    res.status(200).json(Error.serverError());
                }
                if (userinfo) {
                    req.userinfo = userinfo;
                    next();
                } else {
                    res.status(200).json(Error.userIsNotExist());
                }
            });
    },

    createUser: function (req, res, next) {
        var registerUser = new User({
            account: req.body.account,
            password: req.body.password,
            email: req.body.email,
            phone: req.body.phone,
        });
        registerUser.save(function (err) {
            if (err) {
                res.status(200).json(Error.serverError());
            } else {
                next();
            }
        });
    },

    updateUserInfo: function (req, res, next) {

        User.findOneAndUpdate({account: req.body.account},
            {nickname: req.body.name, tag: req.body.tag},
            function (err) {
                if (err) {
                    res.status(200).json(Error.serverError());
                } else {
                    next();
                }
            });
    }
}


