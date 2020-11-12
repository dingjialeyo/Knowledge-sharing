// 引入express框架        而且不再需要引入http模块
const express = require('express');
const fs = require('fs')
// 创建网站服务器
const app = express();


// 同步处理错误的方法
// app.use('/index', (req, res) => {
//     // throw new Error('程序发生未知错误')         // 创建一个错误实例     下面是处理这个错误中间件
//     res.send('正常')                              // 程序正常那么则不会执行下面处理的张家界
// }) 

// // 错误处理
// app.use((err,req,res,next) => {
//     res.status(500).send('服务器端' + err.message);     // err.message指的是上面创建的错误实例的信息

// });

// 异步处理错误的方法     需要手动调用next方法
app.use('/index', (req,res,next) => {
    fs.readFile('./1.js', 'utf8', (err,data) => {
        if (err != null) {        // 说明文件没找到
            next(err);        // Error: ENOENT: no such file or directory, open 'C:\Users\丁嘉乐\Desktop\StudyPage\node\重新学Node\10Express框架\abc'
        }
        else {
            res.send(data)
        }
    })
})

// 监听端口
app.listen(3000);
console.log('启动成功');
