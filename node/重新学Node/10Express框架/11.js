// 引入express框架        而且不再需要引入http模块
const express = require('express');
// 引入body-parser模块
const bodyParser = require('body-parser');
// 创建网站服务器
const app = express(); 


// use 内部解析
app.use(fn())

function fn() {  
    return function (req,res,next) {
        console.log(req.method);        // GET
        next();
    }
}

app.get('/index', (req, res) => {
    res.send('use')          
})

app.listen(3000);
console.log('启动');