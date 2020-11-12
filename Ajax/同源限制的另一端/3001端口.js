const express = require('express');
const path = require('path');
const fs = require('fs');
const formidable = require('formidable')
const app = express();

// 拦截所有的请求
app.use((req, res, next) => {
    // 1. 设置哪些客户端跨域访问我
    // CORS(跨域资源共享)     *代表所有的客户端跨域访问我
    res.header('Access-Control-Allow-Origin', '*');
    // 2. 设置客户端使用哪种请求方式访问我
    res.header('Access-Control-Allow-Methods', 'get,post'); // 表示get，post都可以
    // 允许客户端跨域请求时 携带cookie信息
    res.header('Access-Control-Allow-Credentials', true)
    next(); // 不调用的话就卡在这了
})
// 17
app.get('/tongyuan', (req, res) => {
    // 先接收请求参数callback
    // const fnName = req.query.callback;   
    // console.log(fnName) // fn这个函数名
    // console.log(req.query)   // { callback: 'jsonp0917610317988351', name: 'djl', age: '19' }
    // // 在服务器端调用函数 在客户端响应
    // // 将调用写在字符串中   并传入对象数据
    // var data = JSON.stringify({name: "djl", age : 19, sex : "男"})
    // var result = fnName + '('+ data +')';
    // res.send(result);
    
    // 代码优化
    var data = {name : 'zwl', age : 20}
    res.jsonp(data)   // 这个方法做的就是上面代码的优化
})
// 19 AJAX跨域请求    只需要在服务器端开放一些设置即可
app.get('/cors', (req,res) => {
    // 在拦截的时候添加了
    res.send('访问成功')
});

// 21
app.post('/cookie', (req, res) => {
    // 创建formidable表单解析对象
    const form = new formidable.IncomingForm();
    // 解析客户端传递过来的FormData对象
    form.parse(req, (err, fields, files) => {
        // 获取传递过来的请求参数
        const {username, password} = fields;
        // 用户名密码匹配
        if (username == 'djl' && password == '123456') {
            // 设置session
            // req.session.isLogin = true;
            res.send({message : '登录成功'})
        }
        else {
            res.send({message : '登录失败，用户名密码错误'})
        }
    })
})
// 21
app.get('/check', (req, res) => {
    // 判断session是否为true 是就处于登录 否则为未登录
    // if (req.session.isLogin) {
    //     res.send('登录中')
    // }
    // else {
    //     res.send('未登录')
    // }
    res.send('ok')
})

app.listen(3001)