/**
 * Created by 橘子哥 on 2016/5/20.
 * 定义常用的错误信息以及错误代码
 */

module.exports = {

    serverErr: {
        code: -1,
        msg: 'SERVER_ERROR'
    },

    userNull: {
        code: -1000,
        msg: "USER_NULL"
    },

    userExist: {
        code: -1001,
        msg: "USER_EXIST"
    },

    classNull: {
        code: -1100,
        msg: "CLASS_NULL"
    },
    classExist: {
        code: -1101,
        msg: "CLASS_EXIST"
    },


    recordExist: {
        code: -1200,
        msg: 'RECORD_EXIST'
    },
    studentNull: {
        code: -1300,
        msg: "STUDENT_NULL"
    },

    studentExist: {
        code: -1301,
        msg: "STUDENT_EXIST"
    },

    classStudentExist: {
        code: -1400,
        msg: 'CLASS_STUDENT_EXIST'
    }


}
