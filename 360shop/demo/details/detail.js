// 获取元素
var show=document.getElementById('show');
var move=document.getElementById('move');
var bigshow=document.getElementById('bigshow');
var smallimg=document.getElementById('smallimg');
var bigimg=document.getElementById('bigimg');
var xiaotu=document.getElementById('xiaotu');
var ali=xiaotu.children[0].children;
// console.log(ali);
// 设置show鼠标的移动事件
show.onmousemove=function (e) {
	// 计算move元素的left值和top值
	var newLeft=e.pageX-show.offsetLeft-move.offsetWidth/2;
	var newTop=e.pageY-show.offsetTop-move.offsetHeight/2;
	// 边界判断
	if (newLeft<=0) {
		newLeft=0;
	}
	if (newLeft>=show.offsetWidth-move.offsetWidth-1) {
		newLeft=show.offsetWidth-move.offsetWidth-1;
	}
	if (newTop<=0) {
		newTop=0;
	}
	if (newTop>=show.offsetHeight-move.offsetHeight-1) {
		newTop=show.offsetHeight-move.offsetHeight-1;
	}
	// 赋值操作
	move.style.left=newLeft+'px';
	move.style.top=newTop+'px';
	// 右侧大图的移动距离
	var newbigLeft=bigimg.offsetWidth*newLeft/smallimg.offsetWidth;
	var newbigTop=bigimg.offsetHeight*newTop/smallimg.offsetHeight;
	// 赋值操作
	bigimg.style.left=-newbigLeft+'px';
	bigimg.style.top=-newbigTop+'px';
}
// 设置鼠标移入移除事件
show.onmouseover=function () {
	move.style.display='block';
	bigshow.style.display='block';
}
show.onmouseout=function () {
	move.style.display='none';
	bigshow.style.display='none';
}
// 遍历小图下的所有的li
for (var i = 0; i < ali.length; i++) {
	ali[i].onclick=function(){
		smallimg.src=this.children[0].src;
		bigimg.src=this.children[0].src;
	}
}
// 设置cate部分
$(function() {
	$('a').click(function(){
		$(this).addClass('liuguang').siblings().removeClass('liuguang');
	});
});
$(function() {
	var res;
	$('.jia').click(function(){
		$('#ttx')[0].value++;
	});
	$('.jian').click(function(){
		res=$('#ttx').val();
		if (res<=1) {
			$('.jian').css('color','#ddd')
			return false;
		}
		$('#ttx')[0].value--;
	});
});
// 设置三级联动
// 获取元素
var pro1=document.getElementById('pro1');
var city=document.getElementById('city');
var county=document.getElementById('county');
// 定义包含地址的数组
// var address={
// 	// 约定0代表所有的省份
// 	'0':{
// 		// 每一个省份都有编号
// 		1:'北京',
// 		2:'河南'
// 	},
// 	// 0,省份编号，表示该省份下所有的市
// 	'0,1':{
// 		3:'朝阳区'
// 	},
// 	'0,2':{
// 		4:'商丘市'
// 	},
// 	'0,1,3':{
// 		5:'回龙观'
// 	},
// 	'0,2,4':{
// 		6:'永城市'
// 	}
// };
// 根据address[0]对应的信息，显示在页面上
var pro1_str='<option value="">请选择</option>';
for(var i in address[0]){
	pro1_str+='<option value="0,'+i+'">'+address[0][i]+'</option>';
}
pro1.innerHTML=pro1_str;
// 设置pro的onchange事件
pro1.onchange=function () {
	// 给市赋初始值
	var city_str='<option value="">请选择</option>';
	// 遍历所有的市
	for(var i in address[this.value]){
		city_str+='<option value="'+this.value+','+i+'">'+address[this.value][i]+'</option>';
	}
	// 赋值操作
	city.innerHTML=city_str;
}
// 设置市的onchange事件
city.onchange=function () {
	// 给县赋初始值
	var county_str='<option value="">请选择</option>';
	// 遍历所有的市
	for(var i in address[this.value]){
		county_str+='<option value="">'+address[this.value][i]+'</option>';
	}
	// 赋值操作
	county.innerHTML=county_str;
}
// 设置吸顶
$(function() {
	// 获取pro距离文档顶部的距离
	var dh=$('.product').offset().top;
	// console.log(dh);
	// 获取滚动条的位置
	var st=$(window).scrollTop();
	// console.log(st);
	// 设置滚动事件函数
	function Scroll(){
		var st=$(window).scrollTop();
		if (st>=dh) {
			$('.product1').css({
				'transition':'all .3s linear',
				'height':'60px'
			});
		}else{
			$('.product1').css({
				'transition':'all .3s linear',
				'height':'0px'
			});
		}
	};	
	$(window).scroll(Scroll);
	// 设置吸顶里文字变色
	$('.pro li').mouseenter(function(){
		$(this).addClass('bianse').siblings().removeClass('bianse');
	});
	// 设置吸顶里单击文字进行跳转
	// 获取相应的相当于文档的高度。
	var dh=$('.product').offset().top;
	// console.log(dh);
	var tu=$('#tupian').offset().top;
	var guige=$('#gTit').offset().top;
	var wenti=$('#qustion').offset().top;
	// console.log(tu);
	// console.log(guige);
	// console.log(wenti);
	$('.product li').eq(0).click(function(){
		// console.log(111)
		$('html,body').animate({
			'scrollTop':dh
		},1000);
	});
	$('.product li').eq(1).click(function(){
		// console.log(222)
		$('html,body').animate({
			'scrollTop':guige
		},1000);
	});
	$('.product li').eq(2).click(function(){
		// console.log(222)
		$('html,body').animate({
			'scrollTop':wenti
		},1000);
	});
	$('.product1 li').eq(0).click(function(){
		// console.log(111)
		$('html,body').animate({
			'scrollTop':dh
		},1000);
	});
	$('.product1 li').eq(1).click(function(){
		// console.log(222)
		$('html,body').animate({
			'scrollTop':guige
		},1000);
	});
	$('.product1 li').eq(2).click(function(){
		// console.log(222)
		$('html,body').animate({
			'scrollTop':wenti
		},1000);
	});
});