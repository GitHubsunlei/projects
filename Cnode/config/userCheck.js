function userCheck(req,res,next){
	if(!req.session.user){
		res.redirect("/users/login");
		return;
	};
	next();
};
module.exports=userCheck;