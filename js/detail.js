$(function(){
	let count = 0; //循环变量，代表当前图片
	let length = $(".lunbo_list img").length; //获取当前轮播的图片个数
	//播放图片的函数
	function imgPlay(n) { //n代表当前图片
		$(".lunbo_list li").removeClass("current")
			.siblings().eq(n).addClass("current");
		$(".redmi_long span").removeClass("moveclass")
			.siblings().eq(n).addClass("moveclass");
	}
	//设置自动循环的函数
	function autoPlay() {
		count++;
		if (count >= length) {
			count = 0;
		}
		imgPlay(count);
	}
	//设置自动循环的定时器
	var timer = setInterval(autoPlay, 5000);
	//鼠标进入轮播区域定时器停止，移出时添加定时器
	$(".lunbo_list").on("mouseenter", function() {
		clearInterval(timer);
	}).on("mouseleave", function() {
		timer = setInterval(autoPlay, 5000); //
	});
	//左右箭头事件
	$(".slide-left").on("click", function() {
		count--;
		if (count < 0) {
			count = length - 1;
		}
		imgPlay(count);
	}) //左
	$(".slide-right").on("click", function() {
		count++;
		if (count >= length) {
			count = 0;
		}
		imgPlay(count);
	});
	//底部小圆点事件
	$(".redmi_long span").on("click", function() {
		count = $(this).index();
		imgPlay(count);
	});//轮播结束
	
	//定时器
	function djs(date1, date2) {
		var ms = date2 - date1;
		var ss = ms / 1000;
	
		var hour = Math.floor(ss / 3600); //时
		var minute = Math.floor(ss / 60 % 60); //分
		var second = Math.floor(ss % 60); //秒
	
		return {
			hour,
			minute,
			second
		};
	};
	
	function tm() {
		var date1 = new Date(); //当前时间
		var date2 = new Date("2019/09/01 00:00:00"); //设置未来事件
		var time = djs(date1, date2);
	
		time.hour = time.hour < 10 ? "0" + time.hour : time.hour;
		time.minute = time.minute < 10 ? "0" + time.minute : time.minute;
		time.second = time.second < 10 ? "0" + time.second : time.second;
	
		$(".hour").html(time.hour);
		$(".minute").html(time.minute);
		$(".second").html(time.second);
		if (date2 - date1 <= 0) {
			clearInterval(timer);
		}
	};
	tm();
	var timer = setInterval(tm, 1000); //设置定时器
	//定时器结束
	$(".revision").on("click",function(){
		$(".yangnb").show();
		
	});
	// $(document).click(function(){
	// 	$(".yangnb").hide();
	// })
	$(".cancel").on("click",function(event){
		event.stopPropagation();
		$(".yangnb").hide();
	});
	$("html").on("dblclick",function(){
		// console.log("aa")
		$(".yangnb").hide();
	});
	//获取id加入购物车
	var id=location.search.split("=")[1];
	$.ajax({
		type:"get",
		url:"json/shangpin.json",
		success:function(data){
			var data=data;
			// console.log(data);
			for (let item in data) {
				// console.log(item);//键名，属性
				// console.log(data[item])//键值 属性值
				data[item].forEach(function(ele,i){
					// console.log(i);
					// console.log(data[item][i]["id"])
					if (id==data[item][i]["id"]) {
						// console.log(data[item][i]);
						$(".r_title").html(data[item][i]["title"]);
						$(".r_title_pro").html(data[item][i]["title"]);
						$(".r_title_pro").html(data[item][i]["title"]);
						$(".rm_title").html(data[item][i]["title"]);
						$(".shijia").html(data[item][i]["price"]);
						$(".huaxianjia").html(data[item][i]["price"]);
						$(".sec_shijia").html(data[item][i]["price"]);
						$(".sec_huaxian").html(data[item][i]["price"]);
					}
				})
			}
			
		}
	});
	var cart=new Cart();
	var jg=document.getElementById("jg");
	console.log(jg)
	jg.onclick=function(){
		cart.addData(id);
	}
})