// 设置nav部分
// 获取元素
var nav_left=document.getElementById('nav_left');
var nav_right=document.getElementById('nav_right');
var lA=nav_left.children;
var rA=nav_right.children;
// 设置nav_left,nav_right下的a元素的onmouseover事件
// 创建一个鼠标悬浮变色的函数
function bianse(obj){
	for (var i = 0; i < obj.length; i++) {
		obj[i].onmouseover=function () {	
			this.style.color='#23A037';	
		}
		obj[i].onmouseout=function(){
			this.style.color='#BFBFBF';
		}
	}
}
bianse(lA);
bianse(rA);
// 获取搜索框的元素
var txt=document.getElementById('txt');
// console.log(txt);
// 设置搜索框的获取焦点事件
txt.onfocus=function(){
	this.value='';
}
// 失去焦点事件
txt.onblur=function(){
	this.value='360儿童手表';
}
// 设置购物车
// 获取元素
var shopcar=document.getElementById('shopcar');
var shop=document.getElementById('shop');
var car=document.getElementById('car');
var cA=car.children[1];
// console.log(cA);
// 设置shopcar的鼠标悬浮事件
shopcar.onmouseover=function(){
	shop.style.display='block';
	cA.style.color='#23AC38';
	car.style.borderBottom='1px solid #fff';
	car.style.background='#fff';
}
shopcar.onmouseout=function(){
	shop.style.display='none';
	cA.style.color='#483C36';
	car.style.borderBottom='1px solid #ccc';
	car.style.background='#F9F9F9';
}
// 設置id名為手機的手錶懸浮事件
// 獲取元素
var shouji=document.getElementById('shouji');
var ceshi=document.getElementById('ceshi');
var ali=ceshi.children;
var xiala=document.getElementsByClassName('xiala')[0];
// console.log(xiala)

for (var i = 0; i < ali.length; i++) {
	ali[i].setAttribute('index',i);
	ali[i].onmouseover=function(){
		this.removeAttribute('id');
		xiala.style.height='232px';
		xiala.style.transition='height 0.3s linear'
		index=this.getAttribute('index');
		ali[index].setAttribute('id','shouji');
	}
}
for (var i = 0; i < ali.length; i++) {
	ali[i].setAttribute('index',i);
	ali[i].onmouseout=function(){
		xiala.style.height='0px';
		xiala.style.transition='none'
	}
}	
// 设置轮播图事件
// 获取元素
var lunbo=document.getElementById('lunbo');
// console.log(lunbo);
var alis=lunbo.children[0].children;
// console.log(alis)
// 设置自动轮播函数
var index=0;
var run;
function autoRun(){
	// 设置定时器
	if (run) {
		return;
	}
	run=setInterval(function(){
		// 当前图片隐藏
		alis[index].removeAttribute('class');
		alist[index].removeAttribute('class');
		index++;
		if (index==alis.length) {
			index=0;
		}
		// 下一张图片显示
		alis[index].setAttribute('class','active');
		alist[index].setAttribute('class','listcir');
	},2000);
		
}
// 调用函数
autoRun();
// 设置鼠标的悬浮事件
lunbo.onmouseover=function(){
	clearInterval(run);
	run=undefined;
}
lunbo.onmouseout=function(){
	autoRun();
}
// 设置左右箭头
// 获取左右箭头的元素
var leftarrow=document.getElementById('leftarrow');
var rightarrow=document.getElementById('rightarrow');
leftarrow.onmouseover=function(){
	this.style.background='rgba(0,0,0,0.6)';
}
leftarrow.onmouseout=function(){
	this.style.background='none';
}
rightarrow.onmouseover=function(){
	this.style.background='rgba(0,0,0,0.6)';
}
rightarrow.onmouseout=function(){
	this.style.background='none';
}
// 设置左右箭头的单机事件
leftarrow.onclick=function(){
	alis[index].removeAttribute('class');
	alist[index].removeAttribute('class');
	index--;
	if (index<0) {
		index=alis.length-1;
	}
	alis[index].setAttribute('class','active');
	alist[index].setAttribute('class','listcir');
}
rightarrow.onclick=function(){
	alis[index].removeAttribute('class');
	alist[index].removeAttribute('class');
	index++;
	if (index>alis.length-1) {
		index=0;
	}
	alis[index].setAttribute('class','active');
	alist[index].setAttribute('class','listcir');
}
// 设置下面的圆
// 获取元素
var circle=document.getElementById('circle');
var alist=circle.children[0].children;
// console.log(alist);
// 遍历所有的li
for (var i = 0; i < alist.length; i++) {
	alist[i].setAttribute('num',i);
	// 圆的单击事件
	alist[i].onclick=function(){
		alis[index].removeAttribute('class');
		alist[index].removeAttribute('class');
		// 获取当前的索引值
		index=this.getAttribute('num');
		alis[index].setAttribute('class','active');
		alist[index].setAttribute('class','listcir');
	}
}
// 轮播图结束。
// 二级菜单
// 获取元素
var all_menu=document.getElementById('all_menu');
var xianshi2=document.getElementsByClassName('xianshi2');
var allList=all_menu.children[0].children;
// console.log(xianshi)
// 遍历所有的li
for (var i = 0; i < allList.length; i++) {
	allList[i].setAttribute('date',i);
	allList[i].onmouseover=function(){
		date=this.getAttribute('date');
		// console.log(date);
		xianshi2[date].style.display='block';
	}
	allList[i].onmouseout=function(){
		date=this.getAttribute('date');
		// console.log(date);
		xianshi2[date].style.display='none';
	}
}
// 设置轮播图下面的图片
// 获取元素
var gods=document.getElementById('gods');
var glis=gods.children[0].children;
// console.log(glis);
// 创建一个鼠标悬浮的时候出现背影
function beiying(obj){
	for (var i = 0; i < obj.length; i++) {
		obj[i].onmouseover=function(){
			this.style.boxShadow='1px 1px 2px 2px #ddd';
		}
		obj[i].onmouseout=function(){
			this.style.boxShadow='none';
		}

	}
}
// 调用函数
beiying(glis)
// 360wifi部分
// 获取元素
var wifi=document.getElementById('wifi');
var wlis=wifi.children[0].children;
// 调用beiying这个函数
beiying(wlis);
// 360随身wifi部分结束
// 360手机部分开始
// 获取元素
var phone_left_top=document.getElementsByClassName('phone_left_top');
var phone_left_down=document.getElementsByClassName('phone_left_down');
// console.log(phone_left_top)
// 设置一个鼠标悬浮朦胧色的函数
function menglong(obj){
	for (var i = 0; i <obj.length; i++) {
		obj[i].onmouseover=function(){
			this.style.opacity='0.8';
		}
		obj[i].onmouseout=function(){
			this.style.opacity='1';
		}
	}	
}
menglong(phone_left_top);
menglong(phone_left_down);
// 设置phone_mid的部分
// 获取元素
var xiongdi=document.getElementsByClassName('xiongdi');
// var adiv=xiongdi[0].nextElementSibling;
// console.log(adiv);
// console.log(xiongdi);
// 设置一个图片移动的函数

