# ES6

## 变量声明
- let: 代码块内的变量声明
  + 变量声明不会提前
  + 块级作用域
  + let不允许相同作用域内多次声明同一变量
- const:常量声明
  + 变量声明不会提前
  + 块级作用域
  + const不允许相同作用域内多次声明同一变量
  + 声明后无法修改值
  > const常用与引用第三方库的声明

## 解构赋值
ES6允许我们对数组和对象中提取值，对变量进行赋值，这被叫做“解构”
- 数组：
  ```javascript
  var [a,b,c] = [1,2,3] //a=1,b=2,c=3
  var [a,[[b],c]] = [10,[[20],30]] //a=10,b=20,c=30
  var [a,...b] = [1,2,3,4] //a=1,b=[2,3,4];...表示剩余参数
  ```
- 对象：
  + var {a,b}={a:’html’,b:’css’}
  + 变量必须与对象属性名相同，否则为undefined
  + 如果变量名与属性名不相同，则必须写成以下格式才能取到值
  ```javascript
  var {a:test} ={a:'html',b:'css'} //test=>html
  ```
- 解构失败：
  ```javascript
  var [a]=[],[b]=1,[c]='jiegou',[d]=false //a,b,c,d都得到undefined
  ```
- 指定默认值：
  ```javascript
  var [a=true]=[]
  var {a=10} = {}
  ```
  > 解构同样适用于let和const
::: tip
解构只能用于数组和对象，如果解构不成功，变量会返回undefined，但如果对undefined和null解构则会报错
:::

### 解构用途
- 交换变量值
  ```javascript
  var [x,y] = [y,x];
  ```
- 函数返回多个值
  ```javascript
  function example(){
    return [1,2,3]
  }

  //接收
  var [x,y,z] = example();
  ```
- 定义函数形参 <br />
  函数的参数定义方式, 不用再考虑参数的顺序
  ```javascript
  function test({x,y,z}){}

  //传参
  test({x:10,y:20,z:30})

  //参数可以设置默认值
  fuction test({x=10,y=20,z}){}
  ```
## 字符串扩展
### 字符串方法
- includes <br />
  判断是否包含某个字符，返回布尔值
  ```javascript
  'html5'.includes('html');//true
  ```
- startsWith/endsWith <br />
  是否以某一字符开头/结尾
  ```javascript
  let str='google';
  str.startsWith('g'); //true
  str.endsWith('le'); //true
  ```
- repeat(n) <br />
  得到字符串重复n次后的结果，n可以为小数，但不能为负数
  ```javascript
  'Marco'.repeat(2); //MarcoMarco
  ```
### 字符串模板
使用反引号`表示，你可以通过一种更加美观、更加方便的方式向字符串中插入变量 <br />
格式：${变量|函数}
```
`你好，我的名字叫${username},接下来是我的自我介绍：${introduce()}` 
```
> 模板字符串中所有的空格、新行、缩进，都会原样输出在生成的字符串中。

## 数组扩展
### 遍历
- for..of
  ```javascript
  var arr = [10,12,18,30]
  for (var value of arr) {
    console.log(value);
  }
  ```
  + 这是最简洁、最直接的遍历数组元素的语法
  + 这个方法避开了for-in循环的所有缺陷
  > for…of跟for-in的区别很明显，就是直接取值，而不再取下标了
  + 与forEach()不同的是，它可以正确响应break、continue和return语句
  + for-of循环不支持普通对象
  + for-of循环也可以遍历其它的集合
    * DOM节点
    * 字符串
    * Set/Map集合
## 对象扩展
- 合并对象：Object.assign(obj1,obj2,…objN);
  ```javascript
  Object.assign({a:1},{b:2},{b:4,c:3}); //{a:1,b:4,c:3}
  ```s
  + 只支持浅拷贝（对于引用类型，只拷贝引用）
  + 忽略不可枚举属性
- 简写
  > ES6允许在对象之中直接写变量，如
  ```javascript
  //@属性简写
  var myName = 'Marco';
  var obj = {myName};//属性名为变量名, 属性值为变量的值
  //等效于
  var obj = {myName:'Marco'}

  //使用变量值作为属性名
  var obj = {
      [myName]:18
  }
  //等效于
  var obj = {Marco:18}

  //@方法简写
  var obj = {
      coding(){

      }
  }
  //等效于
  var obj = {
      coding:function(){

      }
  }
  ```
## 箭头函数
格式：标识符=>表达式
> 省略了function、return关键字和大括号。
### 参数与返回值
- 零个参数用 () 表示
  ```javascript
  //传统写法
  var sum = function(){
    return 10 + 10;
  }

  //es6箭头函数
  var sum = () => 10+10;
  ```
- 函数只有一个参数（可省略括号）
  ```javascript
  //传统函数写法
  var test = function(x){
    return x+2;
  } 

  //使用箭头函数
  var test = x=>x+2;
  ```
- 多个参数
  ```javascript
  // ES5
  var total = values.reduce(function (a, b) {
    return a + b;
  }, 0);

  // ES6
  var total = values.reduce((a, b) => a + b, 0);
  ```
- 函数中包含多行代码时用代码块括起来
  > ES6中的规则是，紧随箭头的{被解析为块的开始，而不是对象的开始
  ```javascript
  // ES5
  btn.onclick = function (e) {
    e = e || window.event;
    var keCode = e.which || e.keyCode;
    console.log(keyCode);
  };

  // ES6
  btn.onclick = e=>{
    e = e || window.event;
    var keyCode = e.which || e.keyCode;
    console.log(keyCode);
  };
  ```
- 使用了块语句的箭头函数不会自动返回值，你需要使用return语句将所需值返回
- 当使用箭头函数返回一个普通对象时，需要将对象包裹在小括号里
  ```javascript
  //传统写法
  var createPerson = function(){
    return {name:'Marco',age:18}
  }

  // ES6
  var createPerson = ()=>{name:'Marco',age:18};   // 这样写会报Bug！
  var createPerson = ()=>({name:'Marco',age:18});
  ```
- 默认参数Default
  ```javascript
  var func1 = (x = 1, y = 2) => x + y;
  func1(); // 得到 3
  ```
- 剩余参数Rest
  ```javascript
  var func2 = (x, ...args) => { console.log(args) };
  func2(1,2,3); // 输出 [2, 3]
  ```
### 箭头函数中的this值
箭头函数没有它自己的this值，箭头函数内的this值继承自外围作用域

## Symbol数据类型
ES6引入了一种新的原始数据类型Symbol，表示独一无二的值，一旦创建后就不可更改，是一种类似于字符串的数据类型，但Symbol 值不能与其他类型的值进行运算，否则报错。
```javascript
// 没有参数的情况
var s1 = Symbol();
var s2 = Symbol();

