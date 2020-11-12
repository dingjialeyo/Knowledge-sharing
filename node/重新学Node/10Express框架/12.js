// 引入express框架        而且不再需要引入http模块
const express = require('express');
// 引入body-parser模块
const bodyParser = require('body-parser');
// 创建网站服务器
const app = express(); 

// :id 占位符   表示这个地方要接受一个id
app.get('/index/:id/:name/:age', (req, res) => {
    res.send(req.params)        // 返回一个对象   {id: "123123",name: "djl",age: "19"}
})

app.listen(3000);
console.log('启动');