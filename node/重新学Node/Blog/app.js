// 接收外部数据
const home = require('./route/home');
const admin = require('./route/admin');

// 引入express模块
const express = require('express');
// 创建网站服务器
const app = express();
const path = require('path');

// 1. 告诉express框架使用什么模板引擎渲染什么后缀的模板文件
app.engine('art', require('express-art-template'));
// 2. 告诉express框架模板存放的位置           第一个参数固定     第二个为路径
app.set('views', path.join(__dirname,'views'))
// 3. 告诉express框架模板的默认后缀名是什么
app.set('view engine', 'art');

// 开放静态资源文件
// 先拦截所有的请求         路径建议都写绝对路径
app.use(express.static(path.join(__dirname,'public'))) // /admin/xxx   即可访问静态文件

// 如果请求路径为home  那么久交给home路由去处理
app.use('/home', home);
// 如果请求路径为admin 那么久交给admin路由去处理
app.use('/admin', admin);











// 监听端口
app.listen(3000);
console.log('启动成功')