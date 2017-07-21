var mongoose=require("../config/config.js");
// console.log(mongoose);
var userSchema=new mongoose.Schema({
	uname:{
		type:String,
		unique:true
	},
	pwdtest:String,
	upwd:String,
	email:{
		type:String,
		unique:true
	},
	mark:{
		type:String,
		default:""
	},
	userpic:{
		// 用户图像
		type:String,
		default:""
	},
	// 金币
	gold:{
		type:Number,
		default:10
	},
	// 注册时间
	regTime:{
		type:Date,
		default:new Date()
	},
	// 权限
	active:{
		type:Number,
		default:0
	}
});
var userModel=mongoose.model("cnode",userSchema,"cnode");
module.exports=userModel;