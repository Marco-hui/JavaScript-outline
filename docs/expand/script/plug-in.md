# 插件封装

下面列出开发过程中常用的一些插件的封装，供大家参考

## 日期格式化插件
```javascript
if(!Date.prototype.format){
  Date.prototype.format=function(fmt){
    // 这里面的this指向实例，即谁调用format方法this就指向谁
    var o={
      "M+": this.getMonth() + 1,
      "D+": this.getDate(),
      "h+": this.getHours(),
      "m+": this.getMinutes(),
      "s+": this.getSeconds()
    };

    // 配置年份（年份比较特殊，这里单独处理）
    // 若有年份，则匹配年份，利用RegExp.$1可以获取第一个分组内容
    if(/(Y+)/.test(fmt)){
      // true 说明有传入年份
      var res=String(this.getFullYear()).substr(4-RegExp.$1.length);
      fmt=fmt.replace(RegExp.$1,res);
    }

    // 配置其他
    for(var attr in o){
      var reg=new RegExp('('+attr+')')
      if(reg.test(fmt)){
        var res = RegExp.$1.length<2 ? o[attr] : ('00'+o[attr]).substr(String(o[attr]).length);
        fmt=fmt.replace(RegExp.$1,res);
      }
    }
    return fmt;
  }
}
```
使用示例：`new Date().format('YYYY-MM-DD hh:mm:ss')`

## Ajax请求插件
```javascript
function Ajax(opt){
  var Default={
    type:'get',
    async:true,
    jsonpName:'callback'
  }
  var opt=Object.assign({},Default,opt);
  this.init(opt);
}

Ajax.prototype={
  constructor:Ajax,
  init(opt){
    opt.type=opt.type.toLowerCase();
    var params='';
    for(var attr in opt.data){
      params += attr + "=" + opt.data[attr] + '&' ;
    }
    params=params.slice(0,-1);

    var arr_status=[200,304];

    var type=['get','jsonp'];
    if(type.indexOf(opt.type) >= 0){
      opt.url = (opt.url.indexOf('?') === -1 ? '?' : '&') + params;
      params=null;
    }

    if(opt.type==='jsonp'){
      var callbackName='getDate'+Date.now();
      var script;

      window[callbackName]=function(data){
        var res=data;
        try{
          res=JSON.parse(res);
        }catch(err){
          try{
            res=eval('('+res+')');
          }catch(error){
            res=res;
          }
        }
        opt.success(res);

        script.parentNode.removeChild(script);
      }

      script=document.createElement('script');
      script.src=opt.url+'&'+opt.jsonpName+'='+callbackName;
      document.body.appendChild(script);

      return;
    }

    var xhr=null;
    try{
      xhr = new XMLHttpRequest();
    }catch(error){
      try{
        // ie低版本浏览有多种异步请求的实现
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
      }catch(err){
        try{
          xhr = new new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e){
          alert('你的浏览器太low，赶紧换电脑');
        }
      }
    }

    xhr.onload=function(){
      if(arr_status.indexOf(xhr.status)>=0){
        var res=xhr.responseText;
        try{
          res=JSON.parse(res);
        }catch(err){
          try{
            res=eval('('+res+')');
          }catch(error){
            res=res;
          }
        }
        opt.success(res);
      }
    }
    xhr.open(opt.type,opt.url,opt.async)
    if(opt.type==='post'){
      xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
    }
    xhr.send(null);
  }
}

function ajax(opt){
  return new Ajax(opt);
}

ajax.get = function(opt){
  opt.type = 'get';
  return new Ajax(opt);
}
ajax.post = function(opt){
  opt.type = 'post';
  return new Ajax(opt);
}
ajax.jsonp = function(opt){
  opt.type = 'jsonp';
  return new Ajax(opt);
}
```

