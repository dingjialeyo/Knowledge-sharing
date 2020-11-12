// 引入express框架        而且不再需要引入http模块
const express = require('express');
const fs = require('fs');
const path = require('path')
// 引入body-parser模块
const bodyParser = require('body-parser');
// 创建网站服务器
const app = express();
// 实现静态资源访问功能
app.use(express.static(path.join(__dirname,'public')));
// 拦截请求        固定写法         
// extended:  值为false  方法内部使用queryString模块处理请求参数格式
// extended:  值为true   方法内部使用qs模块处理请求参数格式
app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/index.html', (req, res) => {
    // 获取post请求参数
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${req.body.file}</h1>
    </body>
    </html>`) // req.body获取表单请求参数          body是bodyParser里面的一个方法 
})

app.listen(3000);
console.log('启动');