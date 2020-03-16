# 继承
继承是面向对象中一个非常重要的特征。指的是：子类继承父类的属性和方法。
> 我们可以通过继承的方式, 在父类的属性和方法基础上, 让子类也拥有这些属性和方法, 并可以扩展。

## 继承的好处
- 子类拥有父类所有的属性和方法（代码复用）；
- 子类可以扩展自己的属性和方法（更灵活）；
- 子类可以重写父类的方法

## 继承方式
### 原型链继承
- 核心：拿父类实例来充当子类原型对象
- 缺点：
  + 无法继承构造函数中的属性
  + 创建子类实例时，无法向父类构造函数传参
  + 原型对象中存在多余的属性
### 借用构造函数
- 核心：借父类的构造函数来增强子类实例，相当于把父类的实例属性复制一份给子类实例
  + call：
  格式：`父类构造函数.call(子类实例,参数1,参数2,参数3...)`
  + apply：
  格式：`父类构造函数.apply(子类实例,[参数1,参数2,参数3...])`
  > call与apply的唯一区别：传参方式不同，call多个参数，apply只有两个参数，第二个参数为数组
  ```javascript
  //aplly用法：借用方法
  var arr = [20,2,40,33,21,8,22,46,32]
  Math.max.apply(null,arr)
  ```
- 缺点：
  + 无法实现函数复用
  + 函数太多就会影响性能，占用更多内存
### 组合继承
由于以上继承方法的缺点，实际开发中不可能单纯的只使用一种继承方法，而是利用它们的优点，规避它们的缺点，所以就有了组合继承法
- 继承属性：借用构造函数
  > 只在构造函数中定义属性
- 继承方法：原型链继承
  > 把所有的方法写入原型对象
> 组合继承是最常用的继承模式。

- 缺点（原型链继承法的缺点）：
  + 在原型对象中生成多余的属性
  + 多次执行父类构造函数
### 原型式继承
- 核心：先创建了一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后返回了这个临时类型的一个新实例
  > 解决原型链继承法的缺点：生成多余的属性
  ```javascript
  function object(o){
    function F(){}
    F.prototype = o;
    return new F();
  }
  ```
- ES5版本的原型式继承：Object.create()
### 寄生组合继承法
> 完美的继承方法
- 核心：
  + 继承属性：借用构造函数
  + 继承方法：原型式继承
## ES6中的继承
### Class定义类
ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类
```javascript
//定义类
class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `我叫${this.name},今年${this.age}岁`;;
  }
}
```
- 写在类里面的方法实际是给Person.prototype添加方法
- constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。如果没有constructor方法，则得使用默认的constractor方法
### extends继承
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Man extends Person {
  constructor(name, age, gender) {
    //this.gender = gender; // 报错
    super(name, age);
    this.gender = gender; // 正确
  }
}
```         
- 子类继承了父类，在子类构造函数中必须调用super方法。
- 子类的constructor方法没有调用super之前，不能使用this关键字，否则报错，而放在super方法之后就是正确的。
### 静态方法
如果在一个方法前，加上static关键字，这就称为“静态方法”
```javascript
class Person {
  constructor(){
    this.name = 'Marco',
    this.age = 18;
  }
  static getInfo(){
    return this.name
  }
  say(){
    console.log(`Hello everyone, my name is ${this.name}, I'm ${this.age} years old`)
  }
}
class Man extends Person {}
```
- 静态方法方法不会被实例继承，而是直接通过类来调用Person.getInfo()
- 父类的静态方法，可以被子类继承Man.getInfo()
---
**[练习]**
- 扩展原生js方法
  + 兼容字符串trim方法
  + 获取ascii码的方法
  + 反编译ascii码的方法
---
