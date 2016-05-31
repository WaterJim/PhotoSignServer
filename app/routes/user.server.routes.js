/**
 * Created by 橘子哥 on 2016/2/26.
 * 定义用户操作相关的路由配置
 */

var UserController = require("../controllers/user.server.controller.js");
var UserPart = require("../part/userinfo.part.js");
module.exports = function (app) {
    app.route("/user/register")
        .post(UserPart.existUser,
            UserPart.createUser,
            UserController.register);

    app.route("/user/login")
        .post(UserPart.existUserAndReturn,
            UserController.login);

    app.route("/user/update")
        .post(UserPart.updateUserInfo,
            UserPart.existUserAndReturn,
            UserController.setinfo);

}
