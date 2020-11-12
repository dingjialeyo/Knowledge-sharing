// 引入模板引擎
const template = require('art-template');
const path = require('path');
const dateformat = require('dateformat');

// template方法是用来拼接字符串的      
// 1. 模板路径要写绝对路径   __dirname  在这儿指向的是08template目录
// 2. 要在模板中显示数据 对象类型
// 3. 并且返回值为字符串
const views = path.join(__dirname,'views','6.art')         // index.art 规定    代表模板页面

// 导入模板变量
template.defaults.imports.dateformat = dateformat;
const html = template(views, {
    time: new Date()
})
console.log(html) // 返回的是HTML     2020-03-28