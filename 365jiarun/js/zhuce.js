function Mean(){
	this.p4=document.getElementById("p4");
	this.box1=getname('.box1');
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

var obtn1=document.getElementById("btn1");
var obtn2=document.getElementById("btn2");
var obtn3=document.getElementById("btn3");
var obtn4=document.getElementById("btn4");



obtn1.onblur=function(){
				var val=obtn1.value;
				var reg=/\w+|[\u4e00-\u9fa5]/;
				if(reg.test(val)){
					arr.push(1);
					obtn1.style.background='';
				}else{
				obtn1.value="名字不合法";
				obtn1.style.background='red';
				}
			}	
			obtn1.onfocus=function(){
				obtn1.value="";
				obtn1.style.background='';
				}

obtn2.onblur=function(){
				var val=obtn2.value;
				var reg=/^[0-9a-zA-Z]{4,10}$/;
				if(reg.test(val)){
					arr.push(1);
					obtn2.style.background='';
				}else{
				obtn2.value="密码不合法";
				obtn2.style.background='red';
				}
			}	
			obtn2.onfocus=function(){
				obtn2.value="";
				obtn2.style.background='';
				}
obtn3.onblur=function(){
				var val=obtn2.value;
				var val1=obtn3.value;
				var reg=new RegExp(val);
				if(reg.test(val1)){
					arr.push(1);
					obtn3.style.background='';
				}else{
				obtn3.value="两次密码不同";
				obtn3.style.background='red';
				}
			}
var arr=[];
var p=document.getElementById("p");
obtn4.onfocus=function(){
				var aYzm = ["Bbcd","CbAd","GHcd","Fbcd",
			"abHd","PKcd","aGSF","aSAd",
			"GSAH","zgsd","kkhn","fsag",
			"Jbcd","uihk","hvbv","afss"];
				obtn4.value="";
				obtn4.style.background='';
				p.innerHTML = aYzm[Math.floor(Math.random()*16)];
				}
			obtn4.onblur=function(){
				var val=obtn4.value;
				var val1=p.innerHTML;
				var reg=new RegExp(val1);
				if(reg.test(val)){
					arr.push(1);
					obtn4.style.background='';
				}else{
				obtn4.value="验证码错误";
				obtn4.style.background='red';
				}
			}	

//$("#btn5").click(function(){
//	$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{'data':'userID='+$("#btn1").val()+'password='+$("#btn2").val()+'&status=register'},function callback(res){
//					if(res==0){
//						alert('用户名重复');
//					}else if(res==2){
//						alert('数据库报错');
//					}else if(res==1){
//						alert("注册成功")
//						location.href="denglu.html";
//					}
//	})
//})
//cookie做
var user1=document.getElementById("btn1");
var pwd1=document.getElementById("btn2");
var btn5=document.getElementById("btn5");
btn5.onclick=function(){
	var date1=user1.value;
	var aaa=pwd1.value;
	var pwd=getCookie(date1)||getCookie('bucunzai');
	if(pwd=='bucunzai'){
		
		setCookie(date1,aaa,7);
		open('denglu.html')
	}else{
		alert('用户已存在')
	}
	
}
window.onload=function(){
	setCookie('bucunzai','bucunzai',7)
}



