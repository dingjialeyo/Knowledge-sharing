// 引入express框架        而且不再需要引入http模块
const express = require('express');
// 创建网站服务器
const app = express();

// 接收
const home = require('./route/home');
const admin = require('./route/admin')

// 为路由对象匹配请求路径
app.use('/admin', admin);

// 为路由对象匹配请求路径
app.use('/home', home);

app.listen(3000);
console.log('启动');