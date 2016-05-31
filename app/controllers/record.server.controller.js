/**
 * Created by 橘子哥 on 2016/5/16.
 * 数据处理API控制器
 */
var mongoose = require("mongoose");
var Record = mongoose.model("Record");
var ClassInfo = mongoose.model('ClassInfo');
var CommonRes = require("../common/response.server.js");

module.exports = {

    // 处理数据信息(重构完成)
    handleRecord: function (req, res, next) {
        var SuccessRes = new CommonRes();
        res.status(200).json(SuccessRes);
    },
    //获取签到数据
    getRecord: function (req, res, next) {
        var SuccessRes = new CommonRes();
        SuccessRes.data = req.records;
        res.status(200).json(SuccessRes);
    }

}