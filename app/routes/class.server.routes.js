/**
 * 设置班级模块路由
 * Created by 橘子哥 on 2016/3/3.
 */

var ClassInfoController = require('../controllers/class.server.controller.js');
var ClassInfoPart = require('../part/classinfo.part.js');
var StudentPart = require('../part/student.part.js');

module.exports = function (app) {
    app.route('/class/create')
        .post(ClassInfoPart.countClass,
            ClassInfoPart.createClass,
            ClassInfoController.create);

    app.route('/class/drop')
        .get(ClassInfoController.drop);

    app.route('/class/list/:account')
        .get(ClassInfoPart.getClassList,
            ClassInfoController.listClasses);

    app.route('/class/reset')
        .post(ClassInfoController.reset);

    app.route('/class/students/:account/:classid')
        .get(ClassInfoPart.getClassStudents,
            ClassInfoController.listStudents);

    app.route("/class/addstudent")
        .post(
            ClassInfoPart.existClassAndReturn,
            StudentPart.existStudentAndReturn,
            ClassInfoPart.existStudentInClass,
            ClassInfoPart.youtuGroupHandle,
            ClassInfoPart.createClassStudent,
            ClassInfoPart.addClassStudentCount,
            ClassInfoController.addStudent);
}