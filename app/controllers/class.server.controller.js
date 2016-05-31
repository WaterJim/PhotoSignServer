/**
 * Created by 橘子哥 on 2016/3/3.
 * 创建课程信息管理控制器
 */
var CommonRes = require("../common/response.server.js");

var moment = require('moment');

module.exports = {
    /**
     * 创建一个班级(完成重构)
     * @param req
     * @param res
     * @param next
     */
    create: function (req, res, next) {
        var SuccessRes = new CommonRes();
        res.status(200).json(SuccessRes);


    },
    //删除一个班级
    drop: function (req, res, next) {
    },
    /**
     * 获取该用户所有创建的班级(完成重构)
     * @param req
     * @param res
     * @param next
     */
    listClasses: function (req, res, next) {
        var SuccessRes = new CommonRes();
        var responseJson = SuccessRes;
        responseJson.data = req.classinfo;
        responseJson.data.createtime = moment(responseJson.data.createtime).format('YYYY-MM-DD');
        res.status(200).json(responseJson);
    },
    /**
     * 获取某个班级的学生列表(重构完成)
     * @param req
     * @param res
     * @param next
     */
    listStudents: function (req, res, next) {
        var SuccessRes = new CommonRes();
        var responseJson = SuccessRes;
        responseJson.data = req.students;
        res.status(200).json(responseJson);

    },
    /**
     * 修改班级信息
     * @param req
     * @param res
     * @param next
     */
    reset: function (req, res, next) {

    },
    /**
     * 添加学生到到课程中(重构完成)
     * @param req
     * @param res
     * @param next
     */
    addStudent: function (req, res, next) {
        var SuccessRes = new CommonRes();
        res.status(200).json(SuccessRes);
    }


};