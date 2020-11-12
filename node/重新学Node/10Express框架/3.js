// 引入express框架        而且不再需要引入http模块
const express = require('express');
// 创建网站服务器
const app = express();

// 接收所有的请求   只要访问就接收
app.use((req, res, next) => {
    console.log('执行了use中间件')
    next();
});

// 当客户端走ues这个地址时候才会使用这个中间件
app.use('/use', (req, res, next) => {
    console.log('又执行了use中间件')
    next();
});


// next方法是交给下一个中间件  直到出现send
app.get('/', (req, res, next) => {
    req.name = 'djl'
    next();  
});

app.get('/', (req, res) => {
    res.send(req.name);
});

app.listen(3000);
console.log('启动');