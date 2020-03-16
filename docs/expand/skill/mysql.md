# MySql

## 什么是数据库
数据库（Database）是按照数据结构来组织、存储和管理数据的仓库

**热门数据库**
- Oracle
- SQLServer
- MySQL
- MongoDB
- SQLite
- access
- DB2

### 结构化的数据
```
小明的自我介绍：
我是一个热爱生活的人，很乐观，我今年刚从清华大学毕业，我学的专业是前端开发，我目前还是单身，并没有女朋友，欢迎大家跟我交朋友，谢谢！
```
仔细阅读上面这段话，如果让你提取这段文字的中心意思，你能做到吗？

我相信对一个正常人来说都不是难事。可是，这段话如果交给计算机去处理呢？ 计算机没有人类的思维，这件事对它来讲恐怕就太难了，因此，有时候我们才需要将数据结构化。

结构化的数据是什么样子呢？以上面那段话为例，我们将它的信息提取出来，以表格的形式展现：

|姓名|年龄|性别|性格|所在地|毕业院校|专业|
|--|--|--|--|--|--|--|
|Lucy|20|女|乐观|广州|清华大学|前端开发|
|Marco|18|男|完美|广州|蓝翔职业技术学校|挖掘机|
> 这样一来，我们把一段复杂的信息，进行了结构化处理，瞬间显得清爽多了。计算机处理起来也相当方便。 因此，这样的数据，我们就称之为结构化数据。

## 关系型数据库
是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据

|姓名|身份证| 银行卡号|余额|消费记录|
|--|--|--|--|--|
|Marco|450721200205012611|888869689898|865424.00| 2016.11.1 6000买iphone7 <br /> 2016.12.20 5800买note7 <br /> 2017.1.1 1665800买飞机|
这样的数据看起来是不是很别扭呢？ 因为它查询起来极不方便。

因此我们把它改造一下（把用户和消费记录分开）：

|编号|姓名|身份证|银行卡号|余额|
|--|--|--|--|--|
|1|Marco|450721199805012611|888869689898|865424.00|
|2|Lucy|460751198007125628|888869689898|26424.00|

|编号|时间|消费金额|备注|用户编号|
|--|--|--|--|--|
|1| 2016.11.1| 6000|买iphone7|1|
|2| 2016.12.20|5800|买note7|1|
|3| 2017.1.1|1665800| 买飞机 |2|

我们把用户账号的信息，和消费记录信息分离开来，通过用户编号进行了关联 既把不同的数据进行了分离，使得查询数据更加方便。同时又保证了它们关系的正确性。

这就是传统的关系型数据库。 其中 <用户编号> 我们称之为**外键**

### 表(table)
一个数据库通常包含一个或多个表，一个数据表有一个唯一名称，并由行和列组成。

表(table) 是数据库中一个重要的组成部分, 数据库只是一个框架，数据表才是其实质内容。

- 表结构
  |身份ID|姓名|性别|年龄|
  |--|--|--|--|
  |1|刘备|男|40|
  |2|关羽|男|36|
  |3|貂蝉|女|18|
  |4|张飞|男|30|

## MySql的特点
MySql是目前最流行的关系型数据库管理系统，由瑞典MySQL AB公司开发，目前属于Oracle公司
- MySQL是开源的，免费。
- MySQL支持标准的SQL数据语句
- MySQL可以允许于多个系统上，并且支持多种语言。这些编程语言包括C、C++、Python、Java、Perl、PHP、Eiffel、Ruby和Tcl等。
- MySQL对PHP有很好的支持，PHP是目前最流行的Web开发语言。
- MySQL支持大型数据库，支持5000万条记录的数据仓库，32位系统表文件最大可支持4GB，64位系统支持最大的表文件为8TB。

## 数据库操作
### 表操作
- 连接数据库 <br />
  格式：`mysql -h主机地址 -u用户名 -p用户密码`
- 显示所有数据库 <br />
  格式：`show databases;`
- 创建数据库 <br />
  格式：`create database <数据库名>;`
- 使用数据库 <br />
  格式：`use <数据库名>;`
- 显示当前数据库所有表 <br />
  格式：`show tables;`
