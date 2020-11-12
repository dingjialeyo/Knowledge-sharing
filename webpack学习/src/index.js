// 模块化方式导入
import $ from 'jquery'
// 导入css    需要一个loader加载器支持才行
import './css/index.css'

import './css/1.less'

import './css/1.scss'


$(function () {
    // ul中为奇数的li
    $('li:odd').css('backgroundColor', 'red');
    // ul中为偶数的li
    $('li:even').css('backgroundColor', 'blue');

    
});
// 高级的语法  需要babel的包 来转换
class Person {
    static info = 'djl'
}

console.log(Person.info)

// 第一句是ES6语法  这样是行不通的，需要webpack来进行代码转换为ES5 然后供文件访问

// 执行 npm run dev 进行加载  将加载好的文件放入自动创建的dist文件下
// 执行 npm run build 进行打包发布 将打包好的文件放入自动创建的dist文件下  这个dist将是需要交给后台的人员的文件

// 导入单文件组件
import App from '../components/app.vue'

// 导入vue构造函数
import Vue from 'Vue'

const vm = new Vue({
    el : '#app',
    // 渲染单组件   以后尽量用这个来渲染单组件
    render: h => h(App)
})