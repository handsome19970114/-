$(function(){
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
	var str="";
	var str1="";
	var str2="";
	var str3="";
	var str4="";
	var str5="";
	var str6="";
	var str7="";
	var str8="";
	var str9="";
	$.ajax({
		type:"get",
		url:"json/shangpin.json",
		success:function(data){
			var data=data;
			// console.log(data)
			data["phone"].forEach((item)=>{
				str+=`<li>
							<a href="detail.html?id=${item["id"]}">
								<img src="${item["imgsrc"]}" >
								<p>${item["title"]}</p>
							</a>
						</li>
					`
			});//phone
			data["tv"].forEach((item)=>{
				str1+=`<li>
							<a href="detail.html?id=${item["id"]}">
								<img src="${item["imgsrc"]}" >
								<p>${item["title"]}</p>
							</a>
						</li>
					`
			});
			data["computer"].forEach((item)=>{
				str2+=`<li>
							<a href="detail.html?id=${item["id"]}">
								<img src="${item["imgsrc"]}" >
								<p>${item["title"]}</p>
							</a>
						</li>
					`
			});
			data["power_strip"].forEach((item)=>{
				str3+=`<li>
							<a href="detail.html?id=${item["id"]}">
								<img src="${item["imgsrc"]}" >
								<p>${item["title"]}</p>
							</a>
						</li>
					`
			});
			data["apparel"].forEach((item)=>{
				str4+=`<li>
							<a href="detail.html?id=${item["id"]}">
								<img src="${item["imgsrc"]}" >
								<p>${item["title"]}</p>
							</a>
						</li>
					`
			});
			data["charger"].forEach((item)=>{
				str5+=`<li>
							<a href="detail.html?id=${item["id"]}">
								<img src="${item["imgsrc"]}" >
								<p>${item["title"]}</p>
							</a>
						</li>
					`
			});
			data["weight"].forEach((item)=>{
				str6+=`<li>
							<a href="detail.html?id=${item["id"]}">
								<img src="${item["imgsrc"]}" >
								<p>${item["title"]}</p>
							</a>
						</li>
					`
			});
			data["glasses"].forEach((item)=>{
				str7+=`<li>
							<a href="detail.html?id=${item["id"]}">
								<img src="${item["imgsrc"]}" >
								<p>${item["title"]}</p>
							</a>
						</li>
					`
			});
			data["smart"].forEach((item)=>{
				str8+=`<li>
							<a href="detail.html?id=${item["id"]}">
								<img src="${item["imgsrc"]}" >
								<p>${item["title"]}</p>
							</a>
						</li>
					`
			});
			data["erji"].forEach((item)=>{
				str9+=`<li>
							<a href="detail.html?id=${item["id"]}">
								<img src="${item["imgsrc"]}" >
								<p>${item["title"]}</p>
							</a>
						</li>
					`
			});
			
			$(".card_list ul").html(str);
			$(".tv_list ul").html(str1);
			$(".note_list ul").html(str2);
			$(".household_list ul").html(str3);
			$(".trip_list ul").html(str4);
			$(".capa_list ul").html(str5);
			$(".power_list ul").html(str6);
			$(".health_list ul").html(str7);
			$(".erji_list ul").html(str8);
			$(".live_list ul").html(str9);
		}
	});
	$(".v1").click(function(){
		$(".card_list").toggle();
		$(".v1").parent(). toggleClass("p");
		// console.log($(".v1").parent())
	});
	$(".v2").click(function(){
		$(".tv_list").toggle();
		$(".v2").parent(). toggleClass("p");
	});
	$(".v3").click(function(){
		$(".note_list").toggle();
		$(".v3").parent(). toggleClass("p");
	});
	$(".v4").click(function(){
		$(".household_list").toggle();
		$(".v4").parent(). toggleClass("p");
	});
	$(".v5").click(function(){
		$(".trip_list").toggle();
		$(".v5").parent(). toggleClass("p");
	});
	$(".v6").click(function(){
		$(".capa_list").toggle();
		$(".v6").parent(). toggleClass("p");
	});
	$(".v7").click(function(){
		$(".power_list").toggle();
		$(".v7").parent(). toggleClass("p");
	});
	$(".v8").click(function(){
		$(".health_list").toggle();
		$(".v8").parent(). toggleClass("p");
	});
	$(".v9").click(function(){
		$(".erji_list").toggle();
		$(".v9").parent(). toggleClass("p");
	});
	$(".v10").click(function(){
		$(".live_list").toggle();
		$(".v10").parent(). toggleClass("p");
	});
	
})