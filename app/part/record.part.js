/**
 * Created by 橘子哥 on 2016/5/20.
 */
var mongoose = require("mongoose");
var Record = mongoose.model("Record");
var Error = require('../common/error.server.js');

module.exports = {

    //判断记录是否已经存在
    recordExist: function (req, res, next) {
        Record.findOne({account: req.body.account, classid: req.body.classid},
            function (err, record) {
                if (err) {
                    console.log(err);
                    res.status(200).json(Error.serverError());
                } else {
                    if (record) {
                        res.status(200).json(Error.recordIsExist());
                    } else {
                        next();
                    }
                }
            });
    },
    /**
     * 保存Record
     * @param req
     * @param res
     * @param next
     */
    saveRecord: function (req, res, next) {
        var newRecord = new Record();
        newRecord.account = req.body.account;
        newRecord.classid = req.body.classid;
        newRecord.classinfo = req.classinfo;
        newRecord.date = Date.now();
        newRecord.students = req.students;
        newRecord.count = req.students.length;
        newRecord.totalcount = req.classinfo.count;
        newRecord.save(function (err) {
            if (err) {
                console.log(err);
                res.status(200).json(Error.serverError());
            } else {
                next();
            }
        });
    },
    /**
     * 获取一个课程的所有Record
     * @param req
     * @param res
     * @param next
     */
    getRecordOfClass: function (req, res, next) {
        Record.find({classid: req.params.classid},
            function (err, records) {
                if (err) {
                    console.log(err);
                    res.status(200).json(Error.serverError());
                } else {
                    req.records = records;
                    next();
                }
            })
            .limit(parseInt(req.params.limit))
            .sort({date: -1});
    }
}
