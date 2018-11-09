 
// 图片上传预览
 var msg = "您可以上传png, jpg, 或者gif格式的图片";
 var filter = {
 "jpeg": "/9j/4",
 "gif": "R0lGOD",
 "png": "iVBORw"
 };
 function preview(file) {
 var containerImg = document.getElementById("containerImg");
 containerImg.innerHTML = "";
 if (window.FileReader) {
 for (var index=0, f; f = file.files[index]; index++) {
 
 var filereader = new FileReader();
 filereader.onload = function (event) {
  var srcpath = event.target.result;
  if (!validateImg(srcpath)) {
  console.log("H5"+msg);
  } else {
  showPreviewImage(srcpath);
  }
 };
 filereader.readAsDataURL(f);
 }
 } else {
 if (!/\.jpg$|\.png$|\.gif$/i.test(file.value)) {
 console.log("原生"+msg);
 } else {
 showPreviewImage(file.value);
 }
 }
 }
 
 function validateImg(data) {
 console.log(data);
 var pos = data.indexOf(",") + 1;
 for (var e in filter) {
 if (data.indexOf(filter[e]) === pos) {
 return e;
 }
 }
 return null;
 }
 
 function showPreviewImage(src) {
 console.log(src);
 
 
 var img = document.createElement('img');
 img.src = src;
 img.style = "width:100px;height:100px;"
 containerImg.appendChild(img);
 }

//点击保存，回到课件信息页面
$(function(){
	$(".save").click(function(){
		window.history.go(-2);
	})
})