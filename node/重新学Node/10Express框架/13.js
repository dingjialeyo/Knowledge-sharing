// 引入express框架        而且不再需要引入http模块
const express = require('express');
// 引入body-parser模块
const bodyParser = require('body-parser');
const path = require('path')
// 创建网站服务器
const app = express(); 

const luj = path.join(__dirname,'public');

// 先拦截所有的请求         路径建议都写绝对路径
app.use('static', express.static(luj))         // static/public/xxx      即可访问静态文件       

app.listen(3000);
console.log('启动');