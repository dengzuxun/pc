$(".taber_item").on("mouseover", "#tabli", function() {
	$(".showlist").show()
})
$(".taber_item").on("mouseout", "#tabli", function() {
	$(".showlist").hide()
})


// 控制横向滚动条居中
window.onresize = function() {
	var value = (1903 - $(window).width()) / 2;
	$(window).scrollLeft(value)
}
window.onload = function(){
	var value = (1903 - $(window).width()) / 2;
	$(window).scrollLeft(value)
}

function getMousePos(event) {

	var e = event || window.event;

	var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;

	var scrollY = document.documentElement.scrollTop || document.body.scrollTop;

	var x = e.pageX || e.clientX + scrollX;

	var y = e.pageY || e.clientY + scrollY;

	return {
		'x': x,
		'y': y
	};

}



//请求 


// function ajax(url,dataType,type,params,callback) {
// 	$.ajax({
// 		type: type,
// 		url: url,
// 		dataType: dataType,
// 		success: function(data) {
// 			if (data.errorCode == 200) {
// 				callback(data)
// 			}
// 		},
// 		error: function(jqXHR) {
// 			console.log("Error: " + jqXHR.status);
// 		}
// 	});
// }

