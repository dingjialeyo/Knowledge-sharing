// 引入express框架        而且不再需要引入http模块
const express = require('express');
// 创建网站服务器
const app = express();

// next方法是交给下一个中间件  直到出现send
app.get('/', (req, res, next) => {
    req.name = 'djl'
    next();  
});

app.get('/', (req, res) => {
    res.send(req.name)
});

app.listen(3000);
console.log('启动');