// 引入express框架        而且不再需要引入http模块
const express = require('express');
const fs = require('fs')
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);       // 转换为promise对象
// 创建网站服务器
const app = express();

app.use('/index', async (req, res, next) => {
    // 可以捕获 同步函数 异步函数   其他的不能捕获
    try {
        // 判断有没有出错，有则跳到catch执行，没有则跳转到catch后面执行
        await readFile('./xx.js');
    }
    catch (err){ 
        // 这个next意思是跳到 错误中间件 处理
        next(err);      // 服务器端ENOENT: no such file or directory, open 'C:\Users\丁嘉乐\Desktop\StudyPage\node\重新学Node\10Express框架\xx.js'
    }
    res.send('ok')
})

app.use((err,req,res,next) => {
    res.status(500).send('服务器端' + err.message);     // err.message指的是上面创建的错误实例的信息
});

app.listen(3000);
console.log('启动');