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


