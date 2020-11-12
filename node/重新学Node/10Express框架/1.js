// 引入express框架        而且不再需要引入http模块
let url = require('url')
const express = require('express');
// 创建网站服务器
const app = express();

// url.parse 解析url 地址
let huaweiUrl = url.parse('https://sale.vmall.com/huaweizone.html?cid=10618')
console.log(huaweiUrl)

// 路由
app.get('/', (req, res) => {
    // send() 
    // 1. 可以自动检测响应内容的类型 自动响应到响应头当中res.Headwrite()     
    // 2. 还可以自动设置http状态码       
    // 3. 自动响应编码
    res.send('<h1>Express</h1>')
})

// 可以通过ajax 调用 这个 url地址 获取 这些数据
app.get('/list', (req, res) => {
    res.send({
        name: 'djl',
        age: 19
    })
})

// 监听端口
app.listen(3000);
console.log('启动成功');
