// use应用


// 引入express框架        而且不再需要引入http模块
const express = require('express');
// 创建网站服务器
const app = express();

// 网站维护 拦截应用      无论访问哪个网站都是正在维护
// app.use((req, res, next) => {
//     res.send('当前正在维护')
// })


// 登陆应用
app.use('/admin', (req, res, next) => {
    let Islogin = true;
    if (Islogin) {        // 如果为true 调用next 向下执行
        next();
    }
    else {
        res.send('登陆失败')
    }
})
app.get('/admin', (req, res) => {
    res.send('成功登陆界面')
})

// 自定义404页面应用    不是正确的地址将会执行这个中间件
app.use((req, res, next) => {
    //状态码             这个send方法可以链式调用
    res.status(404).send('当前访问页面404')
})

app.listen(3000);
console.log('启动');