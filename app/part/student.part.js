/**
 * Created by 橘子哥 on 2016/5/20.
 */
var mongoose = require("mongoose");
var StudentInfo = mongoose.model('Student');
var Error = require('../common/error.server.js');

module.exports = {

    getStudentInfoFromArray: function (req, res, next) {
        //标示已经签到的学生列表，字符串类型，用','隔开
        //解析出学生列表
        var students = req.body.students;
        var studentArray = students.split(',');
        StudentInfo.find({number: {$in: studentArray}},
            function (err, stu) {
                if (err) {
                    console.log(err);
                    res.status(200).json(Error.serverError());
                } else {
                    req.students = stu;
                    next();
                }
            });
    },

    existStudentAndReturn: function (req, res, next) {

        StudentInfo.findOne({number: req.body.number},
            function (err, sutdent) {
                if (err) {
                    console.log(err);
                    res.status(200).json(Error.serverError());
                } else {
                    if (sutdent) {
                        req.student = sutdent;
                        next();
                    } else {
                        res.status(200).json(Error.studentIsNotExist());
                    }
                }
            });
    },

    existStudent: function (req, res, next) {
        StudentInfo.findOne({number: req.body.number},
            function (err, student) {
                if (err) {
                    console.log(err);
                    res.statue(200).json(Error.serverError());
                } else {
                    if (student) {
                        res.status(200).json(Error.studentIsExist());
                    } else {
                        next();
                    }
                }
            });
    },
    createStudent: function (req, res, next) {

        var newStudent = new StudentInfo({
            number: req.body.number,
            name: req.body.name,
            grade: req.body.grade,
            college: req.body.college,
            photo: 'picture/' + req.body.number + '.jpg'
        });

        newStudent.save(function (err) {
            if (err) {
                console.log(err);
                res.statue(200).json(Error.serverError());
            } else {
                //照片路径为 根目录/picture/学号.jpg
                next();
            }
        });
    }


}