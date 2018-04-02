;(function($){
    $(function(){
        $.ajax({
            type:"get",
            url:"php/index.php",
            dataType:'json'
        }).done(function(d){
            var data=d;
            fang(data.pic7);
            fa();
           addcokie();
           
        })
        //放大镜的拼接
        function fang(arr){
            $('.min img').attr('src',arr[0].url1);
            $('.max img').attr('src',arr[0].url1);
            $('.li1 img').attr('src',arr[0].url1).attr('sid',arr[0].sid);
            $('.li2 img').attr('src',arr[0].url2);
            $('.li3 img').attr('src',arr[0].url3);
            $('.li4 img').attr('src',arr[0].url4);
            $('.li5 img').attr('src',arr[0].url5);
        }

//............................
        function fa(){
        // 1.鼠标覆盖min 显示放大镜
            $('.min').mousemove(function(e) {
                $('.max').show()
                $('.enlarge').show()
                // 放大镜移动
                // pageX/Y 相对于body内容的x/y(滚动条变化时跟随变化)
                                // offset().left 相当于 offsetLeft
                var x = e.pageX - $('.min').offset().left - $('.enlarge').width() / 2
                var y = e.pageY - $('.min').offset().top - $('.enlarge').height() / 2
                // 最大移动范围
                var maxX = $('.min').width() - $('.enlarge').width()
                var maxY = $('.min').height() - $('.enlarge').height()
                // 范围约束
                if (x <= 0) {
                    x = 0;
                } else if (x >= maxX) {
                    x = maxX;
                }
                if (y <= 0) {
                    y = 0;
                } else if (y >= maxY) {
                    y = maxY;
                }
                // 设置位置
                $('.enlarge').css({
                    left: x,
                    top: y
                })
                // 2.放大镜移动 max上的图片等比例移动
                var yidongX = x / maxX
                var yidongY = y / maxY
                $('.max>img').css({
                    left: -yidongX * ($('.max>img').width() - $('.max').width()),
                    top: -yidongY * ($('.max>img').height() - $('.max').height())
                })
            }).mouseout(function() {
                $('.enlarge').hide()
                $('.max').hide()
            }) 
            $('.ul1 li').on('click',function(){
                var i=$(this).index();
              
               $('.min img').attr('src',$(this).children('img').attr('src'));
               $('.max img').attr('src',$(this).children('img').attr('src'));
            });
//...................................
    $('.share').on('mousemove',function(){
        $('.ul2').show();
    });
    $('.share').on('mouseout',function(){
        $('.ul2').hide();
    });
//.........................加号.................
    var num=1;
    $('.jia').on('click',function(){
        num++;
        $('input:text').val(num);
        if(num>=2){
            $('.jian').css('background-position-x','-1px').css('background-position-y','-210px');
        }
    });
    $('.jian').on('click',function(){
        num--;
        $('input:text').val(num);
    });
}
//.....................................
    function addcokie(){
        var sidarr=[];
        var numarr=[];
    
        function getcookievlaue(){
            if(getCookie('cartsid')){
                sidarr=getCookie('cartsid').split(',');
            }
                    
            if(getCookie('cartsid')){
                numarr=getCookie('cartnum').split(',');
            }
        }
        
        $('.tijiao').on('click', function(){
                var sid = $('.li1 img').attr('sid');//当前按钮对应图片的sid
                getcookievlaue();//获取cookie值，放到对应的数组中
                if ($.inArray(sid, sidarr) != -1) {//存在
                    var num=parseInt(numarr[$.inArray(sid,sidarr)])+parseInt($('.jia-num').val());
                    numarr[$.inArray(sid,sidarr)]=num;
                    addCookie('cartnum', numarr.toString(), 7);
                   
                }else{//不存在
                    sidarr.push(sid);//将当前id添加到数组里面。
                    addCookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
                    numarr.push($('.jia-num').val());//走这里数量都是1.
                    addCookie('cartnum', numarr.toString(), 7);
                  
                }
                console.log('cartnum', numarr.toString(), 7);
            });

    }  
//........................................................................

    })
})(jQuery);


///////////////////////////////////////////////////////////////////////////////



//..............................ajax

