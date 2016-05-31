/**
 * Created by 橘子哥 on 2016/5/20.
 */
var mongoose = require("mongoose");
var AppInfo = mongoose.model("AppInfo");

module.exports = {

    getAppInfo: function (req, res, next) {
        AppInfo.findOne()
            .exec(function (err, appinfo) {
                if (err) {
                    console.log(err);
                    res.status(200).json(Error.serverError());
                } else {
                    req.appinfo = appinfo;
                    next();
                }
            });
    }
}
