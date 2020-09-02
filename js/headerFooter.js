$(".taber_item").on("mouseover", "#tabli", function() {
	console.log("aaaa")
	$(".showlist").show()
})
$(".taber_item").on("mouseout", "#tabli", function() {
	$(".showlist").hide()
})




// 工程案例
	var index = 0;
			var imglist = [
				"//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAguLyF2wUoxqW3_gcw7gU4gwQ.png",
				"//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAguLyF2wUo_sHOwQEw7gU4gwQ.png",
				"//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAgu7yF2wUoqMKV-gcw7gU4gwQ.png",
				"//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAgvryF2wUo8YPjoAQw7gU4gwQ.png",
				"//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAgvryF2wUo8rnOsAIw7gU4gwQ.png",
				"//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAgvryF2wUo5ezgigMw7gU4gwQ.png",
			]
			// 鼠标移入小图片事件
			$(".img-list-item li").hover(function() {
				index = $(this).index();
				$(this).find("div").show();
				$(".icon-center img").attr('src', imglist[index]);
			}, function() {
				$(this).find("div").hide();
			})

			$(".J_photoShowPrev").on("click", function() {
				if (index == 0) {
					index = 6
				}
				index--
				$(".icon-center img").attr('src', imglist[index]);
			})

			$(".J_photoShowNext").on("click", function() {
				console.log(index)
				if (index == 6 || index == 5) {
					index = -1
				}
				index++
				$(".icon-center img").attr('src', imglist[index]);
			})
	
			$(".img-share").on({
			    mouseenter:function(){
			       $(".icons1").css({
			       		background: "url(http://2.ss.faisys.com/image/v2/vbg01.png?v=201907171253) no-repeat 0 -180px"
			       	});
			       	$(".share-btn").css({	border:"1px solid #eee",borderBottom:"none"})
			       	$(".icon-list-item").css({	border:"1px solid #eee"})
			       	$(".icon-list-item").show()
			    },
			    mouseleave:function(){
			       $(".icons1").css({
			       		background: " url(http://2.ss.faisys.com/image/v2/vbg01.png?v=201907171253) no-repeat 0 -165px"
			       	});
			       	$(".share-btn").css({	border: "1px solid transparent",borderBottom: "none" })
			       	$(".icon-list-item").css({	border: "1px solid transparent" })
			       	$(".icon-list-item").hide()   
			    }
			});