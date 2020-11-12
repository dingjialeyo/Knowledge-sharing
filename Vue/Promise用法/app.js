const express = require('express');
const app = express();
const bodyParser = require('body-parser');
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

// 路由
app.get('/data', (req, res) => {
    res.send('Hello')
});
app.get('/data2', (req, res) => {
    setTimeout( function () {
        res.send('info')
    },1000)
});
app.get('/info', (req, res) => {
    if(req.query.info == 'info') {
        res.send('传递成功--' + req.query.info)
    }
    else {
        res.send('error')
    }
});
app.get('/data3', (req, res) => {
    res.send('Hello3')
});

app.get('/data4', (req, res) => {
    res.send('传统URL传递参数' + req.query.id)
});
app.get('/data5/:id', (req, res) => {
    res.send('Restful形式URL传递参数' + req.params.id)
});
app.delete('/data6/:id', (req, res) => {
    res.send('Restful形式的DeleteURL传递参数' + req.params.id)
});
app.post('/data6', (req, res) => {
    res.send('post方法字符串传递参数' + req.body.uname + '---' + req.body.pwd)
});
app.post('/data7', (req, res) => {
    res.send('post方法Json格式传递参数' + req.body.uname + '---' + req.body.age)
});
app.put('/data8/:id', (req, res) => {
    res.send('Restful形式的put方法URL传递参数' + req.params.id + '------' + req.body.uname + '-------' + req.body.age)
});
app.get('/geshi', (req, res) => {
    var obj = {
        name : 'djl',
        age : 19
    }
    res.send(obj)
})
app.get('/axios', (req, res) => {
    res.send('axios get 传递参数' + req.query.id)
});
app.get('/axios2/:id', (req, res) => {
    res.send('axios get 传递参数' + req.params.id)
});
app.get('/axios3', (req, res) => {
    res.send('axios get params传递参数' + req.query.id)
});
app.delete('/axios4', (req, res) => {
    res.send('axios delete params传递参数' + req.query.id)
});
app.post('/axios5', (req, res) => {
    res.send('axios post 传递参数' + req.body.name + '----' + req.body.age)
});
app.post('/axios6', (req, res) => {
    res.send('axios post 传递参数' + req.body.name + '----' + req.body.age)
});
app.put('/axios7', (req, res) => {
    res.send('axios put 传递参数' + req.body.name + '----' + req.body.age)
});

// 启动
app.listen(3000, () => {
    console.log('启动成功');
})


