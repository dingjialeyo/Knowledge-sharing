// 引入express框架        而且不再需要引入http模块
const express = require('express');
// 创建网站服务器
const app = express();
// 创建路由 返回路由对象
const home = express.Router()

// 为路由对象匹配请求路径
app.use('/home', home);
// 创建二级路由      /home/index
home.get('/index', (req, res) => {
    res.send('欢迎来到index')
})

app.listen(3000);
console.log('启动');