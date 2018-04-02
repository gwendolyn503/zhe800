;(function(){
	function zhuce(){
		var aInput=$('input');
		var oSpan=$('.main-l-form span'); 
		var oEm=$('.main-l-form em');
		var bstop1=false;
		var bstop2=false;
		var bstop3=false;
		//oSpan.eq(0).val('111');
		aInput.eq(0).on('focus',function(){
			oSpan.eq(0).html('为了您的账户安全，请使用常用手机号').addClass('onf').removeClass('onb');
			aInput.eq(0).val('');
			oEm.eq(0).next().html('').parent().removeClass();
		});
		aInput.eq(1).on('focus',function(){
			oSpan.eq(1).html('6-26位字母、数字或半角符号').addClass('onf').removeClass('onb');
			aInput.eq(1).val('');
			oEm.eq(1).next().html('').parent().removeClass();
		});
		aInput.eq(2).on('focus',function(){
			oSpan.eq(2).html('请再次输入您的密码').addClass('onf').removeClass('onb');
			aInput.eq(2).val('');
			oEm.eq(2).next().html('').parent().removeClass();
		});

		aInput.eq(0).on('blur',function(){
			var mytel=aInput.eq(0).val();
			if(mytel==''){
				oSpan.eq(0).html('请输入手机号码').addClass('onb');
				bstop1=false;
			}else if(!checkIsMobil(mytel)){
					oSpan.eq(0).html('手机号码格式错误').addClass('onb');
					bstop1=false;
				}else{
					$.ajax({
						type:"post",
						url:"http://127.0.0.1/js1711/zhe800/php/register.php",
						async:true,
						data:{tel:mytel}
					}).done(function(d){
						//var data=JSON.parse(d);
						//console.log(d);
						if(d==2){
							oEm.eq(0).next().html('').parent().addClass('gou');
							bstop1=true;
						}else{
							oSpan.eq(0).html('手机号码已注册').addClass('onb');
							bstop1=false;
						}
					})
				//	oEm.eq(0).parent().addClass('gou');
				}				
		});
		aInput.eq(1).on('blur',function(){
			var mypass=aInput.eq(1).val();
			console.log(mypass.length);
			if(mypass==''){
				oSpan.eq(1).html('请输入密码').addClass('onb');
				bstop2=false;
			}else if(mypass.length<6){
				oSpan.eq(1).html('密码过短，最短支持6个字符').addClass('onb');
				bstop2=false;
			}else if(mypass.length>24){
				oSpan.eq(1).html('密码过长，最长支持24个字符').addClass('onb');
				bstop2=false;
			}else if(!checkIsRegisterUserName(mypass)){
				oSpan.eq(1).html('密码应为字母、数字或半角符号的组合').addClass('onb');
				bstop2=false;
			}else{
				oEm.eq(1).next().html('').parent().addClass('gou');
				bstop2=true;
			}	
		});
		aInput.eq(2).on('blur',function(){
			var repass=aInput.eq(2).val();
			var mypass=aInput.eq(1).val();
			if(repass==''){
				oSpan.eq(2).html('请输入密码').addClass('onb');
				bstop3=false;
			}else if(repass.length<6){
				oSpan.eq(2).html('密码过短，最短支持6个字符').addClass('onb');
				bstop3=false;
			}else if(repass.length>24){
				oSpan.eq(2).html('密码过长，最长支持24个字符').addClass('onb');
				bstop3=false;
			}else if(repass==mypass){
				oEm.eq(2).next().html('').parent().addClass('gou');
				bstop3=true;
			}else{
				oSpan.eq(2).html('两次密码输入不一致').addClass('onb');
				bstop3=false;
			}
		});
			
		var check=aInput.eq(3).val();
		$('form').on('submit',function(){
					if(!(bstop1 && bstop2 && bstop3 && check==on)){
						return false;//阻止按钮跳转。
					}
		});

//.......................................................................


}
//校验手机号码
function checkIsMobil(s) {
    var patrn = /^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/;
    if (!patrn.exec(s)) return false
    return true
}
//校验登录名：只能输入6-24个以字母开头、可带数字、“_”、“.”的字串
function checkIsRegisterUserName(s){
    //var patrn =/^(?![0-9]+$)(?![a-zA-Z]+$)(?![\u0000-\u00FF]+$)[\da-zA-Z\u0000-\u00FF]{6,24}$/;
   var patrn =/^(?!.*\s)(?!^[\u4E00-\u9FA5]+$)(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^\u0000-\u00FFa-zA-Z\d]+$)^.{6,24}$/;
    if (!patrn.exec(s)) return false
    return true
}
$('.more').on('click',function(){
		if($('.morelg').is(':hidden')){
			$('.sanjiao').addClass('dingwei');
			$('.morelg').show();
		}else{
			$('.morelg').hide();
			$('.sanjiao').removeClass('dingwei');
		}
	});	
	
	zhuce();
})();