## 轮播图插件
```css
/* jquery-mcarousel.css */

ul,li{margin: 0;padding: 0;}
.mcarousel{position:relative;overflow: hidden;}
.mcarousel ul{position:absolute;left:0;top:0;overflow: hidden;list-style:none;}
.mcarousel ul.horizontal li{float:left;}
.mcarousel ul.fade li{position: absolute;top:0;left:0}
.mcarousel img{display:block;}
.mcarousel .page{position:absolute;left:50%;transform: translateX(-50%);bottom:10px;}
.mcarousel .page span{display:inline-block;width: 15px;height: 15px;overflow: hidden;background: #ccc;border-radius: 50%;margin:0 3px;text-indent:-1000px;}
.mcarousel .page span.active{background: rgb(215,6,59);}

.mcarousel > span{position: absolute;top:50%;left:10px;transform:translate(0,-50%);width:30px;height:60px;line-height:60px;text-align:center;background-color: rgba(0,0,0,.3);color:#fff;cursor:pointer;}
.mcarousel .btn-next{left:auto;right:10px;}
```
```javascript
// jquery-mcarousel.js

;(function($){
  $.fn.mCarousel = function(options){
    var defaults = {
      width:options.width,
      height:options.height,

      autoPlay:true,

      showSmall:false,

      showButton:true,

      showPage:true,

      duration:4000,

      // 轮播类型：fade:淡入淡出, vertial:垂直滚动, horizontal:水平滚动, show:幻灯片
      type:'vertical',

      index:0
    }

    this.each(function(){
      var $this = $(this);

      var opt = $.extend({},defaults,options);


      var carousel = {
        init:function(){
          
          var $ul = $('<ul/>');
          $ul.html(opt.imgs.map(function(item){
            return `<li><a href="#"><img src="${item}"/></a></li>`;
          }).join(''));

          $this.append($ul);

          $this.addClass('mcarousel');
          $ul.addClass(opt.type);
          if(opt.type === 'horizontal'){
            $ul.width(opt.width*opt.imgs.length);
          }else if(opt.type === 'fade'){
            $ul.css({
              width:opt.width,
              height:opt.height
            });
          }

          $this.css({
            width:opt.width,
            height:opt.height
          });

          if(opt.showPage){
            var $page = $('<div/>').addClass('page');

            var page_html = '<span></span>'.repeat(opt.imgs.length);
            $page.html(page_html);

            $page.appendTo($this);
          }else if(opt.showSmall){
            var $small = $('<div/>').addClass('small');
            var $cloneUl = $ul.clone().removeClass().attr('style','');
            $cloneUl.appendTo($small);

            $small.appendTo($this);

            $small.width(opt.imgs.length*40);
          }

          if(opt.showButton){
            var $btnPrev = $('<span/>').addClass('btn-prev').html('&lt;');
            var $btnNext = $('<span/>').addClass('btn-next').html('&gt;');

            $this.append([$btnNext,$btnPrev]);
          }

          if(opt.autoPlay){
            this.start();

            $this.on('mouseenter',()=>{
              this.stop();
            }).on('mouseleave',()=>{
              this.start();
            })
          }

          $this.on('click','.page span',function(){
            opt.index = $(this).index();
            carousel.move();
          })

          .on('click','.btn-prev',function(){
            opt.index--;
            carousel.move();
          }).on('click','.btn-next',function(){
            opt.index++;
            carousel.move();
          });

          this.move();
        },
        move:function(){
          if(opt.index>=opt.imgs.length){
            opt.index = 0;
          }else if(opt.index<0){
            opt.index = opt.imgs.length-1;
          }

          var $ul = $this.find('ul');

          var params = {};

          if(opt.type === 'vertical'){
            params.top = -opt.index*opt.height;
            $ul.stop().animate(params);
          }else if(opt.type === 'horizontal'){
            params.left = -opt.index*opt.width;
            $ul.stop().animate(params);
          }

          else if(opt.type === 'fade'){
            $ul.children().stop().eq(opt.index).animate({opacity:1}).siblings('li').animate({opacity:0}); 
            // $ul.children().stop().eq(opt.index).fadeIn(2000).siblings('li').fadeOut(2000); 
          }

          if(opt.showPage){
            $this.find('.page').children().eq(opt.index).addClass('active').siblings('span').removeClass();
          }
        },
        stop:function(){
          clearInterval(opt.timer);
        },
        start:function(){
          opt.timer = setInterval(function(){
            opt.index++;
            this.move();
          }.bind(this),opt.duration);
        }
      }

      carousel.init();
    });
    
    return this;
  }
})(jQuery);
```
使用示例：
```html
<head>
  <link rel="stylesheet" type="text/css" href="./jquery-mcarousel.css" />
  <script type="text/javascript" src="./jquery.js"></script>
</head>
<body>
  <div id="banner"></div>
  <script type="text/javascript">
    $('#banner').mCarousel({
      imgs:['../img/index_banner1.jpg','../img/index_banner2.jpg','../img/index_banner3.jpg','../img/index_banner4.jpg'],
      width: 800,
      height: 454,
      type:'fade'
    })
  </script>
</body>
```

