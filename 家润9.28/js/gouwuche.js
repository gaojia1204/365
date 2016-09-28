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

//获取数据打印页面  固定格式
		$str='<p class="ppppp1"><img src="img/step_spirit.png"/></p>'+
			'<p class="ppppp2"><span>温馨提示</span>1.选购清单中的商品无法保留库存，请及时结算。2.商品的价格和库存将以订单提交时为准</p>'+
			'<div class="div01">'+
				'<span class="spa1">商品名称</span>'+
				'<span class="spa2">规格</span>'+
				'<span class="spa2">单价</span>'+
				'<span class="spa2">数量</span>'+
				'<span class="spa2">总价</span>'+
				'<span class="spa2">操作</span>'+
			'</div>'+
			'<div class="div02">'+
			'</div>'+
			'<div class="div04">'+
				'<span id="spa8" data-id="{{ID}}">清空购物车</span>'+
				'<p>'+
					'<span>商品总额：</span>'+
					'<span class="spa9">￥<span id="all"></span></span>'+
				'</p>'+
			'</div>'+
			'<div class="div05">'+
				'<span class="spa10">继续购物</span>'+
				'<span class="spa11">去结算</span>'+
			'</div>';
		$("#main").html($str);	

//查找cookie里S*的记录
var arr1=[];
for(var n=1;n<61;n++){
	var arr=document.cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var arrName=arr[i].split('=');
		if(arrName[0]=="S"+n+""){
			arr1.push(arrName[0])
		}
	}
}

$str1="";
//设置全局变量ddd
var ddd=0;
$.get("shuiguo.json",{},function(aaa){
	//循环arr1
	for(var j=0;j<arr1.length;j++){
		var cont=parseInt(getCookie(arr1[j]));
		$ccc=arr1[j];	
		$bbb=aaa[$ccc];
		
		var fff=JSON.stringify($bbb.pir);
		var jjj=fff.replace(/￥/,'');
		var ggg=jjj.replace(/"/g,"");
		var hhh=parseFloat(ggg)
		var sum=parseFloat((cont*hhh*100)/100);
		sum=sum.toFixed(2);
		var dfg=parseFloat(sum);
		ddd=parseFloat((ddd*100+dfg*100))/100;
		
		$str1='<div class="div09"><div class="div03">'+
					'<input type="checkbox" checked=checked class="xuan"/>'+
					'<span class="spa3"><img src="{{imgsrc0}}"/></span>'+
					'<p class="ppppp3">'+
						'<span>{{describe}}</span>'+
						'<span class="spa4">包装单位：袋</span>'+
					'</p>'+
				'</div>'+	
					'<p class="ppppp4">{{heft}}</p>'+
					'<p class="ppppp4">{{pir}}</p>'+
					'<p class="ppppp4" data-pir="{{pir}}" data-id="{{ID}}">'+
						'<span class="spa5">-</span>'+
						'<span class="spa6">'+cont+'</span>'+
						'<span class="spa7">+</span>'+
					'</p>'+
					'<p class="ppppp4" id="sum">'+sum+'</p>'+
					'<p class="ppppp4" id="del" data-id="{{ID}}">删除</p></div>'
		var str4=format($str1,$bbb);
		$(".div02").append(str4);	
	}
	//总计
	$(".div02").parent().children('.div04').children('p').children('.spa9').children('#all').html(ddd);
},"json")


//加按钮
$("#main").on("click",".spa7",function(){
	$eee=$(this).parent();
	var pir121=$eee.data('id');
	var cont=getCookie(pir121);
	var cont1=cont;
	cont++;
	$eee.children(".spa6").html(cont);
	var pir111=$eee.data('pir');
	var pir112=pir111.replace('￥','');
	var pir113=parseFloat(pir112)
	var sum=parseFloat(pir113*100*cont/100);
	$hhh=$eee.parent();
	//小计。。。。。
	$hhh.children("#sum").html(sum);
	setCookie(pir121,cont,7);
	var sum1=parseFloat(pir113)*100*(cont-cont1)/100;
	//总计。。。。。
	if($(this).parent().parent().children(".div03").children(".xuan").prop('checked')){
	ddd=(ddd*100+sum1*100)/100;
	ddd=ddd.toFixed(2);
	ddd=parseFloat(ddd);
	allMoney(parseFloat(ddd))
	}else{
		ddd=ddd.toFixed(2);
		ddd=parseFloat(ddd);
		allMoney(parseFloat(ddd));
	}
})

//减按钮
$("#main").on("click",".spa5",function(){
	$eee=$(this).parent();
	var pir121=$eee.data('id');
	var cont=getCookie(pir121);
	var cont1=cont;
	cont--;
	if(cont<1){
		cont=1;
	}
	$eee.children(".spa6").html(cont);
	var pir111=$eee.data('pir');
	var pir112=pir111.replace('￥','');
	var pir113=parseFloat(pir112)
	var sum=parseFloat(pir113*100*cont/100);
	$hhh=$eee.parent();
	//小计。。。。。
	$hhh.children("#sum").html(sum);
	setCookie(pir121,cont,7);
	var sum1=parseFloat(pir113*100*(cont-cont1))/100;
	
	//总计
	if($(this).parent().parent().children(".div03").children(".xuan").prop('checked')){
		ddd=(ddd*100+sum1*100)/100;
		ddd=ddd.toFixed(2);
		ddd=parseFloat(ddd);
		allMoney(parseFloat(ddd));
	}else{
		ddd=ddd.toFixed(2);
		ddd=parseFloat(ddd);
		allMoney(parseFloat(ddd));
	}
})

//删除
$(".div02").on("click","#del",function(){
		
		if(confirm("是否确认删除")){
			var id = $(this).data("id");
			var $item = $(this).parents('.div09').first();
			$item.remove();
			delCookie(id);
		}
		
		
	});

//删除全部
$("#main").on("click","#spa8",function(){
		if(confirm("是否确认删除")){
			var $item = $(this).parents().parents().children('.div02');
			$item.remove();
			for(var j=0;j<arr1.length;j++){
				delCookie(arr1[j])
			}
		}
		
		
	});
//继续购物
$("#main").on("click",'.spa10',function(){
	open("index.html")
})
//总计
$(".div02").on("change",".xuan",function(){
	if($(this).prop('checked')){
		$(this).prop('checked',true)
		$sum=$(this).parent().parent('.div09').children('#sum').html();
		console.log($sum,ddd);
		
		ddd=ddd+parseFloat($sum);
		ddd=ddd.toFixed(2);
		ddd=parseFloat(ddd);
		allMoney(ddd);
	}else{
		$(this).prop('checked',false)
		$sum=$(this).parent().parent('.div09').children('#sum').html();
		console.log($sum,ddd)
		ddd=ddd-parseFloat($sum);
		ddd=ddd.toFixed(2);
		ddd=parseFloat(ddd);
		allMoney(ddd);
		
	}
})

function allMoney(data){
	$(".div02").parent().children('.div04').children('p').children('.spa9').children('#all').html(data);
}
