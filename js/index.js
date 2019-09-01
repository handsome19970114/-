$(function() {
	$(".hover").hover(function() {
		$(".appcode").stop().slideToggle(500);
	}); //二维码
	$(".shopcart").hover(function() {
		$(".cart").stop().slideToggle(500);
	}); //购物车图标

	// $(".nav_log").mouseenter(function() {
	// 	$(".nav_log").css({
	// 		backgroundImage: "url(../img/mi-home.png)"
	// 	}) });

	$(".nav_search-one").focus(function() {
		$(".nav_search_pull").slideDown(500);
		$(".nav_search").css({
			borderColor: "orange"
		});
		$(".active").css({
			borderColor: "orange"
		});
	}).blur(function() {
		$(".nav_search_pull").slideUp(500);
		$(".nav_search").css({
			borderColor: "#cecece"
		});
		$(".active").css({
			borderColor: "#cecece"
		}); //搜索框
	});

	$(".dcart").click(function() {
		location.href = "cart.html";

	})
	//轮播图
	//轮播图
	let count = 0; //循环变量，代表当前图片
	let length = $(".imglist img").length; //获取当前轮播的图片个数
	//播放图片的函数
	function imgPlay(n) { //n代表当前图片
		$(".imglist li").removeClass("current")
			.siblings().eq(n).addClass("current");
		$(".play-list span").removeClass("current")
			.siblings().eq(n).addClass("current");
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
	var timer = setInterval(autoPlay, 2000);
	//鼠标进入轮播区域定时器停止，移出时添加定时器
	$(".play").on("mouseenter", function() {
		clearInterval(timer);
	}).on("mouseleave", function() {
		timer = setInterval(autoPlay, 2000); //
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
	$(".play-list span").on("click", function() {
		count = $(this).index();
		imgPlay(count);
	});


	//倒计时
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
		var date2 = new Date("2019/09/05 00:00:00"); //设置未来事件
		var time = djs(date1, date2);

		time.hour = time.hour < 10 ? "0" + time.hour : time.hour;
		time.minute = time.minute < 10 ? "0" + time.minute : time.minute;
		time.second = time.second < 10 ? "0" + time.second : time.second;

		$(".time_one").html(time.hour);
		$(".time_two").html(time.minute);
		$(".time_three").html(time.second);
		if (date2 - date1 <= 0) {
			clearInterval(timer);
		}
	};
	tm();
	var timer = setInterval(tm, 1000); //设置定时器
	//定时器结束


	$(".wrap").hide();
	$(".regist").on("click", function() {
		$(".warp").show();
		$(".zhuce").show();
	});
	$(".agreement span").on("click", function() {
		$(".zhuce").hide();
		$(".warp").hide();
	});
	$(".consent button").each(function() {
		$(this).on("click", function() {
			var attr = $(this).attr("flag");
			if (attr == "true") {
				location.href = "regist.html"
			}
			$(".zhuce").hide();
			$(".warp").hide();
		})
	});

	//分类菜单
	$(".category-item").each(function() {
		$show = $(".show");
		$(this).on("click", function() {
			location.href = "list.html"
		});
		var index = $(this).index();
		$(this).on("mouseenter", function() {
			$show.show();
			$.ajax({
				url: "json/shangpin.json",
				type: "get",
				success: function(data) {
					var data = data;
					var dataArr = Object.keys(data);
					var str = "";
					for (let i = 0; i < dataArr.length; i++) {
						if (index == i) {
							var dataList = data[dataArr[i]];
							dataList.forEach((item) => {
								str +=
									`
									<li>
										<a href="list.html">
										<img src="${item["imgsrc"]}"/>
										<p>${item["title"]}</p>
										</a>
									</li>`
							})
						}
					}
					$show.html(str);
				}
			})
		});

		$(".play").on("mouseleave", function(event) {
			event.stopPropagation();
			$show.hide().find("li").remove();
		});

	});


	//两栏固定
	$fir_hover = $(".fir_hover");
	$fir_hover.hover(function() {
		$(".none_img").toggle();
	});
	$(".two_hover").hover(function() {
		$(".one").toggle();
	});
	$(".three_hover").hover(function() {
		$(".two").toggle();
	});
	$(".four_hover").hover(function() {
		$(".three").toggle();
	});
	$(".five_hover").hover(function() {
		$(".four").toggle();
	});
	$("#special_li").hover(function() {
		$(".back_top").toggle();
	});
	var flag = true;
	$(window).scroll(function() {
		if (flag) {
			var st = $(window).scrollTop();
			if (st >= 500) {
				$("#special_li").fadeIn();
			} else {
				$("#special_li").fadeOut();
			}
		}
		$("#special_li").click(function() {
			$(window).scrollTop(0);
		});
	});
	var data=JSON.parse(localStorage.getItem("cart"));
	var num=0;
	for (let item in data) {
		num+=data[item]
	}
	if (num) {
		$(".cirle").show();
		$(".quan").show().html("("+num+")");
	}else{
		$(".cirle").hide();
	};
	//首页划过展示c
	// console.log($(".hover_list"))
	$(".hover_list").each(function(){
		$(this).hover(function(){
			$index=$(this).index();
			// console.log($index)
			var str="";
			$.ajax({
				url:"json/shangpin.json",
				type:"get",
				success:function(data){
					var data=data;
					// console.log(data)
					var arr=Object.keys(data);
					// console.log(arr)
					var newArr=arr.slice(0,7);
					for (let i=0;i<newArr.length;i++) {
						if ($index==i){
							newArr1=Object.keys(data[newArr[i]]);
							//console.log(newArr1)
							//console.log(data[newArr[i]])
							newArr2=newArr1.slice(0,6);
							// console.log(newArr2);
							for (j=0;j<newArr2.length;j++){
								str+=
									`<li>
										<a href="list.html">
											<img src="${data[newArr[i]][j]["imgsrc"]}" >
											<p>${data[newArr[i]][j]["title"]}</p>
											<span>${data[newArr[i]][j]["price"]}</span>
										</a>
									</li>`
								//console.log(data[newArr[i]][j])
							}
						}
					}
					$(".sj_nav").html(str)
				}
			})
			$(".shuju").slideDown(400);
		});
		
	});
	$(".shuju").mouseleave(function(){
		$(".shuju").stop().slideUp(400);
	});
	$(".s").mouseover(function(){
		$(".shuju").stop().hide();
	})
});
