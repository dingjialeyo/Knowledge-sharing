// 引入用于创建网站服务器模块
const http = require('http');
// 处理请求参数模块
const querystring = require('querystring');
// 创建web服务器对象   app
const app = http.createServer();
// 客户端发送请求request的时候
app.on('request', (req, res) => { // 两个参数  req请求   res响应
    // POST参数是通过事件的方式接收的
    // data事件    当请求参数传递的时候触发data事件
    // end事件     当请求参数传递完成的时候触发end事件

    let postParams = "";     // 声明一个变量来接收
    req.on('data', (params) => {       // params传过来的参数
        postParams += params;         
    });

    req.on('end', () => {
        // console.log(postParams);     // uname=djl&pwd=dingjiale  但是依然是字符串 用到内置模块querystring进行转换
        console.log(querystring.parse(postParams))  // { uname: 'dingjiale', pwd: '2374581806' }
        console.log(querystring.parse(postParams).uname)   // dingjiale         这里的uname 和 pwd 是表单里面的name值
        console.log(querystring.parse(postParams).pwd)     // 2374581806
    });


    res.end('ok')
});     

// 监听3000端口
app.listen(3000);
console.log('服务器已启动');
