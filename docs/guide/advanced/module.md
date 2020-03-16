# 模块化开发
项目中的js管理，以前我们可能会这样做代码分工：一个js文件下包含多个模块
```javascript
//modules.js ----
var moduleA = {......}
var moduleB = {......}
var moduleC = {......}
```
引入如下：
```javascript
<script src="modules.js"></script>
```
不管这个页面用到了几个模块，你都要把整个文件加载进来，于是我们就想，随着代码越来越多，维护就变得特别困难（特别在团队项目中），于是我们就把每个模块单独分开，于是就变成了这样：
```javascript
//moduleA.js ----  
var moduleA = {......} 

//moduleB.js ----    
var moduleB = {......}

//moduleC.js ----
var moduleC = {......}
```
但是，js文件加载是同步的，加载的时候，浏览器会停止网页渲染，加载文件越多，网页失去响应的时间就会越长，而且如果各个模块之间存在相互引用的依赖关系，我们还得考虑加载的顺序，所以我们这样引入JS：
```html
<script src="common.js"></script>
<script src="moduleB.js"></script>
<script src="moduleC.js"></script>
<script src="moduleA.js"></script>
```
假设A依赖C（A引用了C中的方法），而C依赖B，ABC里面都用到了common.js，你必须小心翼翼的确保它们的加载顺序是正确的，这样的文件越多维护起来非常麻烦，于是require.js出现了

## requirejs
![requireJs](https://img-blog.csdnimg.cn/20200315203136108.png)

RequireJS的目标是鼓励代码的模块化，它使用在js中加载js文件的方式代替传统的script加载步骤。可以用它来加速、优化代码，但其主要目的还是为了代码的模块化

**requirejs的出现主要解决两个问题：**

  - 实现js文件的异步加载，避免网页失去响应；
  - 管理模块之间的依赖性，便于代码的编写和维护。

官网：[http://requirejs.org/](http://requirejs.org/) <br />
中文网：[http://www.requirejs.cn/](http://www.requirejs.cn/)

### 使用
按照requireJS当中的规范要求，你只需加载一个文件就可以了，并指定页面主模块main.js，由于requirejs默认的文件后缀名是js，所以可以把main.js简写成main
  ```html
  <script src ="require.js" data-main ="main"></script>
  ```
  - data-main属性的作用是，指定网页程序的主模块，main.js文件如下
    ```javascript
    //main.js-----
    requirejs(['common','moduleA','moduleB','moduleC'],function(jq){
      //这里的代码等common，moduleA，moduleB，moduleC模块都加载完成后执行
      //但不保证以上模块的加载顺序
    });
    ```
  - 基础路径baseUrl <br />
    任何文件的加载都是基于此路径
    + 默认值是加载require.js的HTML文件所在的路径
    + 但如果用了data-main属性，则主模块所在的目录就变成baseUrl
### 常用方法
- 配置参数：requirejs.config/require.config
- 加载模块：requirejs/require
- 定义模块：define
### 配置config
require.js你可以从官网下载，这个config.js你必须自己完成。不用担心，它写起来非常简单:
```javascript
//config.js-----
requirejs.config({
  baseUrl : "js",
  paths : {
     "jquery": "lib/jquery.1.11.3"
  }
});
```
- baseUrl：指定基础路径
- paths：path映射那些不直接放置于baseUrl下的模块名。设置path时起始位置是相对于baseUrl的
  + 以上配置路径 “jquery”: “lib/jquery.1.11.3” <br />
    冒号左边jquery模块名称，右边则是文件路径，注意文件没有后缀名，因为在require看来所有的模块都是JS文件
    > 真实路径为：js/lib/jquery.1.11.3.js
- shim配置 <br />
  严格意义上来说，requirejs必须加载由define()函数定义的模块，但有一些插件，本身未return任何对象或函数，只是对某个框架的扩展，例如 jquery.scroll.js 该怎么实现模块化加载，答案是shim配置
  ```javascript
  requirejs.config({
    baseUrl: "js",
    paths: {
      "jquery" :  "lib/jquery.1.11.3",
      "jquery.scroll" : "lib/jquery.scroll"
    },
    shim: {
      "jquery.scroll": {
        deps: ["jquery"],//设置依赖
        exports: "jQuery.fn.scroll"
      }
    }
  });
  ```
### 加载模块
以上配置好后，就可以加载模块了，如加载jquery只需如下代码
```javascript
requirejs(['jquery'],function(jq){
  //这里的jq就是jquery，原理请看模块的定义
});
```
### 定义模块define
- 使用defined方法定义模块必须符合require的规范要求，格式如下：
```javascript
//把commonjs定义成模块
//在引入模块时，回调函数中得到什么取决于定义模块时返回了什么
define(function(){
  return {
    getStyle : function(){ ........ },
    randomColor : function(){ ......... }
  }
});
```
- 如果定义的模块需依赖其他模块，格式如下，这种模块加载方式称为：预加载
```javascript
//本模块依赖jquery
//第一个参数为依赖模块，可以是多个，这里的路径同样基于baseUrl或path
define(["jquery"],function(jq){
  return {
    start: function(){
      jq("#box").show(1000);
      console.log("模块提供的start方法");
    }
  }
});
```
- 如果需要在define内部依赖其他模块，则写法如下，这种模块加载方式称为：延迟加载
```javascript
define(["require","jquery"],function(require){
  var a = require('./js/a');
});
```

## 模块化开发的优点
讲了这么多，requirejs所倡导的模块化开发，好处在哪里呢？
- 避免命名冲突 <br />
  你有没有发现，整个项目当中，再也没有出现一个全局变量？即使两个框架名字冲突了也没关系
- 更好的依赖处理 <br />
  你有没有发现，你再也没有考虑过加载顺序的问题？
- 按需加载 <br />
  更好的代码组织方式，而且你肯定没有发现，所有的JS文件的加载过程，已经变成了异步
- 面向对象编程 <br />
  最后，你还发现，用了requireJS，你的代码想不写成面相对象都难

## 模块化规范与框架
- commonJS：通用的模块规范（同步）<br />
  模块化框架：nodejs

- AMD：异步模块定义规范（预加载）<br />
  模块化框架：requirejs

- CMD：通用模块定义规范（延迟加载）<br />
  模块化框架：seajs <br />
  官网：[http://seajs.org](http://seajs.org)
