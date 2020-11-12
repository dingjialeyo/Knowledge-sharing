// 引入express框架        而且不再需要引入http模块
const express = require('express');
// 引入body-parser模块
const bodyParser = require('body-parser');
const path = require('path')
// 创建网站服务器
const app = express(); 

// 1. 告诉express框架使用什么模板引擎渲染什么后缀的模板文件
app.engine('art', require('express-art-template'));
// 2. 告诉express框架模板存放的位置           第一个参数固定     第二个为路径
app.set('views', path.join(__dirname,'views'))
// 3. 告诉express框架模板的默认后缀名是什么
app.set('view engine', 'art');

// 公共数据 模板都可以添加
app.locals.users = [{
    name: '123',
    age: 19
}]


app.get('/index', (req, res) => {
    res.render('index', {        // 第一个参数为模板文件的名字   第二个是对象
        msg: 'index'
    })
});
app.get('/list', (req, res) => {
    res.render('list', {        // 第一个参数为模板文件的名字   第二个是对象
        msg: 'list'
    })
});


app.listen(3000);
console.log('启动');