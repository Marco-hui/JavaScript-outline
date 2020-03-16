# Date

## 了解时间
- GMT：格林尼治标准时(Greenwich Mean Time)，俗称“天文学时间”
- UTC：协调世界时(Universal Time Coordinated)，“原子物理时间”，它更加精确,50亿年才误差1秒
- 时区：为了克服时间上的混乱，1884年在华盛顿召开的一次国际经度会议（又称国际子午线会议[1]）上，规定将全球划分为24个时区（东、西各12个时区）。规定英国（格林尼治天文台旧址）为中时区（零时区）、东1-12区，西1-12区。每个时区横跨经度15度，时间正好是1小时
- 闰年：四年一闰，百年不闰，四百年再闰
- 纪元时间(UNIX TIME)：1970-1-1零时

## 创建日期时间
```javascript
//1）创建当前时间的日期和时间
var d = new Date();//得到的是代码执行时的时间（本地时间）

//2）创建指定日期的时间和日期
var d = new Date("2015/08/22");
var d = new Date(56521211021);//参数为距1970-1-1零时的毫秒数
```
## 获取/设置时间
- 年月日
  + getFullYear()/setFullYear(2014)
  + getMonth()/setMonth(8) 注意：获取月份是从0开始的
  + getDate()/setDate(25)
- 星期
  + getDay() 0-6:星期天-星期六
- 时分秒
  + getHours()/setHours()
  + getMinutes()/setMinutes()
  + getSeconds()/setSeconds()

## 日期处理
- getTime()/setTime()：获取/修改某个日期自1970年1月1日0时以来的毫秒数
- toLocaleDateString(); 以特定地区格式显示年、月、日
- toUTCString(); 转换成UTC时间

**ES5方法**

- Date.parse(“2015-08-24”)//返回指定日期距1970-1-1零时的毫秒数
  > PS：转换格式默认支持2015-08-24或2015/08/24

- Date.now();//返回执行这行代码时距1970-1-1零时的毫秒数

## 延迟与定时器
- setTimeout(fn,200)：两百毫秒后执行fn这个函数（只执行一次）,返回一个id标识
- clearTimeout(timeoutID)：清除指定id标识的延迟操作
- setInterval(fn,30)：每隔30毫秒执行一次fn这个函数,返回一个id标识
- clearInterval(intervalID)：清除指定id标识的定时器操作
  ```javascript
  var timer = setTimeout(function(){
    //2s后执行这里的代码
  },2000);

  //清除
  clearTimeout(timer);
  ```
---
**[练习]**
- 将当前日期格式化输出为 “2015年08月24 星期五”格式
- 判断两个日期相差的天数
- 封装一个函数afterDate(date,n)，得到日期date的n天后的日期
- 使用定时器实现进度条效果
- 5秒后自动关闭广告
- 实现数码时钟

  ![数码时钟](https://img-blog.csdnimg.cn/20200311221932153.png)
---