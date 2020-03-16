# 函数封装

下面列出开发过程中常用的一些函数的封装，供大家参考

## 范围随机数生成
```javascript
/**
 * [生成一个范围内的随机整数]
 * @param  {Number} min [范围最小值]
 * @param  {Number} max [范围内最大值]
 * @return {Number}     [返回随机整数]
 */
function randomNumber(min,max){
  return parseInt(Math.random()*(max-min+1)) + min
}
```
使用示例：`randomNumber(1,100)`

## n位随机数字验证码
```javascript
/**
 * [生成n位随机数字验证码]
 * @param  {Number} n [验证码位数，必须大于等于1]
 * @return {String} [返回随机4位数字的字符串]
 */
function vCode(n){
  if(n<1) return false;
  var res = '';
  for(var i=0;i<n;i++){
    res += parseInt(Math.random()*10);
  }

  return res;
}
```
使用示例：`vCode(4)`

## 随机色生成
- rgb形式
```javascript
/**
 * [生成随机颜色]
 * @return {String} [返回rgb颜色字符串]
 */
function randomColor(){
  // 随机r,g,b
  var r = parseInt(Math.random()*256);
  var g = parseInt(Math.random()*256);
  var b = parseInt(Math.random()*256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
```
- 十六进制形式
```javascript
function randomColor(){
  // 用于存放结果
  var res = '#';
  var str = '0123456789abcdef';

  for(var i=0;i<6;i++){
    var idx = parseInt(Math.random()*str.length);
    res += str.charAt(idx);
  }

  return res
}
```
使用示例：`randomColor()`

## 数据类型判断
```javascript
/**
 * [数据类型判断]
 * @param  {All} data [数据类型]
 * @return {String}   [返回数据类型字符串]
 */
function type(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}
```
使用示例：`type([1,2,3])`
