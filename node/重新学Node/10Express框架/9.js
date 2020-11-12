// 引入express框架        而且不再需要引入http模块
const express = require('express');
// 创建网站服务器
const app = express();

app.get('/index', (req, res) => {
    // 获取请求参数
    res.send(req.query)     // { }   返回的是对象 
});

app.listen(3000);
console.log('启动');