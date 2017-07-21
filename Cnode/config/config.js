var mongoose=require("mongoose");
var url="mongodb://localhost:27017/cnode";
mongoose.connect(url,function(err){
	if (err) {console.log("数据库连接失败");return;}
});
module.exports=mongoose;