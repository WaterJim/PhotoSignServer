/**
 * Created by 橘子哥 on 2016/3/3.
 */

var mongoose = require('mongoose');

var ClassInfoSchema = new mongoose.Schema({
    name: {type: String, default: '大一高等数学'},
    createtime: {type: Date, default: Date.now()},
    lastedittime: {type: Date, default: Date.now()},
    uploadtimes: {type: Number, default: 0},
    lastuploadtime: {type: Date, default: Date.now()},
    week: {type: String, default: '1'},
    useraccount: {type: String, default: '000000'},
    count: {type: Number, default: 0},//学生人数
    classid: {type: Number, default: 1}
});

var ClassInfo = mongoose.model('ClassInfo', ClassInfoSchema, 'classinfo');