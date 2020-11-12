const express = require('express');
const path = require('path')
const router = require('./router.js')
const bodyParser = require('body-parser');
const app = express();
// 处理静态资源
app.use(express.static('public'));
// 处理参数
//代表要解析application/json格式的数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));

// 拦截所有的请求
app.use((req, res, next) => {
    // 1. 设置哪些客户端跨域访问我
    // CORS(跨域资源共享)     *代表所有的客户端跨域访问我
    res.header('Access-Control-Allow-Origin', '*');
    // 2. 设置客户端使用哪种请求方式访问我
    res.header('Access-Control-Allow-Methods', '*'); // 表示所有请求都可以
    // 允许客户端跨域请求时 携带cookie信息
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild , mytoken');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 不调用的话就卡在这了
});
// 配置路由
app.use(router);

app.listen(3000, () => {
    console.log('启动成功')
})

