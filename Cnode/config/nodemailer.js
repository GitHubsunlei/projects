var nodemailer=require("nodemailer");
// 定义传输协议
function set(username,userid,useremail){
	var transport=nodemailer.createTransport({
		// 固定写法
		host:"smtp.qq.com",
		// 授权验证
		auth:{
			// 获取授权码的邮箱
			user:"879322629@qq.com",
			pass:"zfvxbbxmhzeubeaj"
		}
	});
	var mailOptions={
		// 发件人
		from:"xdl_cnode<879322629@qq.com>",
		// 用户注册邮箱
		to:"879322629@qq.com",
		// 主题
		subject:"Cnode邮箱验证",
		html:"欢迎"+username+"注册Cnode"+"<a href='http://localhost/users/activeok/"+userid+"'>点击跳转</a>"
	};
	transport.sendMail(mailOptions,function(err,info){
		console.log(err);
		console.log(info);
	});
}
module.exports=set;