# Bom

## BOM的概念
BOM 是Browser Object Model（浏览器对象模型）的缩写，提供与浏览器窗口进行交互的对象。JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C, 而BOM缺乏标准。这也是各种浏览器不兼容的根源所在

## window对象
window对象是BOM的核心, 是最顶层的对象，所有对象都是通过它延伸出来的，如图:
![window对象](https://img-blog.csdnimg.cn/20200311225305499.png)
### 全局作用域
- 定义在全局环境下的变量都会成为window对象的属性
- 把变量定义在函数体里，可以有效减少全局环境下的变量冲突，避免污染全局环境
- 在函数内部不用var声明的变量会成为全局变量，即window对象的属性
- window对象可以在代码中省略，如window.alert()可以写成alert();
- 通过var在全局作用域下声明的变量用delete无法删除
  ```javascript
  var obj = {name:'xxx'}
  //删除对象的属性用delete：
  delete obj.name;
  ```
### window对象下的属性
#### 常用属性
- 浏览器窗口尺寸
  + innerWidth/innerHeight, //表示浏览器窗口”可视区域”尺寸
  + outerWidth/outerHeight //表示整个浏览器窗口的尺寸
- 滚动相关
  + scrollX/scrollY //获取浏览器窗口滚动条滚动过的距离
  + scrollTo(x,y) //设置浏览器滚动距离
  + scrollBy(xnum,ynum) //设置基于当前位置滚动的距离，可以为负数
#### 常用方法
- 系统对话框
  + alert(msg) //弹出对话框
  + confirm(msg) //弹出警告框，返回布尔值
  + prompt(msg,default) //弹出输入框，返回消息或null
  > 以上三个方法都会暂停代码的执行
  + open(url,name,[options]) : 打开一个新窗口并返回新 window 对象
    * name:不命名会每次打开新窗口，命名的第一次打开新窗口,之后在这个窗口中加载
    * options为字符串：'width=400,height=400,top=200,left=200'
    * opener父窗口对象，通过open方法打开的窗口才有opener对象
  + close(): 关闭窗口
  + print(): 调出打印对话框
#### 属性对象
- document: 文档对象，让我们可以在js脚本中直接访问页面元素(DOM)
> 在DOM章节详细讲解

- history: 历史对象,包含窗口的浏览历史，可以实现后退
  + 属性：
    * length 返回浏览器历史列表中的 URL 数量。
  + 方法：
    * back() 加载 history 列表中的前一个 URL。
    * forward() 加载 history 列表中的下一个 URL。
    * go() 加载 history 列表中的某个具体页面，支持负数。
    ```javascript
    history.go(2);//向前两个页面
    history.go(-2);//后退两个页面
    ```
- location: <br />
  location是BOM最有用的对象之一，保存着当前窗口中加载文档的相关信息，还提供一些导航功能，它是个很特别的对象，既是window的属性，也是document的属性
  + 属性：
    * hash 设置或返回从井号 (#) 开始的 URL（锚）==>哈希值。
    * href 设置或返回完整的 URL。
    * search 设置或返回从问号 (?) 开始的 URL（查询部分）。
    ```javascript
    encodeURI();//转码
    decodeURI();//解码
    ```
    ::: tip
    修改以上属性(hash除外)都会刷新当前页面，并生成历史纪录
    :::
  + 方法：
    * reload() 重新加载当前文档，带参数true表示不使用缓存刷新页面。
- navigator: <br />
  导航对象, 包含所有有关访问者浏览器的信息，通常用于检测浏览器类型

  + appName 浏览器名称
  + appVersion 浏览器版本
  + platform 操作系统
  + userAgent 用户代理信息，通过该属性可以获取浏览器及操作系统信息
  + geolocation 获取地理位置信息
### window对象常用事件
- onload //页面资源全部加载完成后触发这个事件
- onscroll //窗口滚动条滚动时触发
- onresize //窗口大小改变时触发
---
**[练习]**
- 点击按钮实现浏览器前进后退
- 顶部悬浮(吸顶菜单)
- 点击回到顶部动画效果
- js实现居中弹窗
- 页面之间数据传递
---
