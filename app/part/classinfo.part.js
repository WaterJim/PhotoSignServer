/**
 * Created by 橘子哥 on 2016/5/19.
 * 处理ClassInfo模型操作中间件
 */
var mongoose = require("mongoose");
var ClassInfo = mongoose.model("ClassInfo");
var ClassStudent = mongoose.model("ClassAddStudent");
var Error = require('../common/error.server.js');
var tencentyoutuyun = require('../../tencentyoutuyun/youtu.fr.js');
var config = require('../../config/config.js');

module.exports = {

    /**
     * 检查是否存在某班级
     */
    existClass: function (req, res, next) {
        ClassInfo.findOne({classid: req.body.classid},
            function (err, classInfo) {
                if (err) {
                    res.status(200).json(Error.serverError());
                } else {
                    if (classInfo) {
                        res.status(200).json(Error.classIsExist());
                    } else {
                        next();
                    }
                }
            });
    },

    existClassAndReturn: function (req, res, next) {
        ClassInfo.findOne({classid: req.body.classid},
            function (err, classInfo) {
                if (err) {
                    res.status(200).json(Error.serverError());
                } else {
                    if (classInfo) {
                        req.classinfo = classInfo;
                        next();
                    } else {
                        res.status(200).json(Error.classIsNotExist());
                    }
                }
            });
    },

    /**
     * 创建课程记录
     * @param req
     * @param res
     * @param next
     */
    createClass: function (req, res, next) {

        var newClass = new ClassInfo({
            name: req.body.name,
            week: req.body.week,
            createtime: Date.now(),
            lastedittime: Date.now(),
            uploadtimes: 0,
            lastuploadtime: Date.now(),
            useraccount: req.body.account,
            classid: req.count+1
        });
        newClass.save(function (err) {
            if (err) {
                console.log(err);
                res.status(200).json(Error.serverError());
            } else {
                next();
            }
        });
    },
    /**
     * 获取课程数
     * @param req
     * @param res
     * @param next
     */
    countClass: function (req, res, next) {
        ClassInfo.count(function (err, count) {
            if (err) {
                console.log(err);
                res.status(200).json(Error.serverError());
            } else {
                req.count = count;
                next();
            }
        });
    },

    getClassList: function (req, res, next) {
        ClassInfo.find({useraccount: req.params.account},
            function (err, classList) {
                if (err) {
                    console.log(err);
                    res.status(200).json(Error.serverError());
                } else {
                    req.classinfo = classList;
                    next();
                }
            });
    },

    getClassStudents: function (req, res, next) {
        ClassStudent.find({
                account: req.params.account,
                classid: req.params.classid
            },
            function (err, students) {
                if (err) {
                    console.log(err);
                    res.status(200).json(Error.serverError());
                } else {
                    req.students = students;
                    next();
                }
            }).populate('number_oi')
            .field;
    },

    /**
     * 判断学生是否已经存在于某个班级
     * @param req
     * @param res
     * @param next
     */
    existStudentInClass: function (req, res, next) {
        ClassStudent.findOne({number: req.body.number, classid: req.body.classid},
            function (err, cs) {
                if (err) {
                    console.log(err);
                    res.status(200).json(Error.serverError());
                } else {
                    if (cs) {
                        res.status(200).json(Error.classStudentIsExist());
                    } else {
                        next();
                    }
                }
            });
    },

    youtuGroupHandle: function (req, res, next) {
        //初始化API
        tencentyoutuyun.conf.setAppInfo(config.appid, config.secretid, config.secretkey, config.userid, 0);
        tencentyoutuyun.youtu.getinfo(req.body.number,
            function (info) {
                console.log('-----------------------getinfo-------------------------');
                console.log(info);
                if (info.data.errorcode == -1303) {
                    //学生不存在，直接添加个体
                    console.log('-----------------------newperson-------------------------');
                    tencentyoutuyun.youtu.newperson(req.student.photo,
                        req.body.number, req.body.number, ['' + req.body.classid], "student",
                        function (data) {
                            console.log(data);
                        });
                } else {
                    //学生存在，记录所属组，删除学生
                    console.log('-----------------------delperson-------------------------');
                    tencentyoutuyun.youtu.delperson(req.body.number,
                        function (delResult) {
                            console.log(delResult);
                            var group = info.data.group_ids;
                            group.push(req.body.classid);
                            //重新添加学生
                            console.log('-----------------------newperson-------------------------');
                            tencentyoutuyun.youtu.newperson(req.student.photo,
                                req.body.number, req.body.number, group, "student",
                                function (data) {
                                    console.log(data);
                                });
                        });
                }
            }
        );
        next();
    },
    /**
     * 创建课程学生的对应关系
     * @param req
     * @param res
     * @param next
     */
    createClassStudent: function (req, res, next) {
        var classStudent = new ClassStudent({
            account: req.body.account,
            classid: req.body.classid,
            number: req.body.number,
            date: Date.now(),
            number_oi: req.student
        });
        classStudent.save(function (err) {
            if (err) {
                console.log(err);
                res.status(200).json(Error.serverError());
            } else {
                next();
            }
        });
    },

    addClassStudentCount: function (req, res, next) {
        ClassInfo.findOneAndUpdate({classid: req.body.classid},
            {count: req.classinfo.count + 1},
            function (err) {
                if (err) {
                    res.status(200).json(Error.serverError());
                } else {
                    next();
                }
            });
    }


}
