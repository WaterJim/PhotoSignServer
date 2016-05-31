/**
 * Student 模块路由
 * Created by 橘子哥 on 2016/3/3.
 */
var StudentController = require('../controllers/student.server.controller.js');
var StudentPart = require('../part/student.part.js');
module.exports = function (app) {

    app.route('/student/detail')
        .get(StudentController.detail);

    app.route('/student/drop')
        .get(StudentController.drop);

    app.route('/student/setinfo')
        .post(StudentController.setinfo);

    app.route('/student/create')
        .post(StudentPart.existStudent,
            StudentPart.createStudent,
            StudentController.create);
}
