var multer = require("multer");
var path = require("path");
var timeStamp=require("time-stamp");
var uid=require("uid");

function uploadFile(filename,savepath){
    // 文件上传配置
    var storage = multer.diskStorage({
        // 文件路径
        destination: function(req, file, cb) {
            // cb(null, '文件路径)
            cb(null, savepath)
        },
        //文件名
        filename: function(req, file, cb) {
            // console.log(req.body)
            var ext = path.extname(file.originalname);
            var fileT=timeStamp("YYYYMMDD")+timeStamp("HHmmss")+uid(10)+ext;
            cb(null, fileT);
        }
    });

    function fileFilter(req, file, cb) {
        var allType = ["image/jpeg", "image/png", "imgage/gif"];
        if (allType.indexOf(file.mimetype) == -1) {
            // 错误信息
            var err = new Error();
            err.code = "文件类型不匹配";

            cb(err);
            // 传入错误信息
            cb(null, false);
        } else {
            console.log("上传成功");
            cb(null, true)
        };
    };
    var upload = multer({
        // 存储引擎
        storage: storage,
        //文件过滤
        fileFilter: fileFilter,
        // 个对象，指定一些数据大小的限制
        // 过滤限制
        limits: {
            fileSize: 1024 * 3000
        }
    }).single(filename);
    return upload;
};
module.exports = uploadFile;