for (var i = 0; i < xiongdi.length; i++) {
	xiongdi[i].nextElementSibling.onmouseover=function(){
		this.style.transition='all 0.3s linear';
		this.style.transform='scale(1.02,1.02)';
	}
	xiongdi[i].nextElementSibling.onmouseout=function(){
		this.style.transition='all 0.3s linear';
		this.style.transform='scale(1,1)';
	}
}
// 设置图片移动结束
// 设置文档中的更多
$(function() {
	$('.more').mouseover(function(){
		$(this).css('color','#E04324');
	})
	$('.more').mouseout(function(){
		$(this).css('color','#8C8C8C');
	})
});
// 设置文档中的hot_left部分
$(function() {
	$('.hot_left>img').mouseover(function(){
		$(this).css({
			'transition':'transform .3s linear',
			'transform':'translate(-3px)',
		});
	});
	$('.hot_left>img').mouseout(function(){
		$(this).css({
			'transition':'transform .3s linear',
			'transform':'translate(0px)'
		});
	});
});
// 设置右侧导航栏部分
$(function() {
	$('#right_nav>ul>li').eq(0).mouseover(function(){
		$(this).html('微信关注');
		$(this).css({'background':'#848484','color':'#F9F9F9'}),
		$('.weixin').css('display','block');
	});	
	$('#right_nav>ul>li').eq(0).mouseout(function(){
		$(this).html('');
		$(this).css('background',''),
		$('.weixin').css('display','none');
	});
	$('#right_nav>ul>li').eq(1).mouseover(function(){
		$(this).html('手机商城');
		$(this).css({'background':'#848484','color':'#F9F9F9'});
		$('.shangcheng').css('display','block');
	});	
	$('#right_nav>ul>li').eq(1).mouseout(function(){
		$(this).html('');
		$(this).css('background','');
		$('.shangcheng').css('display','none');
	});
	$('#right_nav>ul>li').eq(2).mouseover(function(){
		$(this).html('返回顶部');
		$(this).css({'background':'#848484','color':'#F9F9F9'});
	});	
	$('#right_nav>ul>li').eq(2).mouseout(function(){
		$(this).html('');
		$(this).css('background','');
	});
});
/*设置z左侧导航部分（电梯）*/
$(function() {
	/*设置电梯位于中间位置
	获取可视窗口的高度*/
	var ch=$(window).height();
	// 获取1f相对于文档的高度
	// 设置窗口的滚动函数
	var dh0=$('#phone').offset().top;
	var dh1=$('#phone1').offset().top;
	var dh2=$('#phone2').offset().top;
	var dh3=$('#phone3').offset().top;
	var dh4=$('#phone4').offset().top;
	var dh5=$('#phone5').offset().top;	
	function onScroll() {
		// 创建滚动事件
		// console.log(dh);
		// 当一楼的标题位于中间时，让左侧导航显示
		var st=$(this).scrollTop();
		// console.log(st);
		var cha0=dh0-st;
		var cha1=dh1-st;
		var cha2=dh2-st;
		var cha3=dh3-st;
		var cha4=dh4-st;
		var cha5=dh5-st;
		if (cha0<=ch/2) {
			$('#left_nav').stop().fadeIn();
			$('#left_nav li').eq(0).addClass('curr').siblings().removeClass('curr');
		}else{
			$('#left_nav').stop().fadeOut();
		}
		if (cha1<=ch/2) {
			$('#left_nav li').eq(1).addClass('curr').siblings().removeClass('curr');
		}
		if (cha2<=ch/2) {
			$('#left_nav li').eq(2).addClass('curr').siblings().removeClass('curr');
		}
		if (cha3<=ch/2) {
			$('#left_nav li').eq(3).addClass('curr').siblings().removeClass('curr');
		}
		if (cha4<=ch/2) {
			$('#left_nav li').eq(4).addClass('curr').siblings().removeClass('curr');
		}
		if (cha5<=ch/2) {
			$('#left_nav li').eq(5).addClass('curr').siblings().removeClass('curr');
		}
	}
	$(window).scroll(onScroll);
	// 设置楼层的单击事件
	$('#left_nav li').click(function(){
		// 接触滚动函数的捆绑
		$(window).off('scroll');
		// 排他思想
		$(this).addClass('curr').siblings().removeClass('curr');
		if($(this).index()==0){
			$('html,body').stop().animate({
				'scrollTop':dh0
			},800,function(){
				$(window).scroll(onScroll);
			});
		}
		if($(this).index()==1){
			$('html,body').stop().animate({
				'scrollTop':dh1
			},800,function(){
				$(window).scroll(onScroll);
			});
		}
		if($(this).index()==2){
			$('html,body').stop().animate({
				'scrollTop':dh2
			},800,function(){
				$(window).scroll(onScroll);
			});
		}
		if($(this).index()==3){
			$('html,body').stop().animate({
				'scrollTop':dh3
			},800,function(){
				$(window).scroll(onScroll);
			});
		}
		if($(this).index()==4){
			$('html,body').stop().animate({
				'scrollTop':dh4
			},800,function(){
				$(window).scroll(onScroll);
			});
		}
		if($(this).index()==5){
			$('html,body').stop().animate({
				'scrollTop':dh5
			},800,function(){
				$(window).scroll(onScroll);
			});
		}
	});
});
// 设置广告部分
// 获取元素
var ad=document.getElementsByClassName('ad')[0];
// console.log(ad);
// 设置广告运动的函数
// 设置水平和垂直方向上的步径
var stepX=1;
var stepY=1;
var timer;
function move() {
	// 设置定时器
	if (timer) {
		return;
	}
	timer=setInterval(function(){
		var newLeft=ad.offsetLeft+stepX;
		var newTop=ad.offsetTop+stepY;
		// 可视窗口的宽度
		var cW=document.documentElement.clientWidth;
		var cH=document.documentElement.clientHeight;
		// 赋值操作
		// 条件判断
		if (newLeft<=0) {
			newLeft=0;
			stepX*=-1;
		}
		if (newLeft>=cW-ad.offsetWidth) {
			newLeft=cW-ad.offsetWidth;
			stepX*=-1;
		}
		if (newTop<=0) {
			newTop=0;
			stepY*=-1;
		}
		if (newTop>=cH-ad.offsetHeight) {
			newTop=cH-ad.offsetHeight;
			stepY*=-1;
		}
		ad.style.left=newLeft+'px';
		ad.style.top=newTop+'px';
	},20);	
}
move();	
// 鼠标悬浮的时候，停止运动
ad.onmouseover=function () {
	clearInterval(timer);
	timer=undefined;
}
// 鼠标离开的时候继续运动
ad.onmouseout=function () {
	move();
}
// 设置x的事件
$(function() {
	$('.ad span').click(function(){
		$('.ad').css('display','none')
	});
});