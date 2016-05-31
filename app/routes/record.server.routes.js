/**
 * Created by 橘子哥 on 2016/5/16.
 */
var RecordController = require("../controllers/record.server.controller.js");
var RecordPart = require('../part/record.part.js');
var StudentPart = require('../part/student.part.js');
var ClassInfoPart = require('../part/classinfo.part.js');

module.exports = function (app) {
    app.route('/record/handle')
        .post(RecordPart.recordExist,
            ClassInfoPart.existClassAndReturn,
            StudentPart.getStudentInfoFromArray,
            RecordPart.saveRecord,
            RecordController.handleRecord);

    app.route('/record/class/:classid/:limit')
        .get(RecordPart.getRecordOfClass,
            RecordController.getRecord);
}
