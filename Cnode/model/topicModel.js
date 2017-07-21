var mongoose=require("../config/config");
var topicSchema=new mongoose.Schema({
	title:String,
	content:String,
	uid:{
		type:"ObjectId",
		ref:"cnode"
	},
	viewNum:{
		type:Number,
		default:0
	},
	reTime:{
		type:Date,
		default:Date.now
	},
	reply:[{
		type:"ObjectId",
		ref:"cnode"
	}],
	lastTime:{
		type:Date,
		default:null
	},
	lastUser:{
		type:"ObjectId",
		ref:"cnode",
		default:null
	}
});
var topicModel=mongoose.model("cnode_topic",topicSchema,"cnode_topic");
module.exports=topicModel;