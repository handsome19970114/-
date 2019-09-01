$(function(){
	$county=$(".regist_country_c");//用户名
	$passward=$(".regist_pass_c");//密码
	$email=$(".regist_email_c");//邮箱
	$sexy=$(".regist_man_c");//性别
	$submit=$(".regist_button")//提交按钮
	// console.log($submit)
	$obj={}//空对象保存值
	$county.on("change",function(){//用户名
		$val1=$(this).val();
		$.get("http://47.104.244.134:8080/username.do",{username:$val1},function(data){
			var data=data;
			if (data.code==1&&$val1!=null) {
				$obj.username=1;
				$(".verify1").html("能用")
			}else{
				$obj.username=0;
				$(".verify1").html("不能用");
			}
		})	
	});
	$passward.on("change",function(){
		$val2=$(this).val();
		$reg1=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/;
		if ($reg1.test($val2)) {
			$obj.passward=1;
			$(".verify2").html("能用")
		}else{
			$obj.passward=0;
			$(".verify2").html("不能用");
		}
	});
	
	$email.on("change",function(){
		$val3=$(this).val();
		$reg2=$reg2 = /^\w+@\w+(\.\w+)+$/;
		if ($reg2.test($val3)) {
			$obj.email=1;
			$(".verify3").html("能用")
		}else{
			$obj.email=0;
			$(".verify3").html("不能用");
		}
	});
	
	$sexy.on("change",function(){
		$val4=$(this).val();
		$arr=["男","女","双性人"];
		if ($val4!=$arr[0]&&$val4!=$arr[1]&&$val4!=$arr[2]) {
			$obj.sexy=0;
			$(".verify4").html("你不是个好人");
		}else{
			$obj.sexy=1;
			$(".verify4").html("你是个好人");
		}
	});
	$submit.on("click",function(){
		$sum=Number($obj.username+$obj.passward+$obj.email+$obj.sexy);
		if ($sum==4) {
			$.post("http://47.104.244.134:8080/usersave.do",{
				username:$county.val(),
				password:$passward.val(),
				email:$email.val(),
				sex:$sexy.val()
			},function(data){
				if (data.code=0) {
					alert("注册成功")
					setTimeout(()=>{
						location.href="login.html"
					},3000)
				}else{
					alert("注册失败，请重新注册");
				}
			})
		}
	})

})