function Cart() {
	if (localStorage.getItem("cart") !== null) {
		this.cartData = JSON.parse(localStorage.getItem("cart"));
	} else {
		this.cartData = {};
	}
};
Cart.prototype.addData = function(id,num,flag) {
	if (this.cartData[id] === undefined) {
		this.cartData[id] = 1;
	} else {
		if (flag) {
			this.cartData[id]=num;
		}else{
			this.cartData[id]++;
		}
	}
	localStorage.setItem("cart", JSON.stringify(this.cartData))
}

Cart.prototype.showData = function(id) {

	
	let _this = this;
	_this.vess = document.getElementById("vessel");
	_this.zj = document.getElementById("zj");//全部总价

	ajax({
		type: "get",
		url: "json/shangpin.json",
		fnSuc: foo
	})

	function foo(data) {
		var data = JSON.parse(data);
		let str = "";
		let sum = 0;
		// console.log(this)
		for (let i in _this.cartData) {
			for (let item in data) {
				data[item].forEach((ele) => {
					if (i == ele["id"]) {
						str +=
							`<li data-id="${i}">
							<i>v</i>
							<img src="${ele["imgsrc"]}" >
							<p>${ele["title"]}</p>
							<span class="perprice">${ele["price"]}</span>
							<label class="jiajian">
								<span class="minus">-</span>
								<input class="txt" type="text" name="" id="" value="${_this.cartData[i]}" />
								<span class="plus">+</span>
							</label>
							<span class="single_price">${_this.cartData[i]*ele["price"]}</span>
							<strong class="del">X</strong>
						</li>`
						sum += _this.cartData[i] * ele["price"];

					}
				})
			}
		} //循环结束
		_this.vess.innerHTML = str;
		_this.zj.innerHTML = sum;
		var aDel = document.getElementsByClassName("del");
		var aMinus = document.querySelectorAll(".minus"); //减
		var aPlus = document.querySelectorAll(".plus"); //加
		var aTxt = document.querySelectorAll(".txt");
		var aPerTotal = document.querySelectorAll(".single_price"); //单个总价
		var aPerprice = document.querySelectorAll(".perprice")
		var len = aMinus.length;
		for (let i = 0; i < len; i++) {
			let m=0;
			aMinus[i].onclick = function(e) {
				if (aTxt[i].value <= 1) {
					aTxt[i].value = 1;
				} else {
					aTxt[i].value--;
				}
				
				let id=this.parentNode.parentNode.getAttribute("data-id");
				let num=parseInt(aTxt[i].value);
				aPerTotal[i].innerHTML=num*aPerprice[i].innerText;
				_this.addData(id,num,false);
			} //点击减少事件
			aPlus[i].onclick = function() {
				aTxt[i].value++;
				let id=this.parentNode.parentNode.getAttribute("data-id");
				let num=parseInt(aTxt[i].value);
				aPerTotal[i].innerHTML=num*aPerprice[i].innerText;
				_this.addData(id,num,false)
			} //点击增加事件
			aTxt[i].onchange = function() {
				if (this.value <= 1) {
					this.value = 1;
				}
				let id=this.parentNode.parentNode.getAttribute("data-id");
				let num=parseInt(this.value);
				aPerTotal[i].innerHTML=num*aPerprice[i].innerText;
				_this.addData(id,num,true)
			}
			aDel[i].onclick = function() {
				var id=this.parentNode.getAttribute("data-id");
				_this.vess.removeChild(this.parentNode);
				delete _this.cartData[id];
				localStorage.setItem("cart",JSON.stringify(_this.cartData));
			}
		};
		
	}

}


