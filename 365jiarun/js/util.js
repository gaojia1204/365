/**
 * 字符串模板替换
 * @param {Object} html
 * @param {Object} object
 */
function format(html,object){
	//利用了 字符串替换
	//字符串替换可以使用正则匹配
	//在利用字符串替换可以使用函数来返回被替换的结果
	return html.replace(/{{([\w-]+)}}/g,function(a,b){
		return object[b] || "";
	});
}

/**
 * 获取地址栏参数信息
 * @param {Object} name
 */
function search(name){
	var _search = (location.search+"").replace(/^\?/,"");
	var arr = _search.split("&");
	for(var i=0 , len = arr.length; i<len;i++){
		var item = arr[i].split("=");
		if(name == item[0]){
			return item[1];
		}
	}
	return null;
}


function Cookies(){
	
}
/**
 * 设置 cookie
 * @param {Object} name   key
 * @param {Object} value  value
 * @param {Object} time   过期时间
 * @param {Object} domain 域名
 * @param {Object} path   路径
 */
Cookies.prototype.set = function(name,value,time,domain,path){
	//如果 name 空，就不执行后面的逻辑
	if(!name){
		return false;
	}
	//如果 value 为空，就设置为一个空字符串
	value || (value = "");
	
	var cks = name + "=" + value;
	
	if(time){
		time = new Date(new Date().getTime() + 1000 * time);
		//cookie 中设置时间，需要将时间对象转换为字符串
		cks += ";expires=" + time.toGMTString();
	}
	
	//设置 域名
	if(domain){
		cks += ";domain=" + domain;
	}
	//如果 path 为空 默认 根
	if(!path){
		//将 cookie 的权限设置为所有页面可访问
		path = "/"; 
	}
	cks += ";path="+path;
	document.cookie = cks;
}
/**
 * 通过 cookie 的名字获取对应的 value
 * @param {Object} name
 */
Cookies.prototype.get = function(name){
//	var cks = document.cookie;
//	var value = "";
//	//当 cookie 为空时，直接返回
//	if(!this.has(name)){
//		return value;
//	}
//	//先将 分号 后的空格清除
//	cks = cks.replace(/;\s/g,";");
//	var arrs = cks.split(/;/g);
//	for(var i=0 , len = arrs.length; i < len ; i++){
//		var item = arrs[i].split("=");
//		if(item[0] == name){
//			value = item[1];
//			break;
//		}
//	}
//	return value;
	return this.get3(name);
}

Cookies.prototype.get2 = function(name){
//	var cks = document.cookie;
//	
//	//证明 想要获取的 cookie值 在cookie 对象中不存在 
//	if(!this.has(name)){
//		return "";
//	}
//	
//	//证明需要获取的 cookie 值在 cookie 对象中存在
//	//接着根据 查找字符的下标去开始 获取 cookie 的副本
//	var substring = cks.substring(cks.indexOf(name+"="));
//	var indexOf = substring.indexOf(";");
//	var newCks;
//	if(indexOf < 0){
//		newCks = substring.substring(name.length + 1);
//	}else{
//		newCks = substring.substring(name.length + 1, indexOf);
//	}
//	return newCks;
}	

Cookies.prototype.get3 = function(name){
	//把分号后面的空格去掉
	var cks = document.cookie.replace(/;\s/g,";");
	// name=1;pwd=2;age=3
	var reg = new RegExp('(;|^)'+name+'=([^;].*?)(;|$)');
	var result = cks.match(reg);
	if(result){
		result = result[2] || "";
		return result;
	}else{
		return "";
	}
	
}

/**
 * 返回 cookie 中所有的 键值
 */
Cookies.prototype.keys = function(){
	var cks = document.cookie.replace(/;\s/g,";");
	var match = cks.match(/(^|;)([\w]+)=/g);
	match.forEach(function(item,i){
		match[i] = item.replace(/=|;/g,"");
	});
	
	return match;
}
/**
 * 判断 cookie 是否存在
 * @param {Object} name
 */
Cookies.prototype.has = function(name){
	var cks = document.cookie;
	//判断 name 在 cookie 是否存在
	if(!cks || cks.indexOf(name+"=") < 0){
		return false;
	}
	return true;
}


/**
 * 将一件商品添加到 cookie 中保存起来
 * @param {Object} shopInfo
 */
function addCar(shopInfo){
	
	var cookie = new Cookies(); // 获取 cookie 对象
	var cars = cookie.get("cars"); //获取 cookie 中的商品 通过 cars 键值获取 购物车商品信息
	//如果cookie中没有购物车商品信息
	if(!cars){
		cars = {}; //动态创建一个对象
	}else{
		//将购物车商品信息转换为对象
		cars = JSON.parse(cars);
	}

	//判断 cars 中是否有这个商品
	if(cars[shopInfo.id]){
		//将以前的商品数量 加上新购买的商品数量
		cars[shopInfo.id].count +=  shopInfo.count;
	}
	else{
		//将新购买的商品添加到对象中
		cars[shopInfo.id] = shopInfo;
	}
	
	
	//将对象转换为字符串
	//将字符串保存到 cookie中
	cookie.set("cars",JSON.stringify(cars));
	console.log(cookie.get("cars"));
}

/**
 * 删除商品
 * @param {Object} key
 */
function removeCar(key){
	console.log(key);
	var cookie = new Cookies(); // 获取 cookie 对象
	var cars = cookie.get("cars"); //获取 cookie 中的商品 通过 cars 键值获取 购物车商品信息
	//如果cookie中没有购物车商品信息
	if(!cars){
		return false;
	}else{
		//将购物车商品信息转换为对象
		cars = JSON.parse(cars);
	}
	if(cars[key]){
		delete cars[key];
		cookie.set("cars",JSON.stringify(cars));
		return true;
	}else{
		return false;
	}
	
	
}
