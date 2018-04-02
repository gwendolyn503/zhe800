;(function(){
	function login(){
		$('.main-po div').on('click',function(){
			$('.scan').toggle();
			$('.write').toggle();
		});
		$('.pwlogin').on('click',function(){
			$('.scan').toggle();
			$('.write').toggle();
		});

		$('.more').on('click',function(){
			if($('.morelg').is(':hidden')){
				$('.sanjiao').addClass("shang");
				$('.morelg').show();
			}else{
				$('.morelg').hide();
				$('.sanjiao').removeClass("shang");
			}
		});
		//alert($('input:checked').val());
		$('h3').on('mousemove',function(){
				if($('input:checked').val()==200){
				$('.input2').hide();
				$('.user_keywords').hide();
			}else if($('input:checked').val()==100){
				$('.input2').show();
				$('.user_keywords').show();
			}
		});
		function addCookie(key,value,day){
					var date=new Date();//创建日期对象
					date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
					document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
				}
		$('.sub').on('click',function(){
					var $username=$('.input1').val();
					var $password=$('.input2').val();
					$.ajax({
						type:'post',
						url:'php/login.php',
						data:{//将用户名和密码传输给后端
							name:$username,
							pass:$password
						},
						success:function(data){//请求成功，接收后端返回的值
							if(data==2){//用户名或者密码错误
								$('.mes').html('用户名或者密码错误');
								$('.input2').val('');
							}else{//成功时，将用户名给cookie
								addCookie('UserName',$username,7);
								location.href='index.html';//跳转到首页
							}
						}
					})
				});
		
			
		

	}










	login();

})();






	