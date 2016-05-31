/**
 * studentinfo Colletcion 模型
 * Created by 橘子哥 on 2016/3/3.
 */
var mongoose = require('mongoose');
var moment = require('moment');
var StudentSchema = new mongoose.Schema({

    number: {type: String, default: "0000000000"},  //学生学号
    name: {type: String, default: '陈明填'}, //学生名称
    grade: {type: String, default: "12级软件四班"}, //学生年级
    college: {type: String, default: "计算机学院"},  //专业
    createdata: {type: Date, default: Date.now()}, //添加日期
    modifydata: {type: Date, default: Date.now()}, //最后修改日期
    photo: {type: String, default: "a.jpg"}// 照片路径
});

var Student = mongoose.model(
    "Student",
    StudentSchema,
    'studentinfo');