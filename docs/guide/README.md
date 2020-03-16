---
pageClass: getting-started
---

# 语法

[![Build Status](https://travis-ci.org/Marco-hui/JavaScript-outline.svg?branch=master)](https://travis-ci.org/Marco-hui/JavaScript-outline)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/Marco-hui/JavaScript-outline/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/Marco-hui/JavaScript-outline.svg)](https://github.com/Marco-hui/JavaScript-outline/releases)
[![GitHub stars](https://img.shields.io/github/stars/Marco-hui/JavaScript-outline.svg?style=social&label=Stars)](https://github.com/Marco-hui/JavaScript-outline)

<!-- <CodingAD /> -->
<!-- [[toc]] -->

## 语言介绍
### JavaScript的诞生
JavaScript 诞生于 1995 年。由Netscape(网景公司)的程序员Brendan Eich(布兰登)与Sun公司联手开发一门脚本语言, 最初名字叫做Mocha，1995年9月改为LiveScript。12月，Netscape公司与Sun公司（Java语言的发明者）达成协议，后者允许将这种语言叫做JavaScript。这样一来，Netscape公司可以借助Java语言的声势。

1996年3月， Netscape公司的浏览器Navigator2.0浏览器正式内置了JavaScript脚本语言. 此后其他主流浏览器逐渐开始支持JavaScript.
### js版本
>JavaScript这种语言的基本语法结构是由ECMAScript来标准化的, 所以我们说的JavaScript版本一般指的是ECMAScript版本.

- 1997年7月，ECMAScript 1.0发布。
- 1998年6月，ECMAScript 2.0版发布。
- 1999年12月，ECMAScript 3.0版发布。
- 2007年10月，ECMAScript 4.0版草案想要提交ECMA组织, 但由于4.0版的目标过于激进, 改动太大, 并且微软,谷歌等大公司极力反对；一直到2008年7月ECMA开会决定，中止ECMAScript 4.0的开发（即废除了这个版本）
- 2009年12月，ECMAScript 5.0版正式发布
- 2011年6月，ECMAscript 5.1版发布
- 2015年6月，ECMAScript 6正式发布，并且更名为“ECMAScript 2015”。

### js的优势
目前苹果公司的Safari, 谷歌的Chrome,微软的IE等几乎全部浏览器都支持JavaScript, 基于JavaScript开发的库和框架数不胜数, 例如: jQuery,Angular, React等…

JavaScript将在前端和服务器端(Node.js)有更好的发展。
### js用途
它的主要目的是，验证发往服务器端的数据、增加 Web互动、加强用户体验度等。可用于开发网站、游戏、移动端app等
### js语言的组成
>javascript = ECMAScript + BOM + DOM

1. 核心(ECMAScript)
2. 浏览器对象模型(BOM)
3. 文档对象模型(DOM)

### JS和H5的关系
h5全称html5,不是单纯的html的第5个版本，而是一项最新的web标准，是html、css、javascript等技术的集合

### 编辑工具
- sublime Text
- HBuilder
- Dreamweaver
- Notepad++等

## 语法
### js代码的编写位置
 - html属性
```html
<a href="javascript:alert(100)"></a>
```
 - script标签
 ```html
<script type="text/javascript">
    alert('你好')
</script>
```
  script标签属性<br>
    *  type:类型(可选)<br>
    *  src :js文件路径<br>
    带src属性的script标签内不能写js代码
 - js文件
 独立的js文件需要引入页面才能执行
```html
<script type="text/javascript" src="js/common.js"><script>
```
### JS变量的定义、关键字
- 变量定义(使用var关键字)：变量是存储信息的容器
  ```javascript
  var age; //var 是关键字，age是变量名
  ```

- 赋值：
  ```javascript
  age = 20;
  ```

- 定义的同时赋值：
  ```javascript
  var age=20;
  ```

- 可以一次定义多个变量：
  ```javascript
  var name="zhangsan", age=18, weight=108;
  ```
### JS代码规范
- JS变量的命名规范
  * 变量名必须是数字,字母,下划线_和美元符$组成;
  * 第一个字符不能为数字
  * 不能使用关键字或保留字
  * 标识符区分大小写，如：age和Age是不同的变量。但强烈不建议用同一个单词的大小写区分两个变量。
  * 变量命名尽量遵守驼峰原则: myStudentScore
  * 变量命名尽量见名知意

- 保持代码缩进 
- JS语句的末尾尽量写上分号;
- 运算符两边都留一个空格, 如 var n = 1 + 2;
- 注释
  * 单行注释：//注释内容
  * 多行注释（和CSS注释一样）
    + /*注释内容*/
    + 多行注释不能嵌套
### JS数据类型
- 基本数据类型
  * Number：数字
  * NaN：是一个特殊的值，即非数值(Not a Number)。数学运算无法得到数字时，就会返回NaN
    + 不代表任何值，也不等于任何值，甚至自己都不等于自己
    + 任何数据与它运算都返回NaN
    + isNaN(a)：用来判断a到底是不是非数字,返回布尔值
  * String：字符串，用引号（单/双引号）括起来的内容
  * Boolean: 布尔类型
    + Boolean 类型有两个值：true和false
- 引用数据类型
  * Array：数组
  * Object：对象
- 特殊数据类型
  * Null <br />
    Null 类型是一个只有一个值的数据类型，即特殊的值 null。它表示一个空对象引用(指针)，而 typeof 操作符检测 null 会返回 object
  * Undefined <br />
    Undefined类型只有一个值，即特殊的 undefined，在使用 var 声明变量，但没有对其初始化时，这个变量的值就是 undefined
    + 与not defined的区别(not defined:未声明)
- 数据类型判断
  * typeof
    ```javascript
    typeof 'html5'; //=>string
    typeof 100; //=>number
    typeof true //=>boolean
    typeof null //=>object
    ```
- 数据类型转换
  * 基本数据类型转换：利用内置函数进行转换
  
  | 值(a) | 转换为 | 字符串String(a) | 数字Number(a) | 布尔值Boolean(a) |
  |--|--|--|--|--|
  | undefined | => | "undefined" | NaN | false |
  | null | => | "null" | 0 | false |
  | true | => | "true" | 1 |  |
  | false | => | "false" | 0 |  |
  | "" | => |  | 0 | false |
  | "1.2" | => |  | 1.2 | true |
  | "one" | => |  | NaN | true |
  | 0 | => | "0" |  | false |
  | -0 | => | "0" |  | false |
  | NaN | => | "NaN" |  | false |
  | 1 | => | "1" |  | true |
  * 隐式转换 <br />
  如果运算不能进行下去，内部就会尝试进行数据类型的转换 <br />
  支持隐式转换的运算：逻辑运算、关系运算、算术运算

## 运算
### 算术运算
- +, -, *, /, %：加,减,乘,除,取余(取模) 
  <p>"+" 的特殊用法：字符串拼接（+号两侧只要有一个是字符串则为字符串拼接）<p/>
- toFixed(num): 在数字后面调用，num为小数位，有四舍五入的功能，得到一个字符串
- parseInt()：取整
- parseFloat()：取小数
### 赋值操作
- = <br />
  `var num1=10;//表示把10赋值给num1变量`
- +=：在原来的内容基础上追加内容 <br />
  `str += 'test' <==> str = str + 'test'`
- -= <br />
  `var n=10; n -= 2 <==> n = n - 2`
- *=,/=,%=
### 关系运算（返回布尔值）
- ==(等于), !=(不等于)
- <(小于)、>(大于)、<=(小于等于)、>=(大于等于)
- === (恒等于/全等于)：比较的时候要求值和类型都相等（不会进行类型隐式转换）
- !==（不全等于）
- 关系运算符的比较规则:
  1. 数字和数字比较, 直接比较大小
  2. 数字和字符串比较, 字符串转换为数字后再比较
  3. 字符串和字符串比较, 进行字符的ASCII码值比较
----
**[练习]**
- 为抵抗洪水，战士连续作战89小时，编程计算共多少天零多少小时？
- 小明要到美国旅游，可是那里的温度是以华氏度为单位记录的。它需要一个程序将华氏温度（80度）转换为摄氏度，并以华氏度和摄氏度为单位分别显示该温度。
  >`【提示】摄氏度与华氏度的转换公式为：摄氏度 = 5/9.0*(华氏度-32)`
----
### 逻辑运算（返回布尔值）
- && ：逻辑与
- || ：逻辑或
  >&& 比 || 优先级高
- ! : 逻辑非
  >!true => false <br />
  !false => true
### 一元运算
- ++ : 自增1（在原来的数值基础上加1）
- ––：自减1（在原来的数值基础上加1）
- 前置：
  ```javascript
  var num = 10;
  ++num;--num;
  ```
  返回值：返回值是加1（减1）之后的值
- 后置：
  ```javascript
  var num = 10;
  num++;num--
  ```
  返回值：返回值是没加1（减1）之前的值
### 进制数的介绍
- 二进制 <br />
`var num = 0b10101101;`
- 八进制 <br />
`var num = 0o0123`
- 十进制
- 十六进制 <br />
`var num = 0xef9302;`
<br />

**相互转换**
- 十进制转其他
  ```javascript
  var number = 20;
  number.toString(2); //转成2进制
  number.toString(8);//转成8进制
  ```
- 其他转十进制
  ```javascript
  var x='110';  
  parseInt(x,2);  
  parseInt(x,8);  
  parseInt(x,16);
  ```
- 其他转其他 <br />
  先用parseInt转成十进制再用toString转到目标进制
---
**[练习]**
- var k=0; 计算：k++ + ++k +k +k++的值
- 给定一个三位数，分别把这个数字的百位、十位、个位算出来并显示。
- 判断输入框输入的年份是否为闰年
  >`能被4整除但不能被100整除，或者能被400整除的才叫闰年`
- 计算两个文本框的加减乘除，并把结果写入第三个文本框
---
## 参考资料
### 关键字
下面列出js语法中的常见关键字，在参数命名时切勿与关键字重复。 <br />
`break`、`do`、`instanceof`、`typeof`、`case`、`else`、`new`、`var`、`catch`、`finally`、`return`、`void`、`continue`、`for`、`switch`、`while`、`debugger`、`function`、`this`、`with`、`default`、`if`、`throw`、`delete`、`in`、`try`
### 保留字
`class`、`enum`、`extends`、`super`、`const`、`export`、`import`
###  操作符优先级
下面运算符优先级从上到下由高到低
| 运算符 | 描述 |
|--|--|
|., [], ()  | 对象成员存取、数组下标、函数调用、分组等|
|++, –, ~, !, delete, new, typeof, void | 一元运算符|
|*, /, % |乘法、除法、取模|
|+, -  |  加法、减法、字符串连接|
|<, <=, >, >=, instanceof  |  关系比较、检测类实例|
|\=\=,  !=, \=\=\=, !==  |  等于、恒等(全等)|
|&& | 逻辑与|
| \|\| | 逻辑或|
|?: | 三元运算条件|
|=, +=, -=, *=, /=, %=  | 赋值、运算赋值|
|,  | 多重赋值、数组元素|
### 术语
- 表达式的概念
  + 由运算符和操作数（变量或常量）组成的式子
  + 算术运算符组成的式子叫算术表达式
  + 关系运算符组成的式子叫关系表达式或者条件表达式
  + 逻辑运算符组成的式子叫做逻辑表达式
- 返回值：运算后得到的值
- 程序的三大流程控制
  >我们的计算机在执行一个程序的时候，最基本的方式是一条语句接一条语句的执行。但不可能所有的问题都能用顺序执行方式就能解决，总会有一些跳转。采用结构化的程序设计，可以大大提高开发程序的速度、提高程序的可读性、程序运行的速度和效率
  + 顺序：从上朝下执行的代码就是顺序
  + 分支(选择)：根据不同的情况，执行对应代码
  + 循环：重复做一件事情