 <?php
 	//跨域
// 指定允许其他域名访问  
	header('Access-Control-Allow-Origin:*');  
	// 响应类型  
	header('Access-Control-Allow-Methods:*');  
	// 响应头设置  
	header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
	require "conn.php";//引入数据库连接的文件
	if(isset($_POST['tel']) || isset($_POST['submit'])){
		$username=@$_POST['tel'];
	}else{
		exit('非法操作');
	}
	
	
	
	$query="select * from register where tel='$username'";
	$result=mysql_query($query);
	
	if(mysql_fetch_array($result)){//如果有值代表用户名存在。
		echo 1;//有重复
	}else{
		echo 2;//没有重复
	}
	if(isset($_POST['submit']) && $_POST['submit']=="同意协议并注册"){
		$tel=$_POST['tel'];//username：表单的名称
		$pass=md5($_POST['pass']);
		$query1="insert register(tel,pass) values('$tel','$pass')";
		mysql_query($query1);
		header('location:../login.html');
	}
	
?>