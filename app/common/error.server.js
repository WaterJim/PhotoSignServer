/**
 * Created by 橘子哥 on 2016/5/19.
 * 定义常用错误信息
 */

var CommonRes = require("./response.server.js");
var JsonResponse = new CommonRes();
var ErrorMessage = require('../../config/error.message.js');

module.exports = {

    serverError: function () {
        JsonResponse.statuscode = ErrorMessage.serverErr.code;
        JsonResponse.errormsg = ErrorMessage.serverErr.msg
    },

    userIsNotExist: function () {
        JsonResponse.statuscode = ErrorMessage.userNull.code;
        JsonResponse.errormsg = ErrorMessage.userNull.msg;
        return JsonResponse;
    },

    userIsExist: function () {
        JsonResponse.statuscode = ErrorMessage.userExist.code;
        JsonResponse.errormsg = ErrorMessage.userExist.msg;
        return JsonResponse;
    },

    classIsExist: function () {
        JsonResponse.statuscode = ErrorMessage.classExist.code;
        JsonResponse.errormsg = ErrorMessage.classExist.msg;
        return JsonResponse;
    },

    classIsNotExist: function () {
        JsonResponse.statuscode = ErrorMessage.classNull.code;
        JsonResponse.errormsg = ErrorMessage.classNull.msg;
        return JsonResponse;
    },

    recordIsExist: function () {
        JsonResponse.statuscode = ErrorMessage.recordExist.code;
        JsonResponse.errormsg = ErrorMessage.recordExist.msg;
        return JsonResponse;
    },

    studentIsNotExist: function () {
        JsonResponse.statuscode = ErrorMessage.studentNull.code;
        JsonResponse.errormsg = ErrorMessage.studentNull.msg;
        return JsonResponse;
    },

    studentIsExist: function () {
        JsonResponse.statuscode = ErrorMessage.studentExist.code;
        JsonResponse.errormsg = ErrorMessage.studentExist.msg;
        return JsonResponse;
    },

    classStudentIsExist: function () {
        JsonResponse.statuscode = ErrorMessage.classStudentExist.code;
        JsonResponse.errormsg = ErrorMessage.classStudentExist.msg;
        return JsonResponse;
    }


}

