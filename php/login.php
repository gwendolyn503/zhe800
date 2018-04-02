<?php
require "conn.php";

if(isset($_POST['name'])){//前端ajax传输过来的额
	$username=$_POST['name'];//获取
	$password=md5($_POST['pass']);
}else{
	exit('非法操作');//避免直接预览此页面
}

//利用前端传来的值和数据库里面的值进行比较.
$query="select * from register where tel='$username' and pass='$password'";
$result1=mysql_query($query);


if(mysql_fetch_array($result1)){
	echo 1; //值存在，运行登录
}else{
	echo 2;  //不存在
}






	
	
