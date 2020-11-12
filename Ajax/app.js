// 引入express框架
const express = require('express');
// 引入路径处理模块
const path = require('path');
const fs = require('fs');
const formidable = require('formidable')
const bodyparser = require('body-parser');
// 向其他服务器端请求数据的模块
const request = require('request');
// 创建web服务器
const app = express();
//代表要解析application/x-www-form-urlencoded格式的数据
app.use(bodyparser.urlencoded())
//代表要解析application/json格式的数据
app.use(bodyparser.json())

// 实现静态资源访问功能
app.use(express.static(path.join(__dirname,'public')));

// 一定要和请求的对应
// 01
app.get('/first', (req, res) => {
    // res.status(400).send('hello ajax')
    res.send('hello ajax')
});
// 02
app.get('/responseDate', (req,res) => {
    res.send({
        name : 'djl',
        age : 19
    })  // 响应的是字符串类型 需要JSON.parse() 进行转换
});
// 03
app.get('/get', (req,res) => {
    // 获取get请求参数 需要通过 req.query 来获取 获取的是对象
    res.send(req.query)      // req.query.属性名来获取真正的值
})
// 04
app.post('/post', (req,res) => {
    // 获取post请求参数 需body-parser模块引入 需下载
    res.send(req.body)     // req.body 即可获取
})
// 05
app.post('/json', (req,res) => {
    // 获取post请求参数 需body-parser模块引入 需下载
    res.send(req.body)     // req.body 即可获取    这个可以获取post请求的参数
})
// 06
app.get('/readyState', (req,res) => {
    res.send('ok')
})
// 07error处理
app.get('/error', (req,res) => {
    res.status(400).send('err') // 设置http状态码
})
// 08
app.get('/cache', (req,res) => {
    fs.readFile('./public/cache.txt', (err,data) => {
        res.send(data)
    });
})
// 11 
app.get('/verifyEmailAdress', (req, res) => {
    let email = '2374581806@qq.com'
    console.log(req.query)
    if (req.query.email == email) {
        res.send({
            message: '用户邮箱注册已被占用'
        });
    }
    else {
        res.send({
            message: '用户邮箱注册成功'
        });
    }
})
// 12
app.get('/search', (req, res) => {
    console.log(req.query)
    var hei = ["黑色","黑珍珠","黑玫瑰","黑人","黑煤炭"];
    var bai = ["白色","白珍珠","白玫瑰","白人","白雪"];
    if (req.query.value == '黑') {
        res.send(hei);
    }
    else if(req.query.value == '白') {
        res.send(bai);
    }
    else {
        res.send('没有找到')
    }
})
// 13 province
app.get('/province', (req, res) => {
    var province = [{
        id: '01',
        name: '湖南省'
    },{
        id: '02',
        name: '福建省'
    },{
        id: '03',
        name: '山东省'
    },{
        id: '04',
        name: '湖北省'
    },]
    res.send(province)
})
// 13 city
app.get('/city', (req,res) =>{
    var hunan = [{
        id: '01',
        name: '岳阳市'
    },{
        id: '02',
        name: '湘潭市'
    },{
        id: '03',
        name: '娄底市'
    },];
    var hubei = [{
        id: '01',
        name: '武汉市'
    },{
        id: '02',
        name: '黄石市'
    },{
        id: '03',
        name: '十堰市'
    },];
    var fujian = [{
        id: '01',
        name: '永安市'
    },{
        id: '02',
        name: '龙岩市'
    },{
        id: '03',
        name: '晋阳市'
    },];
    var shandong = [{
        id: '01',
        name: '青岛市'
    },{
        id: '02',
        name: '聊城市'
    },{
        id: '03',
        name: '威海市'
    },]
    console.log(req.query)  // { id: '02' }
    if (req.query.id == '01') {
        res.send(hunan);
    }
    else if(req.query.id == '02'){
        res.send(fujian)
    }
    else if(req.query.id == '03') {
        res.send(shandong)
    }
    else {
        res.send(hubei)
    }
})
// 13 area
app.get('/area', (req, res) => {
    var hunanarea = [{
        id: '01',
        name: '岳阳楼区'
    },{
        id: '02',
        name: 'xxx区'
    },{
        id: '03',
        name: 'xxxx区'
    },];
    var hunantwo = [{
        id: '01',
        name: '湖南二区'
    },{
        id: '02',
        name: 'xxx区'
    },{
        id: '03',
        name: 'xxxx区'
    },];
    var hunanthree = [{
        id: '01',
        name: '湖南三区'
    },{
        id: '02',
        name: 'xxx区'
    },{
        id: '03',
        name: 'xxxx区'
    },];
    console.log(req.query)  // { id: '02' }
    if (req.query.id == '01') {
        res.send(hunanarea);
    }
    else if(req.query.id == '02'){
        res.send(hunantwo)
    }
    else if(req.query.id == '03') {
        res.send(hunanthree)
    }
})
// 14 
app.post('/formdata', (req, res) => {  // post请求中通过formidable第三方模块可以访问formdata的请求数据
    // 创建formidable表单解析对象
    const form = new formidable.IncomingForm();
    // 解析客户端传递过来的FormDate对象
    form.parse(req, (err, fields, files) => { // 第一个参数是错误对象 第二个参数是formdata表单的普通请求参数 第三个参数是文件上传的信息
        res.send(fields)
    })
});
// 15
app.post('/file', (req, res) =>{
    var form = new formidable.IncomingForm();
    // 保留上传文件的后缀名字   默认是false是不保存
    form.keepExtensions = true
    // 设置客户端上传文件的存储路径
    form.uploadDir = path.join(__dirname,'public', 'file');
    form.parse(req,(err, fields, files) =>{
        // 将客户端传递的文件地址响应给客户端
        res.send({
            path: files.file.path.split('public')[1]
        }) // 切割字符串以public分割为两个数组
    })
})
// 20   需要引入第三方模块 request  作用就是可以访问其他服务器端
app.get('/server', (req, res) => {
    // 第一个参数为访问的服务器地址
    request('http://localhost:3001/cors', (err,response,body) => {
        console.log(err) // null
        console.log(res) // 一些对象
        console.log(body) // 访问到的数据 需要的
        res.send(body);  // 从另一个服务器端访问的数据结果
    })
})
// 22
app.get('/jquery', (req, res) => {
    const {name, age} = req.query;
    console.log(req.query)
    console.log(name)
    console.log(age)
    res.send({
        name : 'jq',
        age : 20
    })
})
// 22
app.get('/jqueryapi', (req, res) => {
    const {uname, password} = req.query;
    console.log(req.query)
    console.log(uname)
    console.log(password)
    res.send({
        uname:uname,
        password:password
    })
})
// 25 XML
app.get('/xml', (req, res) => {
    // 设置xml格式
    res.header('content-type','text/xml')
    res.send('<message><title>消息标题</title><content>消息内容</content></message>')
})
// 监听端口
app.listen(3000);
// 控制台提示
console.log('服务器启动成功');