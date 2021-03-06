// 引入模板引擎
const template = require('art-template');
const path = require('path')

// template方法是用来拼接字符串的      
// 1. 模板路径要写绝对路径   __dirname  在这儿指向的是08template目录
// 2. 要在模板中显示数据 对象类型
// 3. 并且返回值为字符串
const views = path.join(__dirname,'views','5.art')         // index.art 规定    代表模板页面
const html = template(views, {
    msg: '我是首页模板'
})
console.log(html) // 返回的是HTML  