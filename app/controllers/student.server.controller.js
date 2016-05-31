/**
 * student模块控制器
 * Created by 橘子哥 on 2016/3/3.
 */

var CommonRes = require("../common/response.server.js");

module.exports = {
    //获取某个学生的具体信息
    detail: function (req, res, next) {

    },
    //从某个课程学生列表中去除某名学生
    drop: function (req, res, next) {

    },
    //修改某个学生在某个课程中的信息
    setinfo: function (req, res, next) {

    },
    /**
     * 新增学生信息(重构完成)
     * @param req
     * @param res
     * @param next
     */
    create: function (req, res, next) {
        var SuccessRes = new CommonRes();
        res.status(200).json(SuccessRes);
    }


}