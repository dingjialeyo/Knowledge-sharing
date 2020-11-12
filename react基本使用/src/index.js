// 入口文件

// 1. 导入所需模块
import React from 'react' // 用来 创建组件，虚拟DOM，生命周期
import ReactDOM from 'react-dom' // 用来 把创建好的组件 和 虚拟DOM 放到页面上展示

// 导入hello组件
// import Hello from './components/hello.jsx'

// 2. 创建虚拟DOM元素
// 参数1： 创建元素类型名称
// 参数2： 是一个对象或null，表示 当前这个DOM元素的属性
// 参数3： 子节点(包括 其他虚拟DOM 或 文本)
// 参数n： 其他子节点
// <h1 id="myh1" title="this is a h1"> 这是h1的虚拟DOM </h1>   对应创建
// const myh1 = React.createElement('h1', null, '这是h1的虚拟DOM')
// 这种方法比较麻烦
const myh1 = React.createElement('h1', { id: 'myh1', title: 'this is a h1'}, '这是h1的虚拟DOM')
// div 包含一个h1
const mydiv = React.createElement('div', { id: 'mydiv', title: 'div'}, '这是一个div', myh1)


// 渲染页面上面的DOM结构， 最好就是写 html代码   需要一个loader才能这样写
// 这种js 中， 混合写入HTML的语法，叫做 JSX 语法 （符合xml规范的js）
// JSX语法的本质，还是在运行的时候，被转换为了React.createElement这种形式
// const mydiv = <div id="div" title="this is a div">这是一个div yo</div>


// 3. 使用ReactDOM 把虚拟DOM渲染到页面上
// 参数1： 要渲染的那个虚拟DOM元素
// 参数2： 指定页面上的容器
// ReactDOM.render(myh1, document.getElementById('app'))
ReactDOM.render(mydiv, document.getElementById('app'))
