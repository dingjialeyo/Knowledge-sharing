// 引入模板引擎
const template = require('art-template');
const path = require('path')

// template方法是用来拼接字符串的      
// 1. 模板路径要写绝对路径   __dirname  在这儿指向的是08template目录
// 2. 要在模板中显示数据 对象类型
// 3. 并且返回值为字符串
const views = path.join(__dirname, 'views', '3.art') // index.art 规定    代表模板页面
const html = template(views, {
    name: '张三', // 可以直接写进模板页面 {{name}}
    age: 2,
    arr: [{
            name: 'djl',
            age: 10,
            sex: '男'
        },
        {
            name: 'zwl',
            age: 14,
            sex: '男'
        },
        {
            name: 'zy',
            age: 18,
            sex: '女'
        },
        {
            name: 'xxx',
            age: 100,
            sex: '男'
        }
    ]
})
console.log(html) // 返回的是HTML