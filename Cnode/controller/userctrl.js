var userModel = require("../model/userModel.js");
var nodemailer = require("../config/nodemailer.js");
var fileUpload=require("../config/fileUpload.js");
var resizeImg=require("../config/reset.js");
var path = require("path");
var obj = {};
obj.reg = function(req, res, next) {
    res.render("home/reg");
};
obj.doreg = function(req, res, next) {
    // console.log(req.body);
    var con = {
        uname: req.body.uname
    };
    userModel.findOne(con, function(err, data) {
        if (err) {
            console.log(err);
            return;
        };
        // console.log(data);
        // 如果提交的数据在数据库中能找到，返回后一个对象，如果找不到返回一个null
        if (data) {
            // 设置一次性(刷新即消失)错误信息
            req.flash("errMsg", "用户名重复");
            res.redirect("/users/reg");
            return;
        } else {
            if (req.body.pwdtest == req.body.upwd) {
                userModel.create(req.body, function(err, info) {
                    nodemailer(info.uname, info._id, info.email);
                    res.redirect("/users/active");
                    return;
                });
            } else {
                req.flash("errMsg1", "密码不一致");
                res.redirect("/users/reg");
                return;
            }
        }

    });
};
obj.active = function(req, res, next) {
    res.render("home/active", { info: "验证邮件已经发送" });
};
obj.activeok = function(req, res, next) {
    var con = {
        _id: req.params.id
    };
    // console.log(con)
    userModel.update(con, { $set: { active: 1 } }, function(err, info) {
        if (err) {
            console.log(err);
            return;
        };
    });
    res.redirect("/users/login");
};
obj.login = function(req, res, next) {
    res.render("home/login");
};
obj.dologin = function(req, res, next) {
    var con = {
        uname: req.body.uname
    };
    userModel.findOne(con, function(err, data) {
        if (data) {
            if (req.body.upwd === data.upwd) {
                req.session.user = data;
                // console.log(req.session.user);
                res.redirect("/");
                return;
            } else {
                req.flash("errMsg1", "密码错误");
                res.redirect("/users/login");
                return;
            }
        } else {
            req.flash("errMsg", "账号不存在");
            res.redirect("/users/login");
            return;
        }
        // res.send("ok")
    });
};
obj.reset = function(req, res, next) {
    res.render("home/reset");
};
obj.doreset = function(req, res, next) {
    var con={
        _id:req.session.user._id
    };
    var fileup=fileUpload('pic','public/uploads');
        fileup(req,res,function(err){
           var newData={
                mark:req.body.mark
           };
           if (req.file) {
                resizeImg(req.file.path,req.file.path,120,120,function(err){
                    if (!err) {
                        newData.userpic=req.file.filename;
                        userModel.update(con,newData,function(err){
                            if (!err) {
                               userModel.findOne(con,function(err,data){
                                    req.session.user=data;
                                    res.redirect("back");
                               }); 
                            }
                        })
                    }
                })
           }else{
                userModel.update(con,newData,function(err,data){
                    if (!err) {
                        userModel.find(con,function(err,data){
                            req.session.user=data;
                            res.redirect("back");
                        })
                    }
                })
           }
           });
    };
obj.logout=function(req,res){
    req.session.user=null;
    res.redirect("/");
};
module.exports = obj;
