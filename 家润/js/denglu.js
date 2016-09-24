function Mean(){
	this.p4=document.getElementById("p4");
	this.box1=document.getElementsByClassName("box1");
	this.box=document.getElementById("box");
	this.ul=document.getElementById("list");
	this.li=this.ul.children;
	this.span=document.getElementById("span");
}
Mean.prototype.smove=function(){
	This=this;
	this.p4.onmouseover=function(){
		This.span.style.display="block";
		This.box.style.display="block";
	}
	for(var i=0;i<this.li.length;i++){
		this.li[i].index=i;
		this.li[i].onmouseover=function(){
			This.box.style.display="block";
			This.box1[0].style.display="block";
			for(var j=0;j<This.li.length;j++){
				if(this.index==j){
				this.style.background="#ccc";
//				this.style.color="#6DBC19";
				
				}else{
				This.li[j].style.background="#6DBC19";
//				This.li[j].style.color="#fff";
				
				
					}
				}	
			}
		this.li[i].onmouseout=function(){
			this.style.background="#6DBC19";
//			this.style.color="#fff";
		}
		this.box1[0].onmouseover=function(){
		
			this.style.display='block';
			This.span.style.display='block';
			This.box.style.display='block';
			}
		}		
	}	
Mean.prototype.sout=function(){
	This=this;
	this.box1[0].onmouseout=function(){
		this.style.display='none';
		This.span.style.display='none';
		This.box.style.display='none';
	}
}

var mean=new Mean();
mean.smove();
mean.sout();

//登录验证
//obtn1.onblur=function(){
//				var val=obtn1.value;
//				var reg=/\w+|[\u4e00-\u9fa5]/;
//				if(reg.test(val)){
//					arr.push(1);
//					obtn1.style.background='';
//				}else{
//				obtn1.value="大侠，你输入的名字不对啊";
//				obtn1.style.background='red';
//				}
//			}	
//			obtn1.onfocus=function(){
//				obtn1.value="";
//				obtn1.style.background='';
//}
var arr=[];
var obtn3=document.getElementById("btn3");
var p=document.getElementById("p");
obtn3.onfocus=function(){
				var aYzm = ["Bbcd","CbAd","GHcd","Fbcd",
			"abHd","PKcd","aGSF","aSAd",
			"GSAH","zgsd","kkhn","fsag",
			"Jbcd","uihk","hvbv","afss"];
				obtn3.value="";
				obtn3.style.background='';
				p.innerHTML = aYzm[Math.floor(Math.random()*16)];
				}
			obtn3.onblur=function(){
				var val=obtn3.value;
				var val1=p.innerHTML;
				var reg=new RegExp(val1);
				if(reg.test(val)){
					arr.push(1);
					obtn3.style.background='';
				}else{
				obtn3.value="验证码错误";
				obtn3.style.background='red';
				}
			}	
//$("#btn4").click(function(){
//	$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{'data':'userID='+$("#btn1").val()+'password='+$("#btn2").val()+'&status=login'},function callback(res){
//					if(res==0){
//						alert('用户名不存在');
//						
//					}else if(res==2){
//						alert('用户名密码不符');
//					}else {
//						
//						location.href="index.html";
//					}
//	})
//})
//cookie做
var user=document.getElementById("btn1");
var pwd=document.getElementById("btn2");
var btn4=document.getElementById("btn4");
btn4.onclick=function(){
	var date=btn1.value;
	var pwd=getCookie(date)||getCookie('bucunzai');
	if(pwd=='bucunzai'){
		alert('用户名不存在')
	}else if(pwd==btn2.value){
		alert('登录成功')
		
	}else{
		alert('密码错误')
	}
}
window.onload=function(){
	setCookie('bucunzai','bucunzai',7)
}
