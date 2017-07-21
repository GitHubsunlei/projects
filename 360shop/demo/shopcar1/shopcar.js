// 获取元素,全选，反选，不选
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var check = document.getElementsByClassName('check');
var allNum = document.getElementsByClassName('allNum')[0];
var total = document.getElementsByClassName('total')[0];
btn1.onclick = function() {
    for (var i = 0; i < check.length; i++) {
        check[i].checked = true;
    }
    if (allNum.innerHTML == 2) {
        return false;
    }
    allNum.innerHTML = parseFloat(allNum.innerHTML) + 2;
    total.innerHTML = 1748;
}
btn2.onclick = function() {
    for (var i = 0; i < check.length; i++) {
        check[i].checked = false;
    }
    if (allNum.innerHTML == 0) {
        return false;
    }
    allNum.innerHTML = parseFloat(allNum.innerHTML) - 2;
    total.innerHTML = 0;
}
btn3.onclick = function() {
        for (var i = 0; i < check.length; i++) {
            check[i].checked = !check[i].checked;
        }
    }
$(function() {

	// 小计
	function xj(o) {
		var price = parseFloat($(o).closest('.tbody_num').prev().children().html().slice(1));
		var shuLiang = parseInt($(o).siblings('input').val());
		return price * shuLiang;
	}

	// 总计
	function totalPrice() {
		var totalPrice = 0;
		$('.tbody_count').each(function() {
			totalPrice += parseFloat($(this).find('i').html());
		});
		return totalPrice;
	}



    // 节点操作，删除
    // 第一种方法
    /*$('.del').click(function(){
    	$(this).parents('.tbody_content').remove();
    })*/

    // 第二种方法
    $(document).on('click', '.del', function() {
        $(this).parents('.tbody_content').stop().slideUp(function() {
            $(this).hide();
        })
    });


    // 添加商品
    $('#btn4').click(function() {
        $('.del').parents('.tbody_content').stop().slideDown(function() {
            $(this).show();
        });
    });
    // 添加商品1 克隆
     $('#btn5').click(function() {
       var newElement=$('.tbody_content1').clone(true).removeClass('tbody_content1');
       $('#tbody').append(newElement);
    });


    // 数量
    $('.tbody_num').each(function() {
        $(this).children('a:first').click(function(event) {
            var num = $(this).next().val();
            if (num<=1) {
            	return false;
            }
            $(this).next().val(--num);
            $(this).closest('.tbody_num').next().children('strong').children('i').html(xj(this));
            $('.total').html(totalPrice());
        });

        $(this).children('a:last').click(function(event) {
            var num = $(this).prev().val();
            $(this).prev().val(++num);
            $(this).closest('.tbody_num').next().children('strong').children('i').html(xj(this));
            $('.total').html(totalPrice());

        });
    });
    // 选项卡 好评，中评，差评。
    $('#titl>a').click(function(){
    	$('#titl').nextAll().eq($(this).index()).show().siblings('div').hide();
    });
});
