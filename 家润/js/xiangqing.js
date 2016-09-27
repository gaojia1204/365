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


		

var arr=search("classID");
var arr1=arr.replace(/\?c/,"");
 $str="";
$.get("shuiguo.json",{},function(aaa){
			$str+='<div id="mainOne">'+
				'<div id="leftmain">'+
					'<img src={{imgsrc0}} id="small"/>'+
					'<div id="leftmain1">'+
					'</div>'+
				'</div>'+
				'<div id="rightmain">'+
					'<div id="yyy">'+
					'<img src={{imgsrc0}} id="big""/>'+
					'</div>'+
				'</div>'+
				'<ul id="listmain">'+
					'<li><img src={{imgsrc0}} ></li>'+
					'<li><img src={{imgsrc1}} ></li>'+
					'<li><img src={{imgsrc2}} ></li>'+
				'</ul>'+
			'</div>'+
			'<div id="bbox">'+
			'<div id="mainTwo">'+
				'<p class="rp1">{{describe}}</p>'+
				'<p class="rp2">{{describe1}}</p>'+
				'<div id="mainTwo1">'+
					'<p class="rp3">'+
						'<span class="rsp1">会员价：</span>'+
						'<span class="rsp2">{{pir}}</span>'+
					'</p>'+
					'<p class="rp4">'+
						'<span class="rsp3">市场价：</span>'+
						'<span class="rsp4">{{pic1}}</span>'+
					'</p>'+
				'</div>'+
				'<p class="rp5">'+
				'<span class="rsp5">商品规格</span>'+
				'<span class="rsp15">{{heft}}</span>'+
				'</p>'+
				'<p class="rp7">'+
					'<span class="rsp7">包装单位</span>'+
					'<span class="rsp8">{{unit}}</span>'+
				'</p>'+
				'<p class="rp8">'+
				'<span class="rsp9">数量</span>'+
				'<span class="rsp10">1</span>'+
				'<span class="rsp11">+</span>'+
				'<span class="rsp12">-</span>'+
				'<span class="rsp13">件 库存9999</span>'+
				'</p>'+
				'<p class="rp10">'+
				'<span class="rsp13"><a href="gouwuche.html?classID='+arr1+'">立即购买</a></span>'+
				'<span class="rsp14"><a href="javascirpts:;">加入购物车</a></span>'+
				'</p>'+
				'<p class="rp11">'+
					'<img src="img/qq.png" />'+
					'<img src="img/weixinp.png"/>'+
					'<img src="img/weibopi.png"/>'+
				'</p>'+
			'</div>'+
			'</div>'+
		'<div id="mainthree">'+
			'<div id="mainthree1">'+
				'<p class="zuo1">青岛家润店</p>'+
				'<div class="zuo2">'+
					'<p>'+
						'<span class="w1">描述</span>'+
						'<span class="w2">5.00</span>'+
					'</p>'+
					'<p>'+
						'<span class="w1">服务</span>'+
						'<span class="w2">5.00</span>'+
					'</p>'+
					'<p>'+
						'<span class="w1">物流</span>'+
						'<span class="w2">5.00</span>'+
					'</p>'+
				'</div>'+
				'<p class="zuo3">'+
					'<span class="w3">进店逛逛</span>'+
					'<span class="w4">收藏店铺</span>'+
				'</p>'+
			'</div>'+
			'<div id="mainthree2">'+
				'<div class="you">'+
					'<p class="youp1">'+
						'<span>商品详情</span>'+
					'</p>'+
					'<p class="youp2">'+
						'<span>产地：青岛本地</span>'+
						'<span>储存方式：冰箱冷冻</span>'+
					'</p>'+
				'</div>'+
				'<div class="you2">'+
					'<p class="youp3">'+
						'<span>产品介绍</span>'+
					'</p>'+
					'<img src={{imgsrc3}} />'+
				'</div>'+
			'</div>'+
		'</div>'
		var bbb=aaa[arr1];
		var str1=format($str,bbb)
		$("#main").append(str1);	
},"json")
 











//放大镜 jq动态获取数据后实现
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
$("#main").on("mouseover","#listmain>li",function(){
	$abc=$(this).index();
	$.get("shuiguo.json",{},function(aaa){
		$abcd=aaa[arr1]["imgsrc"+$abc];
		$("#small").attr("src",$abcd)
		$("#big").attr("src",$abcd)
	},"json")
	
})


//加减按钮
$i=1;
$("#main").on("click",".rsp11",function(){
	$i++;
	$(".rsp10").html($i);
})
$("#main").on("click",".rsp12",function(){
	$i--;
	if($i<1){
		$i=1;
	}
	$(".rsp10").html($i);
})


//加入购物车
$("#main").on("click",".rsp14",function(){
	var cont="";
	var cookie=new Cookies();
	if(cookie.has(arr1)){
		var a=parseInt(getCookie(arr1));
		var b=parseInt($(".rsp10").html())
		cont=a+b;
	}else{
		cont=$(".rsp10").html();
		
	}
	setCookie(arr1,cont,7);
	alert("您已成功加入购物车")
	
})
//立即购买
$("#main").on("click",".rsp13",function(){
	var cont=cont=$(".rsp10").html();
	setCookie(arr1,cont,7)
	
})
