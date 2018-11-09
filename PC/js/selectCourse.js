
//固定table表头
// window.onload = function(){
// 		  var tableCont = document.querySelector('#table-cont');
// 		  /**
// 		   * scroll handle
// 		   * @param {event} e -- scroll event
// 		   */
// 		  function scrollHandle (e){
// 		    // console.log(this);
// 		    var scrollTop = this.scrollTop;
// 		    this.querySelector('thead').style.transform = 'translateY(' + scrollTop + 'px)';
// 		  }

// 		  tableCont.addEventListener('scroll',scrollHandle);
//   }

 //点击某个课件，跳转到对应的页面
 $(function(){
 	$("tbody tr").click(function(){
 		$(this).css("background","blue");
 		window.location.href="selectCourseDetail.html";
 	})
 })