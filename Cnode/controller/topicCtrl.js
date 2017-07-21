var topicModel=require("../model/topicModel.js");
var replyModel=require("../model/replyModel.js");
var getT=require("../config/langlangAgo.js");
// console.log(getT);
// console.log(getT(1499850505671));
var Eventproxy=require("eventproxy");
var ep=new Eventproxy();
// console.log(ep);
// EventProxy { _callbacks: {}, _fired: {} }

var obj={};
obj.create=function(req,res){
	res.render('home/topic')
};
obj.docreate=function(req,res){
	var con={
 		title:req.body.title,
 		content:req.body.content,
 		uid:req.session.user._id
 	};
 	topicModel.create(con,function(err,info){
 		if (err) {console.log(err);return;};
		res.redirect('/topic/show/'+info._id);
 	});
};
obj.show=function(req,res){
 	var con1={
 		_id:req.params._id
 	};
  
 	var con2={
 		tid:req.params._id
 	};
  ep.all("topicData","replyData","niuniu",function(topicData,replyData){
      res.render("home/show",{topicData:topicData,replyData:replyData});
  });
 	topicModel.find(con1).populate("uid",{uname:1,gold:1,mark:1,userpic:1}).exec(function(err,topicData){
      console.log(topicData)
 	    ep.emit("topicData",topicData);
 	});
  replyModel.find(con2).populate("uid",{uname:1,userpic:1}).exec(function(err,replyData){
      ep.emit("replyData",replyData);
  });
  topicModel.update(con1,{$inc:{viewNum:1}},function(err){
      ep.emit("niuniu");
  });
};
obj.reply=function(req,res){
	
 var con={
  _id:req.body.tid
 };

 topicModel.findOne(con,{reply:1,reTime:1},function(err,rel){
  // console.log(rel.reTime)
    var data={
      uid:req.session.user._id,
      tid:req.body.tid,
      content:req.body.content,
      lou:rel.reply.length+1,
      times:getT(rel.reTime)
    };
   // req.session.time=getT;
    replyModel.create(data,function(err,info){
        // console.log(info);
        var newTopic={
          $push:{reply:info._id},
          lastTime:new Date(),
          lastUser:req.session.user._id
        };
          topicModel.update(con,newTopic,function(err){
            if (err) {console.log(err);return;};
            res.redirect("back");
          });
    })
 })
    
  	
}
module.exports=obj;
