
// 主页面js
var usename = ["建筑幕墙工程案例", "建筑装饰装饰", "钢结构工程", "电子与智能化工程", "防水防腐保温工程"];
var imgList = '';
var data= [
	{"name":"国际图书馆","id":1,"imgUrl":"//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgvt26zAUopbG3ogIwrQI4zgE.jpg"},
	{"name":"国际会展中心","id":2,"imgUrl":"//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgv926zAUoxNH2mwUwrQI4zgE.jpg"},
	{"name":"展示馆","id":3,"imgUrl":"//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgwd26zAUo28HO4gYwrQI4zgE.jpg"},
	{"name":"私人别墅","id":4,"imgUrl":"//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgvN26zAUowNrSogMwrQI4zgE.jpg"},
	{"name":"旅馆","id":5,"imgUrl":"//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgw926zAUowsCyugQwrQI4zgE.jpg"},
	{"name":"国际大酒店","id":6,"imgUrl":"//14517553.s61i.faiusr.com/2/AD0IsYr2BhACGAAgxN26zAUomeCV3gEwrQI4zgE.jpg"}
]




function userIndex(index) {
	// 设置标题
	$(".case-right-title>p").append(usename[index - 1])
	
	
	// url 请求的url
	// dataype 请求返回的类型
	//  type 请求的方式
	//  params 传过去的值
	//  callback 成功的回调
	//  ajax(url,dataType,type,params,callback) 
	// ajax请求 
	// ajax(url,"jsonp","get",index,callbackList)
	callbackList(data)
	
}
// 把返回的值追加到ul上
function callbackList(data){
	// console.log(data)
	for(let i=0;i<data.length;i++){
		imgList +="<li id="+data[i].id+"><div class='img-list-img'><img src="+data[i].imgUrl+"alt=''></div><p>"+data[i].name+"</p></li>"
	}
	$(".case-img-list ul").append(imgList)
}



// 项目详情页


// 工程案例
var index = 0;
var imgPageUrl="//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAguLyF2wUoxqW3_gcw7gU4gwQ.png";
var imgPagelist = [
	"//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAguLyF2wUoxqW3_gcw7gU4gwQ.png",
	"//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAguLyF2wUo_sHOwQEw7gU4gwQ.png",
	"//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAgu7yF2wUoqMKV-gcw7gU4gwQ.png",
	"//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAgvryF2wUo8YPjoAQw7gU4gwQ.png",
	"//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAgvryF2wUo8rnOsAIw7gU4gwQ.png",
	"//14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAgvryF2wUo5ezgigMw7gU4gwQ.png",
]



function particulars(){
	
}



// 鼠标移入小图片事件
$(".img-list-item li").hover(function() {
	index = $(this).index();
	$(this).find("div").show();
	imgPageUrl = imgPagelist[index]
	$(".icon-center img").attr('src', imgPagelist[index]);
}, function() {
	$(this).find("div").hide();
})
// 鼠标点击图片上的icon事件
$(".J_photoShowPrev").on("click", function() {
	if (index == 0) {
		index = 6
	}
	index--
	imgPageUrl = imgPagelist[index]
	$(".icon-center img").attr('src', imgPagelist[index]);

})

$(".J_photoShowNext").on("click", function() {
	console.log(index)
	if (index == 6 || index == 5) {
		index = -1
	}
	index++
	imgPageUrl = imgPagelist[index]
	$(".icon-center img").attr('src', imgPagelist[index]);
})


// 鼠标移入移出事件
$(".img-share").on({
	mouseenter: function() {
		$(".icons1").css({
			background: "url(http://2.ss.faisys.com/image/v2/vbg01.png?v=201907171253) no-repeat 0 -180px"
		});
		$(".share-btn").css({
			border: "1px solid #eee",
			borderBottom: "none"
		})
		$(".icon-list-item").css({
			border: "1px solid #eee"
		})
		$(".icon-list-item").show()
	},
	mouseleave: function() {
		$(".icons1").css({
			background: " url(http://2.ss.faisys.com/image/v2/vbg01.png?v=201907171253) no-repeat 0 -165px"
		});
		$(".share-btn").css({
			border: "1px solid transparent",
			borderBottom: "none"
		})
		$(".icon-list-item").css({
			border: "1px solid transparent"
		})
		$(".icon-list-item").hide()
	}
});

// 分享功能
	window._bd_share_config={
					"common":{
						"bdPopTitle":"您的自定义pop窗口标题",
						"bdSnsKey":{},
						"bdText":"此处填写自定义的分享内容", 
						"bdMini":"2",
						"bdMiniList":false,
						"bdPic":"http://14517553.s61i.faiusr.com/4/AD0IsYr2BhAEGAAgu7yF2wUoqMKV-gcw7gU4gwQ!160x160.png", /* 此处填写要分享图片地址 */
						"bdStyle":"0",
						"bdSize":"30"
						},
					"share":{}
			};
			with(document)0[
			                (getElementsByTagName('head')[0]||body).
			                appendChild(createElement('script')).
			                src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)
			];



