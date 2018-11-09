//点击左侧哪个菜单，哪个菜单变色
$(function(){
				$(".menuLeft div").click(function(){
					$(this).addClass('addColor').siblings().removeClass('addColor');
				})
			})

//点击增加课程

$(function(){
	$("#add").click(function(){
		window.location.href="courseEdit.html";
	})
})