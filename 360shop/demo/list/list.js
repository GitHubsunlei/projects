// 设置导航栏的字体变色
$(function() {
	$('#nav_body>a').mouseover(function () {
		$(this).css('color','#23AC38').mouseout(function () {
			$(this).css('color','')
		});
	});
	// 设置购物车部分
	$('#shopcar').mouseover(function () {
		$('#car').css({
			'borderBottom':'1px solid #fff',
			'background':'#fff'
		});
		$('#shop').css('display','block');
		$('#car>a').css('color','green');
	}).mouseout(function () {
		$('#car').css({
			'border':'1px solid #ccc',
			'background':''
		});
		$('#shop').css('display','none');
		$('#car a').css('color','#363636');
	});
	// 设置classify的部分
	$('#classify>span,a').mouseover(function(){
		$(this).css('color','#23AC38')
	}).mouseout(function(){
		$(this).css('color','')
	});
	// 设置class为brand的部分
	$('.brand_right>a').mouseover(function(){
		$(this).css('color','#23AC38')
	}).mouseout(function(){
		$(this).css('color','')
	});
	$('.sort_right>a,label').mouseover(function(){
		$(this).css('color','#23AC38')
	}).mouseout(function(){
		$(this).css('color','')
	});
})
// 设置搜索框部分
// 获取元素
var search=document.getElementById('search');
var input=search.children[0];
input.onclick=function () {
	this.value='';
}
input.onblur=function () {
	this.value='儿童手表 360新品';
}
// 搜索栏结束

// 设置主题部分
$(function() {
	$('.firstchild').mouseover(function(){
		$(this).css({'border':'1px solid #FC0D1B'}).find('.buybox').show();
		$('.buybox>a').css('color','#FC0D1B');
	}).mouseout(function(){
		$(this).css({'border':''}).find('.buybox').hide();
	});

});
$(function() {
	$('#duoxuan').click(function(){
		if (this.checked) {
			$('.father').css('display','none');
		}else{
			$('.father').css('display','block');
		}
	})
});
$(function() {
	$('.firstchild_pic').mouseover(function(){
		$(this).css({
			
			'transform':'scale(1.2,1.2)',
			'transition':'transform 0.3s linear'
		});
	}).mouseout(function(){
		$(this).css({
			'transition':'all 0.3s ease',
			'transform':'scale(1,1)'
		});
	});
});
	



