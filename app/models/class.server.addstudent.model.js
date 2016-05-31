/**
 * Created by 橘子哥 on 2016/5/12.
 */

var mongoose = require('mongoose');

var ClassAddStudentSchema = new mongoose.Schema({
    account: {type: String, default: '000000'}, //用户ID
    classid: {type: Number, default: 1}, //班级id
    number: {type: String, default: '0000000000'},//学生学号
    date: {type: Date, default: Date.now()}, //添加日期
    number_oi: {type: mongoose.Schema.Types.ObjectId, ref: 'Student'}   //学生信息关联键
});

var ClassInfo = mongoose.model('ClassAddStudent', ClassAddStudentSchema, 'classaddstudent');
