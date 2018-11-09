//点击左侧哪个菜单，哪个菜单变色
$(function(){
				$(".menuLeft div").click(function(){
					$(this).addClass('addColor').siblings().removeClass('addColor');
				})
			})

// 根据月份选择课程表
$(function(){
	$("#selectDate").jeDate({
    isinitVal:true,
    festival:true,
    ishmsVal:false,
    // minDate: '2011-06-16 23:59:59',
    format:"YYYY-MM",
    zIndex:3000,
})
})


