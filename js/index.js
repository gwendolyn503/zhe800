//轮播图
;(function(){
	/*setTimeout(function(){
		$("html,body").scrollTop(0);
	},50);*/
	function banner(){
			$.ajax({
			type:"get",
			url:"http://127.0.0.1/js1711/zhe800/php/index.php",
			async:true,
			dataType:'json',
		}).done(function(d){
			var data=d;	  
	    	var arr=data.pic1;
			var html='<ul class="lunbo-bul fl">';
			for(var i=0;i<arr.length;i++){
				html+=`
					<li class="">
							<a href="">
								<img src="${arr[i].ur1l}">
							</a>
							<ul class="lunbo-mul">
								<li>
									<a href="">
										<img src="${arr[i].url2}">
									</a>
									
								</li>
								<li>
									<a href="">
										<img src="${arr[i].url3}">
									</a>
									
								</li>
							</ul>
						</li>
				`
			}
			html+='<ul>';
			$('.lunbo1').append(html);
//..........................................banner..........................................
	function Bannerjs(){
		this.btn=$('.index-btn');
		this.btns=$('.index-btn b');
		this.num=0;
		this.lis=$('.lunbo-bul>li');
		this.timer1=null;
		this.uls=$('.lunbo-bul');

		
	}
	Bannerjs.prototype.init=function(){
		var that=this;
		//console.log(this.num);
		//给按钮添加点击事件
		this.btns.first().addClass('btn-active');
		this.lis.eq(0).addClass('tsw');
		this.btns.on('mouseover',function(){
			that.num=$(this).index();
			that.btns.eq(that.num).addClass('btn-active').siblings('b').removeClass('btn-active');
			that.lis.eq(that.num).addClass('tsw').siblings('li').removeClass('tsw');
		});
		this.timer1=setInterval(function(){
			that.num++;
			if(that.num==that.btns.length){
				that.btns.eq(0).addClass('btn-active').siblings('b').removeClass('btn-active');
				that.lis.eq(0).addClass('tsw').siblings('li').removeClass('tsw');
				that.num=0;
			}else{
				that.btns.eq(that.num).addClass('btn-active').siblings('b').removeClass('btn-active');
				that.lis.eq(that.num).addClass('tsw').siblings('li').removeClass('tsw');
			}
			//console.log(that.num);
		},5000);
		this.uls.mouseover(function(){
			clearInterval(that.timer1);
		});
		
		this.uls.mouseout(function(){
			that.timer1=setInterval(function(){
			that.num++;
			if(that.num==that.btns.length){
				that.btns.eq(0).addClass('btn-active').siblings('b').removeClass('btn-active');
				that.lis.eq(0).addClass('tsw').siblings('li').removeClass('tsw');
				that.num=0;
			}else{
				that.btns.eq(that.num).addClass('btn-active').siblings('b').removeClass('btn-active');
				that.lis.eq(that.num).addClass('tsw').siblings('li').removeClass('tsw');
			}
			//console.log(that.num);
		},5000);
		});
	

};
		new Bannerjs().init();
//..............................浮动条................................................................
	
	$(document).on('scroll',function(){
		var scrolltop=$(document).scrollTop();
		if(scrolltop>=300){
			$('.float-top').show();
		}else{
			$('.float-top').hide();
		}

		
	//	console.log(scrolltop);
	});
	
//.................................................................................................


})}
	banner();
})();
///.............................精选banner...................................................
;(function(){
	function jingxuan(){
			$.ajax({
			type:"get",
			url:"http://127.0.0.1/js1711/zhe800/php/index.php",
			async:true,
			dataType:'json',
		}).done(function(d){
			var data=d;	  
	    	var arr2=data.pic2;
			var html='<ul class="jingxuan-top-ul clear">';
			for(var i=0;i<arr2.length;i++){
				html+=`
					<li>
						<a href="">
							<img src="${arr2[i].url1}">
							<span>韩都衣舍</span>
						</a>
						<a href="">
							<img src="${arr2[i].url2}">
							<span>韩都衣舍</span>
						</a>
						<a href="">
							<img src="${arr2[i].url3}">
							<span>韩都衣舍</span>
						</a>
					</li>
				`
			}
			html+='<ul>';
			$('.jingxuan-img').append(html);
//.....................................................................................

	function jingxuan(){
		this.hezi=$('.jingxuan-main-top');
		this.ul=$('.jingxuan-top-ul');
		this.li=$('.jingxuan-top-ul li');
		this.left=$('.jingxuan-left');
		this.right=$('.jingxuan-right');
		this.liwidth=this.li.eq(0).width();
		this.num=0;
		this.timer=null;
	}
	jingxuan.prototype.init=function(){
		//改变布局
		//console.log(this.li.length)
		var that=this;
		var $first=this.li.first().clone();
		var $last=this.li.last().clone();

		this.ul.append($first);
		this.ul.prepend($last);
		this.li=$('.jingxuan-top-ul li');//要再取一次，执行顺序问题
		this.ul.css('width',this.li.length*this.liwidth+'px').css('left',-this.liwidth+'px')
		//console.log(this.li.length,this.liwidth);
		//显示左右箭头
		this.hezi.hover(function(){
			that.left.show();
			that.right.show();
			clearInterval(that.timer);
		},function(){
			that.left.hide();
			that.right.hide();
			that.timer=setInterval(function(){
			that.right.click();
		},2000);
		});
		//点击左右箭头
		this.right.on('click',function(){
			that.num++;
			that.tabswitch();
		});
		this.left.on('click',function(){
			that.num--;
			that.tabswitch();
		});
		//自动轮播
		this.timer=setInterval(function(){
			that.right.click();
		},2000);
	};
	jingxuan.prototype.tabswitch=function(){
		var that=this;
		this.ul.stop(true,true).animate({
			left:-that.liwidth*(that.num+1)
		},function(){
			if(parseInt(that.ul.css('left'))==-that.liwidth*(that.li.length-1)){
				that.ul.css('left',-that.liwidth+'px');
				that.num=0;
			}
			if(parseInt(that.ul.css('left'))==0){
				that.ul.css('left',-that.liwidth*(that.li.length-2));
				that.num=that.li.length-2;
			}
		});
	};

/*	jingxuan.prototype.autoplay=function(){
		this.right.click();
	}*/
//.........................................................................
new jingxuan().init();
})}
	jingxuan();

})();
////////////////////////////////////////logo////////////////////////////////////////////////////////////////////////////
;(function(){
	function logo(){
			$.ajax({
			type:"get",
			url:"http://127.0.0.1/js1711/zhe800/php/index.php",
			async:true,
			dataType:'json',
		}).done(function(d){
			var data=d;	  
	    	var arr3=data.pic3;
	    	//alert(arr3);
			var html='<ul class="jingxuan-main-logo-ul clear">';
			for(var i=0;i<arr3.length;i++){
				html+=`
					<li>
						<a href="">
							<img src="${arr3[i].url1}">
						</a>
					</li>
				`
			}
			html+='</ul>';
			$('.jingxuan-main-logo').append(html);
/////////////////////////////////秒杀倒计时/////////////////////////////////////////////////////////////////////////
		var hour=new Date();
		var time=hour.getHours();
		if(time<0){
			$('.miaosha-head-right ul li').eq(0).addClass('miaosha-all').siblings('li').removeClass('miaosha-all');
		}else if(time<9){
			$('.miaosha-head-right ul li').eq(1).addClass('miaosha-all').siblings('li').removeClass('miaosha-all');
		}else if(time<12){
			$('.miaosha-head-right ul li').eq(2).addClass('miaosha-all').siblings('li').removeClass('miaosha-all');
		}else if(time<15){
			$('.miaosha-head-right ul li').eq(3).addClass('miaosha-all').siblings('li').removeClass('miaosha-all');
		}else if(time<19){
			$('.miaosha-head-right ul li').eq(4).addClass('miaosha-all').siblings('li').removeClass('miaosha-all');
		}else if(time<21){
			$('.miaosha-head-right ul li').eq(5).addClass('miaosha-all').siblings('li').removeClass('miaosha-all');
		}else{
			$('.miaosha-head-right ul li').eq(6).addClass('miaosha-all').siblings('li').removeClass('miaosha-all');
		}

})}
	logo();
})();
/////////////////////////////////秒杀banner/////////////////////////////////////////////////////
;(function(){
	function miaosha(){
			$.ajax({
			type:"get",
			url:"http://127.0.0.1/js1711/zhe800/php/index.php",
			async:true,
			dataType:'json',
		}).done(function(d){
			var data=d;	  
	    	var arr4=data.pic4;
			var html='<ul class="miaosha-ul fl">';
			for(var i=0;i<arr4.length;i++){
				html+=`
					<li>
						<a href="">
							<div class="miaosha-ul-img">
								<img src="${arr4[i].url1}">
								<div class="miaosha-up">
									<span>
										<i class="miaosha-up-i">${arr4[i].title1}</i>${arr4[i].yuanjia}
									</span>
								</div>
							</div>
							<div class="miaosha-price">
								<span>￥<em>${arr4[i].price}</em></span>
							</div>
							<div class="miaosha-title">
								<p>${arr4[i].title2}</p>
							</div>
						</a>
					</li>
				`
			}
			html+='</ul>';
			$('.miaosha-main-top').append(html);
//...............................................................................................................................
	function miaosha(){
		this.hezi=$('.miaosha-main-top');
		this.ul=$('.miaosha-ul');
		this.li=$('.miaosha-ul li');
		this.left=$('.miaosha-left');
		this.right=$('.miaosha-right');
		this.liwidth=this.li.eq(0).width();
		this.num=0;
		this.timer1=null;
	}
	miaosha.prototype.init=function(){
		//改变布局
		var that=this;
		for(i=0;i<=5;i++){
			this.ul.append(this.li.eq(i).clone());
		}
		for(i=11;i>=6;i--){
			this.ul.prepend(this.li.eq(i).clone());
		}
		
		this.li=$('.miaosha-ul li');//要再取一次，执行顺序问题
		this.ul.css('width',(this.li.length+18)*this.liwidth+'px').css('left',-(this.liwidth+18)*6+'px')
		//显示左右箭头
		this.hezi.hover(function(){
			that.left.show();
			that.right.show();
			clearInterval(that.timer1);
		},function(){
			that.left.hide();
			that.right.hide();
			that.timer1=setInterval(function(){
			that.right.click();
		},2000);
		});
		//点击左右箭头
		this.right.on('click',function(){
			that.num+=6;

			that.tabswitch();
		});
		this.left.on('click',function(){
			that.num--;
			that.tabswitch();
		});
		//自动轮播
		this.timer1=setInterval(function(){
			that.right.click();
		},2000);
	};
	miaosha.prototype.tabswitch=function(){
		var that=this;
		
		this.ul.stop(true,true).animate({
			left:-(that.liwidth+18)*(that.num)
			
		},function(){
			console.log(that.ul.css('left'),-that.liwidth*(that.li.length-6))
			if(parseInt(that.ul.css('left'))<=-that.liwidth*(that.li.length-6)){
				that.ul.css('left',-that.liwidth*6-6*18+'px');
				that.num=0;
			}
			if(parseInt(that.ul.css('left'))==0){
				that.ul.css('left',-that.liwidth*(that.li.length-12));
				that.num=that.li.length-6;
			}
		});
	};

//.........................................................................
new miaosha().init();

//.........................................................................			

})}
	miaosha();
})();
///////////////////////////////////////////////////////////热销推荐////////////////////////////////////////
;(function(){
	function tuijian(){
			$.ajax({
			type:"get",
			url:"http://127.0.0.1/js1711/zhe800/php/index.php",
			async:true,
			dataType:'json',
		}).done(function(d){
			var data=d;	  
	    	var arr5=data.pic5;
			var html='<ul class="tuijian-ul fl">';
			for(var i=0;i<arr5.length;i++){
				html+=`
					<li>
						<a href="">
							<img src="${arr5[i].url1}">
						</a>
					</li>
				`
			}
			html+='</ul>';
			$('.tuijian-img').append(html);
//...............................................................................................................................
			
})}
	tuijian();
})();
///////////////////////////////////////更新//////////////////////////////////////////
;(function(){
	function gengxin(){
			$.ajax({
			type:"get",
			url:"http://127.0.0.1/js1711/zhe800/php/index.php",
			async:true,
			dataType:'json',
		}).done(function(d){
			var data=d;	  
	    	var arr6=data.pic6;
			var html='<ul class="gengxin-ul clear">';
			for(var i=0;i<arr6.length;i++){
				html+=`
					<li>
						<div class="con">
							<div class="con-img">
								<a href="">
									<img src="${arr6[i].url1}">
								</a>
							</div>
							<div class="sx">
								<a href="">${arr6[i].shangxin}</a>
								<span>${arr6[i].shengyu}</span>
							</div>
							<div class="bj">
								<span class="banjia">${arr6[i].banjia}</span>
								<span class="shoucang">收藏品牌</span>
							</div>
							<span class="biaoqian">
								<img src="${arr6[i].url2}">
							</span>
						</div>
					</li>
				`
			}
			html+='</ul>';
//....................................懒加载..............................................
			var num=0;

			$('.gengxin-img').append(html);
			$(window).scroll(function(){
				var scrolltop=$(document).scrollTop();
				var height=$(document).height();
				console.log(scrolltop,height)
				if(scrolltop>=height*.5){
					$('.gengxin-img').append(html);
					num++;
				}
				if(num==10){
					$(window).off('scroll');
				}
			});
//...............................................................................................................................
			
})}
	gengxin();
})();