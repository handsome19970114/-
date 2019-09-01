$(function(){
	$(".acc").on("click",function(){
		$(".logon_form").show();
		$(".ewm").fadeOut(20);
	});
	
	$(".asc").on("click",function(){
		$(".logon_form").hide();
		$(".ewm").fadeIn(800);
	});
	//登录
	$name=$(".logon_phone");
	$pass=$(".logon_pass");
	$btn=$(".logon_btn");
	
	$btn.on("click",function(){
		$username=$name.val();
		$passward=$pass.val();
		$.post("http://47.104.244.134:8080/userlogin.do",{
			name:$username,
			password:$passward
		},function(data){
			// console.log(data)
			prompt("你是最帅的高哥")
			if (data.code==0) {
				setTimeout(()=>{
					location.href="index.html"
				},500)
			}else{
				alert("请输入正确的用户名和密码");
				
			}
		})
	})
})