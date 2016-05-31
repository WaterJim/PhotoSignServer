/**
 * Created by 橘子哥 on 2016/3/3.
 * 客户端版本信息接口路由
 */
var AppInfoController = require("../controllers/appinfo.server.controller.js");
var AppInfoPart = require('../part/appinfo.part.js');

module.exports = function (app) {
    app.route('/appinfo/')
        .get(AppInfoPart.getAppInfo,
            AppInfoController.checkAppInfo);

    app.route('/appinfo/groups')
        .get(AppInfoController.createSign);

    app.route('/appinfo/delperson/:account')
        .get(AppInfoController.delPerson);

    app.route('/appinfo/groupperson/:number')
        .get(AppInfoController.groupPerson);
}