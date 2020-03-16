# Dom

## 什么是DOM
DOM是Document Object Model（文档对象模型）的缩写，它是W3C国际组织的一套Web标准。是针对HTML和XML文档的一个API，它定义了访问HTML文档对象的一套属性、方法和事件
。
![DOM结构](https://img-blog.csdnimg.cn/20200311222508607.png)

## 节点类型
- 每个节点都有一个nodeType属性，用于表明节点的类型。
- 常用节点类型与对应nodeType值：
  > 用于判断获取到的元素属于什么类型节点
  + 元素节点 <==> 1
  + 文本节点 <==> 3
  + 属性节点 <==> 2
  ```javascript
  //找出所有节点
  <div class="content" title="属性节点">测试Div</div>
  ```
## 节点获取
### 获取元素节点方法
- document.getElementById(id)
  + 通过 ID获取元素的节点（速度最快）
  + 必须通过document调用
  + 返回DOM节点对象，如果id不存在返回null
- getElementsByTagName(tagname)
  + 通过标签名获取元素节点列表
  + 返回类数组，如果tagname不存在返回空数组[]
- getElementsByClassName()
  + 通过class类名获取节点列表
  + 返回类数组，如果类名不存在返回空数组[]
- document.getElementsByName()
  + 通过name属性获取元素节点列表
  + 必须通过document调用
  + 返回类数组，如果name属性不存在返回空数组[]
> 注意: 如果确认元素存在, 但是返回null或[]，一定是代码执行顺序的问题

## 节点操作
### 节点属性
- nodeName  返回节点的名称，根据其类型。
- nodeType  返回节点的类型。
- nodeValue 返回节点的值（元素节点的nodeValue为null）
### 节点方法
- 创建：
  + document.createElement() 创建一个元素节点
  + document.createTextNode() 创建一个文本节点
  + document.createAttribute() 创建一个属性节点
- 插入：
  + parent.appendChild()  向节点的子节点列表的结尾添加新的子节点
  + parent.insertBefore(new,node) 在指定的子节点node前插入新的子节点new。
  + ele.setAttributeNode(attrNode) 在指定元素中插入一个属性节点
  > 对页面已存在节点的处理
- 复制
  + cloneNode(boolean)  复制节点，为true是深复制。
- 删除：
  + parent.removeChild(ele)  删除（并返回）当前节点parent的指定子节点ele。
- 判断：
  + parent.hasChildNodes() 判断当前节点是否拥有子节点,返回布尔值
> 以上parent表示父级元素，ele表示元素
### 利用节点关系获取其他节点
- 获取父级节点
  + ele.parentNode 得到ele元素的父节点
- 获取子节点
  + ele.childNodes 得到ele元素的全部子节点列表（类数组）
  + ele.firstChild 获得ele元素的第一个子节点
  + ele.lastChild 获得ele元素的最后一个子节点
- 获取兄弟节点
  + ele.nextSibling 获得ele元素的下一个兄弟节点
  + ele.previousSibling 得到ele元素的上一个兄弟节点
---
**[练习]**
- 动态生成表格并实现隔行变色
- 封装一个删除非元素节点的函数
- 实现删除表格行效果
- 根据数据生成表单
---

## 元素节点的操作
### 常用属性
> 可以通过点语法或方括号访问
- tagName 获取元素的标签名
- id 设置/获取元素id属性
- name 设置/获取元素name属性
- style 设置/获取元素的内联样式
- className 设置/获取元素的class属性
- innerHTML 设置/获取元素的内容（包含html代码）
- outerHTML 设置或获取元素及其内容（包含html代码）
- innerText 设置或获取位于元素标签内的文本
- outerText 设置(包括标签)或获取(不包括标签)元素的文本
### 盒模型相关
- offsetTop: 当前元素离<定位父级>元素顶部的距离。
- offsetLeft: 当前元素离<定位父级>元素左边的距离。
> 以上两个属性如果没定位的父级，则相对于根元素html的距离
- offsetWidth: 当前元素的宽度（border + padding + content）
- offsetHeight: 当前元素的高度（border + padding + content）
### 元素方法(适用所有的属性)
- ele.getAttribute(attr) //获取元素的属性值（自定义属性获取）
- ele.setAttribute(attr,val); //设置元素的属性
- ele.removeAttribute(attr) //删除属性attr
- ele.hasAttribute(attr) //判断是否存在属性attr
### 根据元素关系获取其他元素
- parentElement 获取父级节点元素
- children 获取元素的全部子元素
- firstElementChild 获取第一个子元素
- lastElementChild 获取最后一个子元素
- previousElementSibling 获取前一个元素
- nextElementSibling 获取下一个元素
### 获取css样式
> 得到当前元素计算后的所有样式
- getComputedStyle(ele,pseudo) （标准）
  + ele:要获取样式的元素
  + pseudo:伪元素样式字符(可选)，可获取伪元素样式
- ele.currentStyle （IE8-）

## table对象
### table对象属性&方法
- rows 返回包含表格中所有行的一个数组
- tBodies 返回包含表格中所有 tbody 的一个数组
- insertRow(index) 在表格中插入一个新行。
- deleteRow(index) 从表格删除一行。
### tr对象属性&方法
- cells 返回包含表格中所有单元格的一个数组
- rowIndex 返回该行在表中的位置
- sectionRowIndex 返回在 tBody 、tHead 或 tFoot 中行的位置。
- insertCell(index) 在一行中的指定位置插入一个空的列
- deleteCell(index) 删除行中的指定的单元格
### td/th对象属性&方法
- cellIndex 返回单元格在表格行的单元格集合中的位置。
---
**[练习]**
- tab标签页切换
- 动态生成随机背景色表格
- 全选和反选效果
- 表格即时编辑
---