- 创建数据表 <br />
  格式：`create table <表名> (<字段名1> <类型1> [,..<字段名n> <类型n>]);`
  ```
  create table MyGuests (
    id int(6) unsigned auto_increment primary key, 
    firstname varchar(30) not null,
    lastname varchar(30) not null,
    email varchar(50),
    reg_date timestamp
  )
  ```
  以上创建一个名为 “MyGuests” 的表，包含5个列： “id”, “firstname”, “lastname”, “email” 和 “reg_date”，参数如下：
  + 数据类型:
    * INT(整型),
    * FLOAT(浮点),
    * CHAR(固定长度字符串),
    * VARCHAR(可变长度字符串),
    * BLOB(二进制),
    * TEXT(字符串)
    * TIMESTAMP(时间戳)
  + 列的其他属性
    * NOT NULL - 每一行都必须含有值（不能为空），null 值是不允许的。
    * DEFAULT value - 设置默认值
    * UNSIGNED - 使用无符号数值类型，0 及正数
    * AUTO_INCREMENT - 设置 MySQL 字段的值在新增记录时每次自动增长 1
    * PRIMARY KEY - 设置数据表中每条记录的唯一标识。 通常列的 PRIMARY KEY 设置为 ID 数值，与 AUTO_INCREMENT 一起使用。
- 删除表： <br />
  格式：`drop table <表名>;`
  ```
  drop table MyGuests;
  drop table if exists MyGuests
  ```
- 查询表结构： <br />
  `desc MyGuests`
- 修改表名。 <br />
  `rename table MyClass to YouClass;`
- 增加字段 <br />
  `alter table MyGuests add sku_id bigint(20) unsigned DEFAULT NULL COMMENT '商品销售码';`
- 复制表结构： <br />
  `create table table1 like table;`
### 数据操作
- 插入数据 <br />
  格式：`insert into <表名> [(<字段名1>[,..<字段名n > ])] values ( 值1 )[, (值n )];`
  ```
  //单条数据
  insert into MyGuests (firstname, lastname, email)
  values ('John', 'Doe', 'john@example.com')
  ```
- 删除表数据 <br />
  格式：`delete from 表名 where 表达式`
  ```
  //删除MyGuests表中id为1的数据
  DELETE FROM MyGuests where id=1;

  //删除所有数据
  DELETE FROM MyGuests
  ```
- 查询表中的数据 <br />
  格式： `select <字段1, 字段2, …> from < 表名 > where < 表达式 >;`
  ```
  //查看表 MyGuests 中所有数据
  select * from MyGuests;

  //查看表 MyGuests 中前10行数据：
  select * from MyGuests order by id limit 0,10;
  ```
  > select一般配合where使用，以查询更精确更复杂的数据。
- 修改表中的数据。 <br />
  格式：`update 表名 set 字段=新值,… where 条件;`
  ```
  update MyGuests set name='Mary' where id=1;
  ```
- 条件控制语句 <br />
  + WHERE 语句：
    ```
    SELECT * FROM tb_name WHERE id=3;
    ```
  + HAVING 语句：
    ```
    SELECT * FROM tb_name GROUP BY score HAVING count(*)>2
    ```
  + 相关条件控制符：
    * =、>、<、<>、IN(1,2,3......)、BETWEEN a AND b、NOT
    * AND 、OR
    * LIKE用法中
      * % 匹配任意、
      * _ 匹配一个字符（可以是汉字）
  + IS NULL 空值检测

## php操作数据库
### 连接 MySQL
PHP 5 及以上版本建议使用以下方式连接 MySQL :
- MySQLi extension (“i” 意为 improved) <br />
  安装：Linux 和 Windows: 在 php5 mysql 包安装时 MySQLi 扩展多数情况下是自动安装
  ```php
  <?php
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = 'user';

    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);

    // 检测连接
    if ($conn->connect_error) {
      die("连接失败: " . $conn->connect_error);
    } 

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    echo "连接成功";
  ?>
  ```
- 执行sql语句查询结果集
  ```php
  //编写sql语句
  $sql = 'select * from student';

  //获取查询结果集
  $result = $conn->query($sql);

  //使用查询结果集
  //得到json字符串
  $row = $result->fetch_all(MYSQLI_ASSOC);

  //释放查询结果集，避免资源浪费
  $result->close();

  //把结果输出到前台
  echo json_encode($row);

  // 关闭数据库，避免资源浪费
  $conn->close();
  ```
### 插入数据
INSERT INTO <br />
- 单条数据
  ```php
  $sql = "INSERT INTO MyGuests (firstname, lastname, email)
  VALUES ('John', 'Doe', 'john@example.com')";

  if ($conn->query($sql) === TRUE) {
    echo "新记录插入成功";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  ```
- 多条数据
  ```php
  $sql = "INSERT INTO `projects` (`name`, `url`, `description`) VALUES ";
  foreach ($projects as $item) {
    $sql .= "('$item',NULL, NULL),";
  }
  $sql = substr($sql,0,-1);

  if ($conn->query($sql) === TRUE) {
    echo "新记录插入成功";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  ```
### 读取数据
SELECT…FROM
```php
$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // 输出每行数据
  while($row = $result->fetch_assoc()) {
    echo "<br> id: ". $row["id"]. " - Name: ". $row["firstname"]. " " . $row["lastname"];
  }
} else {
  echo "0 个结果";
}
```
