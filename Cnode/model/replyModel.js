var mongoose=require("../config/config.js");
var replySchema=new mongoose.Schema({
	// 回复内容
	content:String,
	// 当前登陆用户Id
	uid:{
		type:"ObjectId",
		ref:"cnode"
	},
	// 当前话题ID
	tid:{
		type:"ObjectId",
		ref:"cnode_topic"
	},
	lou:Number,
	reTime:{
		type:Date,
		default:Date.now
	}
});
var replyModel=mongoose.model("cnode_reply",replySchema,"cnode_reply");
module.exports=replyModel;