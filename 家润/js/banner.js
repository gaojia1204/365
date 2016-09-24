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



