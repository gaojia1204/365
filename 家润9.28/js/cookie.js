function setCookie(name,value,day){
	var oDate= new Date();
	oDate.setDate(oDate.getDate()+day);
	document.cookie=name+'='+value+';expires='+oDate;
}
function delCookie(name){                                
	setCookie(name,1,-1)
}
function getCookie(name){                         
	var arr=document.cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var arrName=arr[i].split('=');
		if(arrName[0]==name){
			return arrName[1];
		}
	}
	return '';
}