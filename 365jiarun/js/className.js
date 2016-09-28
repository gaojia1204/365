function getname( name,obj){
				obj=obj||document;
				
				if(name.charAt(0)=='#'){
					name=name.substring(1);
					return document.getElementById(name);
				}else if(name.charAt(0)=='.'){
						name=name.substring(1);
						if(obj.getElementsByClassName){
						return obj.getElementsByClassName(name);	
					}
//						name=name.substring(1);
						var all=document.getElementsByTagName('*');
//						console.log(all);
						var arr1=[];
						
						for(var i=0;i<all.length;i++){
							var arr=all[i].className.split(' ');
							for(var j=0;j<arr.length;j++){
								if(arr[j]==name){
								arr1.push(all[i]);
								};
							};	
						};
						return arr1;
					
				}else {
					return document.getElementsByTagName(name);
				}
			}		