# PHP

- PHP是一种通用开源服务端脚本语言，将程序嵌入到HTML文档中去执行，结果以纯 HTML 形式返回给浏览器
- PHP: Hypertext Preprocessor “超文本预处理器”，1994年由Rasmus Lerdorf创建，刚刚开始仅仅是为了要维护他本人个人网页而制作的一个简单程序（Perl语言编写），原名Personal Home Page（PHP由此得名），后用C语言重新编写，改名Hypertext Preprocessor

**PHP能做什么：**

- 生成动态页面内容
- 创建、打开、读取、写入文件
- 收集ajax数据
- 发送和接收cookie
- 添加、删除、修改您的数据库中的数据
- 限制用户访问您的网站上的一些页面
- 加密数据

## 安装
### 环境配置
  - 安装 Web 服务器Apache
  - 安装 PHP
  - 安装MySQL数据库
  > 对于初学者建议使用集成的服务器组件（如：[WampServer](http://www.wampserver.com/)），它已经包含了 PHP、Apache、Mysql 等服务,免去了开发人员将时间花费在繁琐的配置环境过程。

### IDE安装
> IDE: Integrated Development Environment (集成开发环境)，推荐使用PhpStorm

PhpStorm官方下载地址：[http://www.jetbrains.com/phpstorm/download/](http://www.jetbrains.com/phpstorm/download/)

## 语法
- 默认文件扩展名是 “.php”。
- 通常包含 HTML 标签和一些 PHP 脚本代码。
### 分界标示符
```php
<?php //开始 

//...php代码

?> //结束
```
### 注释
> 与js一样，分单行和多行注释
- 单行注释：//
- 多行注释：/**/
### 输出语句
- echo
  可以输出一个或多个字符串（字符串可以包含HTML标签），速度较快，一般用于向前端返回数据
  ```php
  <?php
    //输出一个字符
    echo "Hello world!<br>";

    //输出多个字符
    echo "This", " string", " was", " made", " with multiple parameters.";
  ?>
  ```
- print_r <br />
  打印关于变量的信息，适用于数组、对象的打印，一般用于测试
- var_dump <br />
  判断一个变量的类型与长度,并输出变量的数据类型和数值，一般用于测试
### 变量
#### 命名规则
- 以 $ 符号开始，后面跟着变量的名称（$称为标识符，不属于变量组成部分）
- 只能包含字母数字字符以及下划线（A-z、0-9 和 _ ）
- 必须以字母或者下划线字符开始
- 不能包含空格
- 区分大小写
  ```php
  //PHP 没有声明变量的命令。
  //变量在第一次赋值时被创建：
  <?php
    $txt="Hello world!";
    $x=5;
    $y=10.5;
  ?>
  ```
#### 作用域
- 全局变量 <br />
  在函数外部定义的变量，称为全局变量，全局变量可以在任意位置访问
  + 在函数中访问全局变量
    * $GLOBALS <br />
    格式：$GLOBALS[变量名]，其中变量名不带$。
    ```php
    <?php
      $x='global x';
      function myTest(){
        //echo $x;//报错

        //正确写法
        echo $GLOBALS['x'];

        //在函数中创建全局变量
        $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
      } 
      myTest();
      echo $y;
    ?>
    ```
    * global 关键字
    ```php
    <?php
      $x=5;
      $y=10;
      function myTest(){
        global $x,$y;
        $y=$x+$y;
      }
      myTest();
      echo $y; // 输出 15
    ?>
    ```
- 局部变量 <br />
  函数内部声明的变量是局部变量，仅能在函数内部访问
#### 超级全局变量
- $GLOBALS <br />
  是PHP的一个包含所有全局变量的数组，可以在任意位置使用
- $_SERVER <br />
  是一个包含了头信息(header)、路径(path)等信息的数组
- $_POST / $_GET <br />
  被广泛应用于收集表单数据，常用于ajax请求等操作
- $_COOKIE <br />
  用于收集前端发送过来的cookie数据
- $_REQUEST <br />
  变量包含了 $_GET、$_POST 和 $_COOKIE 的内容
- $_SESSION <br />
  服务器版cookie
- $_FILES

### 常量
- 规范
  + 命名规则与变量一致，但常量名不需要加 $ 修饰符。
  + 常量值被定义后，在脚本的其他任何地方都不能被改变。
  + 默认是全局作用域，可以在整个运行的脚本的任何地方使用。
  + 常量名建议全部大写
- 格式

  `define(name,value)`
  + name：必选参数，常量名称，即标志符。
  + value：必选参数，常量的值。
  ```
  define("EN_NAME", "Marco");
  ```
### 运算符
- 算术运算符
  + +, -, *, /, %
  + 取反-
- 赋值运算符
- 递增/递减运算符
- 比较运算符
  + 等于：`x == y`
  + 恒等于：`x === y`
  + 不等于：`x != y` ，`x <> y`
  + 不恒等于：`x !== y`
  + 大于：`x > y`
  + 小于：`x < y`
  + 大于等于：`x >= y`
  + 小于等于：`x <= y`
- 逻辑运算符
  + 与：`x and y`，`x && y`
  + 或：`x or y`，`x || y`
  + 异或：`x xor y`
  + 非：`!x`
- 三元运算符 <br />
  格式：`expr1 ? expr2 : expr3`
### 条件语句
> 与javascript一致
- if语句
- switch语句
### 循环语句
> 与javascript一致
- while
- do…while
- for

## 数据类型
- String（字符串）
- Integer（整型）
- Float（浮点型）
- Boolean（布尔型）
- Array（数组）
- Object（对象）
- NULL（空值）
### String
- 并置运算符“.”
  ```php
  <?php 
    $txt1="你是我的小呀小苹果"; 
    $txt2="怎么爱你都不嫌多"; 
    echo $txt1 . ", " . $txt2; 
  ?>
  ```
- strlen() <br />
  获取字符串长度，得到的字符的字节数
- strpos() <br />
  查找某个字符在字符串中的索引，如果未找到匹配，则返回 false <br />
  `strpos("Hello world!","world");//=>6`
### Array
> 数组是一个能在单个变量中存储多个值的特殊变量。
- 类型
  + 数值数组 - 带有数字索引值的数组
  + 关联数组 - 带有指定的键的数组，每个键关联一个值
  + 多维数组 - 包含一个或多个数组的数组
- 创建数组 <br />
  使用array()函数创建
  ```
  //数值数组
  $cars=array("Volvo","BMW","Toyota");

  //关联数组
  $age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
  ```
- 数组方法
  + count() 获取数组长度
  + in_array() 判断某个值是否存在数组中
  + array_slice() 从数组中取出一段
- 遍历数组
  + for <br />
  一般用于遍历数值数组
  + foreach() <br />
  一般用于遍历关联数组
  ```php
  <?php
    //遍历数值数组：for循环
    $cars=array("Volvo","BMW","Toyota");
    $arrlength=count($cars);
    for($x=0;$x<$arrlength;$x++){
      echo $cars[$x] . "<br>";
    }

    //遍历关联数组：foreach..as
    $age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
    foreach($age as $x=>$x_value){
      echo "Key=" . $x . ", Value=" . $x_value;
      echo "<br>";
    }
  ?>
  ```
- 数组排序
  + sort() 对数组进行升序排列
  + rsort() 对数组进行降序排列
  + asort() 根据关联数组的值，对数组进行升序排列
  + ksort() 根据关联数组的键，对数组进行升序排列
  + arsort() 根据关联数组的值，对数组进行降序排列
  + krsort() 根据关联数组的键，对数组进行降序排列

## 函数
### 内建函数
PHP 的真正威力源自于它的函数。在 PHP 中，提供了超过 1000 个内建的函数。
### 自定义函数
- 参数
  + 参数默认值
- return返回值
  ```
  function add($x,$y){
    $total=$x+$y;
    return $total;
  }
  ```
## 面向对象
### 类
- 定义一个类
  + 类使用 class 关键字后加上类名定义。
  + 类名后的一对大括号{}内可以定义变量和方法。
  + 类的变量使用 var 来声明, 变量也可以初始化值。
  + 函数定义类似 PHP 函数的定义，但函数只能通过该类及其实例化的对象访问。
  ```php
  <?php
    class Person{
      // 成员属性
      var $name;
      var $age = 18;

      //成员方法
      function setName($name){
        $this->name = $name;
      }

      function getAge(){
        return $this->age;
      }
    }
  ?>
  ```
- 实例化对象 <br />
  `$p = new Person();`
- 调用成员属性/方法 <br />
  在实例化对象后，我们可以使用‘->’操作该对象调用成员属性/方法
  ```
  $p->setName('Marco');
  $p->name;
  ```
- 构造函数 <br />
  __construct构造函数是一种特殊的方法。主要用来在创建对象时初始化对象，写在创建对象的语句中。
  ```
  class Web{
    function __construct( $par1, $par2 ) {
      $this->url = $par1;
      $this->title = $par2;
    }
  }
  ```
- 指针对象
  + $this
    >this是指向对象实例的一个指针
  + self
    >self是对类本身的一个引用
  + parent
    >parent是对父类的引用
- 访问控制 <br />
  PHP 对属性或方法的访问控制，是通过在属性/方法前面添加关键字来实现。
  + public（公有，默认）：公有的类成员可以在任何地方被访问。
  + private（私有）：私有的类成员只能在类本身中访问。
  + protected（受保护）：受保护的类成员只能在类本身、子类、父类中访问。
  + static（静态）：声明类属性或方法为静态，就可以不实例化类而直接访问
    * 访问方式：`类名::方法`
:::tip
- 类属性必须定义为公有，受保护，私有之一。如果用 var 定义，则被视为公有。
- 类中的方法可以被定义为公有，私有或受保护。如果没有设置这些关键字，则该方法默认为公有。
:::
### 继承
使用关键字 extends 来继承一个类，继承后子类就拥有父类的属性和方法（私有除外），格式如下：
```
class Man extends Person {
  // 添加成员函数
  function setAge($age){
    $this->age = $age;
  }

  //重写方法
  function setName($name){
    $this->name = $name;
    return $name;
  }
}
```
> 私有属性/方法不能被继承
## 生成动态页面
### 动态页面传参
- $_GET
- $_POST
- $_REQUREST
### session
- session_start()：启动新会话
- session_destroy()：销毁一个会话中的全部数据
- time()：获取当前时间，返回自1970 年 1 月 1 日 0时到当前时间的秒数
  ```
  session_start();

  if(!isset($_SESSION['last-access'])){
      $_SESSION['last-access'] = time();
  }

  //超过60s为超时
  $overtime = (time() - $_SESSION['last-access']) > 60;
  ```

## 编写后台数据API接口
利用php编写数据接口
### 本地数据
#### 直接返回数据
- json_encode() <br />
  把数组转成字符串
  + php5.4+ 使用JSON_UNESCAPED_UNICODE防止中文转义
- json_decode(json,assoc) <br />
  把字符串转成数组/对象
  + json：待解码的 json string 格式的字符串
  + assoc：默认false,返回object, 当该参数为 true 时，将返回array
#### 文件的读取与写入
- fopen(filename,mode)：打开文件 <br />
  **使用fopen函数打开文件时，你首先需要明确：**
  + 打开文件干什么？是读文件中的数据呢，还是将数据写入文件，亦或者读写文件
  + 另外你需要考虑如果文件中已经存在相关数据，你是覆盖原有文件中的数据呢，还是仅仅将新数据添加至文件末尾
  + 文件模式:
    * `r` 以只读方式打开文件，从文件头开始读
    * `r+` 以读写方式打开文件，写入时以追加的方式写入文件
    * `w` 以写入方式打开文件，从文件头开始写。如果文件不存在则尝试创建，如果文件存在，则先删除文件中的内容
    * `w+` 以读写方式打开文件，从文件头开始读写。如果文件不存在则尝试创建，如果文件存在，则先删除文件中的内容
    * `a` 以写入方式打开，从文件末尾开始追加写。如果文件不存在则尝试创建
    * `a+` 以读写方式打开，从文件末尾开始追加写入或者读。如果文件不存在则尝试创建。
- fread()：读取内容
- fwrite()：写入内容
- fclose()：关闭文件,避免资源占用
- filesize()：读取文件字符长度
  ```php
  //以读取模式打开文件
  $myfile = fopen('./data/weibo.json', 'r');

  //读取文件内容
  $content = fread($myfile, filesize('./data/weibo.json'));

  //关闭文件，减少资源占用
  fclose($myfile);
  ```
#### 文件上传
通过使用 PHP 的全局数组 $_FILES，你可以从客户计算机向远程服务器上传文件。
- 上传方式
  + 传统表单提交
    * method: “post”
    * enctype: “multipart/form-data”
  + ajax提交
    * formData
    > 可以异步上传二进制文件
    * post
- 文件信息
  + $_FILES["file"]["name"] 上传文件的名称
  + $_FILES["file"]["type"] 上传文件的类型
  + $_FILES["file"]["size"] 上传文件的大小，以字节计
  + $_FILES["file"]["tmp_name"] 存储在服务器的文件的临时副本的名称
  + $_FILES["file"]["error"] 由文件上传导致的错误代码
  > PS：第一个参数是表单的name属性
- move_uploaded_file(temp,url) 移动临时文件到指定目录
- iconv(current,out,str) 修改文件编码
### 获取远程JSON数据
- 爬虫 <br />
  原理：获取页面所有内容，并利用正则匹配所需内容
  + file_get_contents($url)
  + preg_match_all($reg,$str,$res)
  + preg_match($reg,$str,$res)