## 放大镜插件
```css
/* jquery-mZoom.css */

.m-zoom{position: relative;width: 300px;overflow: hidden;}
.m-zoom img{display: block;}
.m-zoom .minzoom{display:none;position: absolute;width:30px;height:30px;border:1px solid #fc0;background-color:#ff0;filter:alpha(Opacity=30);background-color: rgba(255,255,0,.3);}
.m-zoom-big{display:none;position: absolute;width:400px;height:300px;overflow:hidden;border:1px solid #ccc;}
.m-zoom-big img{position: absolute;left:0;right:0;min-width: 1000px;}
```
```javascript
// jquery-mZoom.js

;(function($){
  $.fn.mZoom=function(options){
    var defaults={
      width:400,
      height:300,
      position:'right',
      gap:15
    }
    return this.each(function(){
      var opt=$.extend({},defaults,options);
      opt.position=opt.position.toLowerCase();
      var $small=$(this);
      $small.addClass('m-zoom');
      var $smallImg=$small.find('img');
      init();
      function init(){
        var $big=$('<div/>').addClass('m-zoom-big');
        
        $big.css({width:opt.width,height:opt.height});
        var left,top;
        switch(opt.position){
          case "right":
            left=$small.offset().left + $small.outerWidth() + opt.gap;
            top=$small.css('top');
            break;
          case "bottom":
            left=$small.offset().left;
            top=$small.offset().top + $small.outerHeight() + opt.gap;
            break;
          case "left":
            left=$small.offset().left - $big.outerWidth() - opt.gap;
            top=$small.offset().top;
            break;
          case "top":
            left=$small.offset().left;
            top=$small.offset().top - $big.outerHeight() - opt.gap;
            break;
        }
        $big.css({
          left:left,
          top:top
        })

        var $bigImg=$('<img/>').attr('src',$smallImg.attr('data-big') || $smallImg[0].src);
        $bigImg.appendTo($big);
        $big.insertAfter($small);

        var $minzoom=$('<span/>').addClass('minzoom');
        $minzoom.appendTo($small);

        // 鼠标移入小图区域显示大图和放大镜
        var rate;
        $small.on('mouseenter',function(){
          $bigImg.attr('src',$smallImg.attr('data-big') || $smallImg[0].src);
          $minzoom.show();
          $big.show();
          rate=$bigImg.outerWidth()/$smallImg.outerWidth();
          $minzoom.css({
            width:opt.width/rate,
            height:opt.height/rate
          })
        }).on('mouseleave',function(){
          $minzoom.hide();
          $big.hide();
        }).on('mousemove',function(e){
          var top=e.pageY - $small.offset().top - $minzoom.outerHeight()/2;
          var left=e.pageX - $small.offset().left - $minzoom.outerWidth()/2

          if(left<0){
            left=0;
          }else if(left>$small.innerWidth()-$minzoom.outerWidth()){
            left=$small.innerWidth()-$minzoom.outerWidth();
          }
          if(top<0){
            top=0;
          }else if(top>$small.innerHeight()-$minzoom.outerHeight()){
            top=$small.innerHeight()-$minzoom.outerHeight();
          }

          $minzoom.css({
            top:top,
            left:left
          })
          $bigImg.css({
            top:-top*rate,
            left:-left*rate
          })
        })
      }
    })
  }
})(jQuery);
```
使用示例：
```html
<!-- 定义容器main_goods，容器中包img标签，img显示小图，并将大图放于自定义参数中 -->
<div id="main_goods"><img src="../img/small.jgp" data-big="../img/big.jgp"/></div>
<script type="text/javascript">
  // 直接调用，传入参数
  $('#main_goods').mZoom({
    width:450,
    height:450,
    gap:-35.5
  });
</script>
```