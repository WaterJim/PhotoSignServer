/**
 * Created by 橘子哥 on 2016/5/16.
 * 数据提交 Collection 模型
 */

var mongoose = require("mongoose");
var moment = require('moment');
var RecordSchema = mongoose.Schema({

    account: {type: String, default: '000000'},
    classid: {type: Number, default: 1},
    classinfo: {type: mongoose.Schema.Types.ObjectId, ref: 'ClassInfo'},//课程对象
    students: {type: [mongoose.Schema.Types.ObjectId], ref: 'Student'}, //该记录中签到学生对象
    date: {type: Date, default: Date.now()},//记录日期
    count: {type: Number, default: 0},//记录数量
    totalcount: {type: Number, default: 0}//该记录生成时该班级学生总人数
});

var AppInfo = mongoose.model("Record", RecordSchema, 'record');
