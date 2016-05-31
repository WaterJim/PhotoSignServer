/**
 * Created by 橘子哥 on 2016/2/25.
 * 生成APP实例
 * 启用相应的中间件并且初始化
 * 返回一个APP实例
 */

var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var MongoStore = require('connect-mongo')(session);
var mongoose = require("mongoose");
var moment = require('moment');

module.exports = function () {

    console.log("init express...creating app module...");
    var app = express();

    //设置要使用的中间件
    app.use(bodyParser.raw());
    app.use(bodyParser.json({
        verify: function (req, res, buf, encoding) {
            req.rawBody = buf;
        }
    }));
    app.use(bodyParser.urlencoded({
        extended: false,
        verify: function (req, res, buf, encoding) {
            req.rawBody = buf;
        }
    }));

    app.use(function (req, res, next) {
        console.log('-------------------Visit Start-------------------');
        console.log('Time:', moment().format());
        console.log('Route:', req.originalUrl);
        console.log('-------------------Visit End-------------------');
        next()
    });
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({mongooseConnection: mongoose.connection})
    }));

    //设置相应模型接口的路由
    //之后都在此处添加新的路由文件
    require("../app/routes/user.server.routes.js")(app);
    require("../app/routes/appinfo.server.routes.js")(app);
    require("../app/routes/class.server.routes.js")(app);
    require("../app/routes/studnet.server.routes.js")(app);
    require("../app/routes/record.server.routes.js")(app);


    // 处理当请求接口不存在的情况
    app.use(function (req, res, next) {
        res.status(404);
        //防止重复返回
        try {
            return res.json("Not Found...");
        } catch (exception) {
            console.log("404 set header after sent...");
        }
    });

    //处理请求时系统错误
    app.use(function (err, req, res, next) {
        if (!err) {
            next();
        }
        res.status(err.status || 500);
        try {
            return res.json(err.message || "server error...");
        } catch (exception) {
            console.log("500 set header after sent...");
        }
    });

    return app;
};
