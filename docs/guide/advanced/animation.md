# 动画

## 运动原理

不断改变对象的属性产生动画的效果

## 运动分类
### 匀速运动

速度保持不变的运动

### 加速运动

速度不断增加的运动

### 减速运动

速度不断减小的运动

### 抛物线运动

水平方向速度不断减小，垂直方向速度不断增加

### 圆周运动

以某点为圆心半径为r的圆周上运动

### 缓冲运动

一开始速度很快，然后慢下来，直到停止

## 盒模型
- offset
  + offsetTop: 当前元素离<定位父级>元素顶部的距离。
  + offsetLeft: 当前元素离<定位父级>元素左边的距离。
  > 以上两个属性如果没定位的父级，则相对于根元素html的距离
  + offsetWidth: 当前元素的宽度（border + padding + content）
  + offsetHeight: 当前元素的高度（border + padding + content）
- client
  + clientTop: 当前元素上边框的宽度（border-top）
  + clientLeft: 当前元素左边框的宽度（border-left）
  + clientWidth: 当前元素宽度（padding + content，不包括border）
  + clientHeight: 当前元素高度（padding + content，不包括border）
- scroll
  + scrollTop: 当前元素<垂直滚动条>滚动过的距离
  + scrollLeft: 当前元素<水平滚动条>滚动过的距离
  + scrollWidth: 当前元素滚动宽度（不包括边框）
  + scrollHeight: 当前元素滚动高度（不包括边框）
  > scrollWidth,scrollHeight浏览器间有兼容性问题
```
获取页面滚动条的距离
* window（通用）
* documentElement （chrome和IE的quirks mode兼容模式）
* body（FF、Opera和IE）
滚动到可视区域：
Element.scrollIntoView()
```
---
**[练习]**
- 飞翔的小鸟（匀速）
- 篮球自由落体效果（加速，抛物线）
- 刹车效果（减速）
- 地球公转（圆周）
- 返回顶部效果（缓冲）
- 图片的淡入淡出
- 火箭升空（先快后慢）
---

## 封装动画函数
封装一个可以实现所有动画的函数animate
```javascript
// 首先封装获取元素样式值的兼容性方法
/**
 * [获取元素样式值]
 * @param  {Element} ele  [目标元素]
 * @param  {String} attr [目标属性]
 */
function getCss(ele,attr){
  if(window.getComputedStyle){
    return getComputedStyle(ele)[attr]
  }else if(ele.currentStyle){
    return ele.currentStyle[attr];
  }else{
    // 如果以上两个都不支持，则直接返回内联样式
    return ele.style[attr];
  }
}
// 接着封装animate动画函数
/**
 * [动画函数]
 * @param  {Element} ele   [动画元素]
 * @param  {Object}  opt   [目标动画属性键值]
 * @param  {Function} callback [动画结束后的回调函数]
 */
function animate(ele,opt,callback){
  // 属性（动画）数量
  ele.timerLen = 0;

  // 遍历设置定时器（动画）
  for(var attr in opt){
    // 遍历过程设定动画数量
    ele.timerLen++;

    // 匿名函数传递attr
    (function(attr){
      var timername = attr + 'timer';
      var target = opt[attr];

      // 清除同名timer
      clearInterval(ele[timername]);

      ele[timername] = setInterval(function(){
        // 获取当前值
        var current = getCss(ele,attr);

        // 提取单位
        var unit = current.match(/[a-z]+$/); //[px],[deg],null
        unit = unit ? unit[0] : '';

        // 提取值
        current = parseFloat(current);

        // 计算缓冲速度
        var speed = (target-current)/10;

        // 避免速度变成0
        // 有单位
        speed = speed<0 ? Math.floor(speed) : Math.ceil(speed);
        // 无单位
        if(attr === 'opacity'){
          speed = speed<0 ? -0.02 : 0.02;
        }

        current += speed;

        // 当到达目标值时
        if(current === target || speed === 0){
          clearInterval(ele[timername]);
          current = target;

          ele.timerLen--;

          // 动画完成后执行回掉函数
          if(ele.timerLen === 0){
            typeof callback === 'function' && callback();
          }
        }
        ele.style[attr] = current + unit;
      },30);
    })(attr);
  }
}
```

## 链式运动
动画的排队效果，上一个动画完成后才执行下一个动画效果

## 无缝滚动
1. 复制初始状态下可见区域内的图片并放到最后
  > 可见区域有几张就复制几张
2. 当复制的图片都滚动到可见区域时，立即把图片定位到初始状态
---
**[练习]**
- 折叠菜单栏
- 自适应瀑布流
- 淡入淡出幻灯片
- 添加商品飞入购物车效果（抛物线）
- 放大镜效果
---
