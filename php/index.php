<?php
	require "conn.php";

	$query='select * from banner';		

	$result=mysql_query($query);

	$arr=array();

	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	//第二个数据库表格
	$query2='select * from jingxuan';

	$result2=mysql_query($query2);

	$arr2=array();

	for($i=0;$i<mysql_num_rows($result2);$i++){
		$arr2[$i]=mysql_fetch_array($result2,MYSQL_ASSOC);
	}

	//第三个数据库表格
	$query3='select * from logo';

	$result3=mysql_query($query3);

	$arr3=array();

	for($i=0;$i<mysql_num_rows($result3);$i++){
		$arr3[$i]=mysql_fetch_array($result3,MYSQL_ASSOC);
	}
	//第四个数据表格
	$query4='select * from miaosha';

	$result4=mysql_query($query4);

	$arr4=array();

	for($i=0;$i<mysql_num_rows($result4);$i++){
		$arr4[$i]=mysql_fetch_array($result4,MYSQL_ASSOC);
	}
	//第五个数据表格
	$query5='select * from tuijian';

	$result5=mysql_query($query5);

	$arr5=array();

	for($i=0;$i<mysql_num_rows($result5);$i++){
		$arr5[$i]=mysql_fetch_array($result5,MYSQL_ASSOC);
	}
	//第六个数据表格
	$query6='select * from gengxin';

	$result6=mysql_query($query6);

	$arr6=array();

	for($i=0;$i<mysql_num_rows($result6);$i++){
		$arr6[$i]=mysql_fetch_array($result6,MYSQL_ASSOC);
	}
	//第七个数据表格----详情页购物车
	$query7='select * from gouwu';

	$result7=mysql_query($query7);

	$arr7=array();

	for($i=0;$i<mysql_num_rows($result7);$i++){
		$arr7[$i]=mysql_fetch_array($result7,MYSQL_ASSOC);
	}
//跨域
// 指定允许其他域名访问  
	header('Access-Control-Allow-Origin:*');  
	// 响应类型  
	header('Access-Control-Allow-Methods:*');  
	// 响应头设置  
	header('Access-Control-Allow-Headers:x-requested-with,content-type'); 


	 class index{ 	
	 }
	 
	$d=new index();

	$d->pic1=$arr;
	$d->pic2=$arr2;
	$d->pic3=$arr3;
	$d->pic4=$arr4;
	$d->pic5=$arr5;
	$d->pic6=$arr6;	
	$d->pic7=$arr7;
	echo json_encode($d);

?>