s1 === s2 // false
```
- Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了标识和区分，对调式非常有用
  ```javascript
  // 有参数的情况
  var s1 = Symbol("foo");
  var s2 = Symbol("foo");

  s1 === s2 // false
  ```
- Symbol值不能与其他类型的值进行运算
### 用途
- 给对象创建私有属性 <br />
  给现有的对象添加属性，可能会产生命名冲突，Symbol的出现解决这个问题
  ```javascript
  var mySymbol = Symbol();

  // 第一种写法
  var a = {};
  a[mySymbol] = 'Nani';

  // 第二种写法（注意加方括号，否则回被当作普通属性）
  var a = {
    [mySymbol]: 'Nani'
  };

  // 以上写法都得到同样结果
  a[mySymbol] // "Nani"
  ```
### 常用方法
- Symbol.for() <br />
  有时我们希望重新使用同一个Symbol值，Symbol.for方法可以做到这一点，首先在全局中搜索已登记的Symbol值，如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值
  > 直接用Symbol()方法创建的Symbol值不会被登记
  ```javascript
  let one = Symbol("Marco");
  let two = Symbol.for("Marco");

  //由于创建了两个Symbol值，所以他们不相等
  console.log(one===two);//false
  ```
- Symbol.keyFor() <br />
  获取被登记的Symbol值
  > 直接使用Symbo()创建的Symbol值的键不会被登记，所以也就获取不到

## Set集合
Set集合，类似于数组，但是成员的值都是唯一的，可自动去重。
### 方法
- add(value)：添加某个值，返回Set结构本身。
- delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
- has(value)：返回一个布尔值，表示Set集合中是否存在该值。
- clear()：清除所有成员，没有返回值。
  ```javascript
  let imgs = new Set(); 
  imgs.add(1); 
  imgs.add(1);
  imgs.add(5);
  imgs.add("5"); 
  imgs.add(new String("abc")); 
  imgs.add(new String("abc"));

  console.log(imgs) //{1,5,'5','abc','abc'}
  ```
  > Set集合是默认去重复的，但前提是两个添加的元素严格相等，所以5和”5”不相等，两个new出来的字符串不相等
- 去重数组
  ```javascript
  let items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);

  //去重后从新转成数组
  Array.from(items);
  ```
- 遍历
  + for…of
  + forEach()
  ```javascript
  var imgs = new Set(['a','b','c']); //根据KEY遍历 
  for(let item of imgs){
    console.log(item); 
  } 
  //a 
  //b 
  //c

  imgs.forEach((item,idx)=>{
    console.log(item,idx);
  })
  ```
## Map映射
js对象（Object）只能用字符串当作键(属性名)。这让它的使用有了很大的限制。所以ES6推出了一种类似于对象的数据集合：Map集合，它能让所有类型的数据作为属性名
### 常用方法
- 设置set(key, value)
- 获取get(key)
- has(key)
- delete(key)
- clear()
  ```javascript
  //创建
  let map = new Map(); 

  //设置
  map.set("S0", "张三"); 
  map.set("S1", "李四"); 
  map.set("S2", "王五");

  //获取
  map.get("s2"); //王五
  ```
### 遍历方法
- keys() 获取所有键
- values() 获取所有值
- entries() 获取所有键值对，返回类数组
- forEach()：遍历 Map 的所有成员。
- 循环遍历，配合解构赋值
  ```javascript
  for(let [key,value] of map){
    console.log(key,value);
  }
  ```
## 生成器函数
- function和函数名之间有一个*号
- 函数体内部使用了yield表达式
- next()
  + 执行next()后得到一个yield或return返回值组成的对象{value:xx,done:false}
  + 对象中的done是否为true,取决于函数是否完结束
```javascript
function* gen() {
  yield 10;
  yield 20;
  return 100;
  yield 30;
};
let g = gen();//得到一个对象
g.next();//{value:10,done:false}
```
  