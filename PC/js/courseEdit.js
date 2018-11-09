// 选择开始日期和结束日期
$(function(){
	$("#selectStartDate").jeDate({
   			 format:"YYYY-MM-DD hh:mm",
	})

	$("#selectEndDate").jeDate({
   			 format:"YYYY-MM-DD hh:mm",
	})	

 
})
//点击保存，回到上一页
$(function(){
	$("#goCourse").click(function(){
		window.history.go(-1);
	})
})