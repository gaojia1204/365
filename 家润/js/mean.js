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
//		This.span.style.display='none';
//		This.box.style.display='none';
	}
}

var mean=new Mean();
mean.smove();
mean.sout();
//二级菜单————————————————————————————————————————————————————————————————

			var $TXbanner = $('#TXbanner');
			var $span = $('#list1 span');
			var $li = $('#center ul li');
			var $btn = $('#center .btn');
			var $right = $('#center .right');
			var $left = $('#center .left');
			var timer = null;
			var $index = 0;
			$TXbanner.hover(function(){
				$btn.show();
				clearInterval(timer);
			},function(){
				$btn.hide();
				timer=setInterval(rightC,3000);
			})
			$right.click(function(){
				rightC();
			})
			$left.click(function(){
//				var $prev = $span.eq($index).prev().index();
//				$prev = $prev<0?$span.last().index():$prev--;
//				$index = $prev;
//				$left.trigger('mouseover');
				leftC();
			});
			
			timer=setInterval(rightC,3000);
			
			$span.mouseover(function(){
				$index = $(this).index();
				change();
			});
			function rightC(){
				$index++;
				if($index > $span.size() - 1){
					$index = 0;
				}
				change();
			}
			function leftC(){
				$index--;
				if($index < 0){
					$index = $span.size() - 1;
				}
				change();
			}
			function change(){
//				var $liInd = $li.eq($index);
				$span.eq($index).addClass('active').siblings().removeClass('active');
				$li.eq($index).stop().fadeIn().siblings().stop().fadeOut();
			}
			//图片轮播，淡入淡出-----------------------
			
//图片无缝滚动---------------------------

$("#box2").hover(function(){
	clearInterval(timer1)
},function(){
	var timer1=setInterval(function(){
	$("#list2").animate({"left":"-1200px"},5000)
	$("#list2").animate({"left":"-2400"},5000,function(){
			$("#list2").css({
				"left":"0"
			})
	});
	
},10000)
})
 var timer1=setInterval(function(){
	$("#list2").animate({"left":"-1200px"},5000,function(){
		$("#list2").animate({"left":"-2400"},5000,function(){
			$("#list2").css({
				"left":"0"
			})
		})
	});
	
},10000)
//图片轮播-----------最后一个^-^
lunbo(".div11","timer5","size1");
lunbo(".div12","timer6","size2");
lunbo(".div13","timer7","size3");
lunbo(".div14","timer8","size4");
lunbo(".div15","timer9","size5");
function lunbo(name,tname,size){
	size=0;
	tname=null;
	tname=setInterval(function(){
		size++;
		if(size>=4){
			size=0;
		} 
		change11();
	},5000)
	$(""+name+">ul>li").mouseover(function(){
			size = $(this).index();
			change11();
		});
		$(name).hover(function(){
			
			clearInterval(tname);
		},function(){
			
	tname=setInterval(function(){
		size++;
		if(size>=4){
			size=0;
		}
		 
		change11();
	},5000)
		})
	function change11(){
			$(""+name+">ul>li").eq(size).addClass('hover').siblings().removeClass('hover');
			$(""+name+">div>img").eq(size).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
	}
}
