function format(html,object){
	//利用了 字符串替换
	//字符串替换可以使用正则匹配
	//在利用字符串替换可以使用函数来返回被替换的结果
	return html.replace(/{{([\w-]+)}}/g,function(a,b){
		return object[b] || "";
	});
}
//地址栏查找？后字段
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