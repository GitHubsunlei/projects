var userCheck=require("../config/userCheck.js");
var express=require("express");
var router=express.Router();

var topicCtrl=require("../controller/topicCtrl.js");

router.get("/create",userCheck,topicCtrl.create);
router.post("/docreate",userCheck,topicCtrl.docreate);
router.get("/show/:_id",userCheck,topicCtrl.show);
// 回复话题
router.post("/reply",userCheck,topicCtrl.reply);

module.exports=router;