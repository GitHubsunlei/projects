			(function(doc,win){
				// console.log(doc,win);
				var docEle=doc.documentElement;//html

				var run=function(){
					var clientWidth=docEle.clientWidth;//视口宽度的变量
					if(!clientWidth)return;
					docEle.style.fontSize=20/320*clientWidth+"px";
				};
				if(!doc.addEventListener)return;
				// 屏幕方向改变触发
				var resizeEvt='orientationchange' in window?'orientationchange':'resize';
				// window.addEventListener(事件, 函数, false);
				window.addEventListener(resizeEvt, run, false);
				doc.addEventListener("DOMContentLoaded", run,false);


			})(document,window);