function ajax(json,fn ){
				var bbb=null;
				var data=null;
				for(var attr in json){
//					alert(attr)
				var data=json.data||'';
				var aysn=json.aysn||true
				var	method=json.method||'get';
				
				var xhl=window.XMLHttpRequest? new XMLHttpRequest():new ActiveXObject('Misrcsoft.XMLHttp');
				if(method=='get'){
							url=json.url+"?"+json.data+'&'+new Date();
							bbb='';
						}else if(method=='post'){
							bbb=data;
							url=json.url;
						}
					}
				xhl.open(method,url,aysn);
				xhl.setRequestHeader('content-type','application/x-www-form-urlencoded');
				xhl.send(bbb);
				xhl.onreadystatechange=function(){
					if(xhl.readyState==4){
						if(xhl.status>=200&&xhl.status<300){
							fn&&fn(xhl.responseText);
						}else{
							alert('请求失败:'+xhl.status)
						}
					}
				}
			}