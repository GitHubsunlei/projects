var topicModel=require("../model/topicModel.js");
var replyModel=require("../model/replyModel.js");
var userModel=require("../model/userModel");
var obj={};
obj.index=function(req,res){
	// 第一个参数是条件
	// 第二个参数是控制显示
	// 
	topicModel.find().count(function(err,num){
		var page=req.query.page?req.query.page:1;
		var pageSize=5;
		var pageMax=Math.ceil(num/pageSize);
		if (page<=0) {
			page=1;
		};
		if (page>=pageMax) {
			page=pageMax;
		};
		var pageOffset=(page-1)*pageSize;
		topicModel.find({},{},{
			sort:{
				reTime:-1
			},
			skip:pageOffset,
			limit:pageSize
		}).populate("uid",{userpic:1}).populate("lastUser",{userpic:1}).exec(function(err,data){
			// console.log(data)
			res.render("index",{topicD:data,page:page,pageMax:pageMax});
		});
	});
};
module.exports=obj;