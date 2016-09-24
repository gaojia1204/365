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




//放大镜			
var li=document.getElementById("listmain").children;
var small=document.getElementById("small");
var big=document.getElementById("big");
for (var i=0;i<li.length;i++){
	li[i].index=i;
	li[i].onmouseover=function(){
		for(var j=0;j<li.length;j++){
			if(this.index==j){
				small.src="images/22"+(j+1)+".png";
				big.src="images/22"+(j+1)+".png";
			}
		}
		
	}
}
		
 $("#main").on("mousedown","#leftmain1",function (event) {  
    var isMove = true;  
    var abs_x = event.pageX - $('#leftmain1').offset().left;  
    var abs_y = event.pageY - $('#leftmain1').offset().top;  
    $(document).mousemove(function (ev) {  
        if (isMove) {  
            var obj = $('#leftmain1');  
            var obj2=$("#big");
            var x1=ev.clientX-abs_x-125;
			var y1=ev.clientY-abs_y-125;										
			if(x1>0&&x1<170){
				$ll=x1;
				$bl=-(x1*42/25);
			}else if(x1<0){
				$ll=0;
				$bl=0;
			}else if(x1>170){
				$ll=170;
				$bl=-275;
			}
			if(y1>0&&y1<170){
				$lt=y1;
				$bt=-(y1*42/25);
			}else if(y1<0){
				$lt=0;
				$bt=0;
			}else if(y1>170){
				$lt=170;
				$bt=-275;
			}
			console.log($bl,$bt)
            obj.css({'left':$ll, 'top':$lt});
            obj2.css({'left':$bl,'top':$bt})
        }  
    }  
    ).mouseup(  
            function () {  
                isMove = false;  
            }  
    );  
}  
);  
  
             