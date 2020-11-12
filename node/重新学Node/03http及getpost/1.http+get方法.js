// 引入用于创建网站服务器模块
const http = require('http');
// 用于处理url地址        有一个方法 parse
const url = require('url');
// 创建web服务器对象   app
const app = http.createServer();
// 客户端发送请求request的时候
app.on('request', (req, res) => { // 两个参数  req请求   res响应
    // const url = req.url; // 1. 获取请求的地址
    const header = req.headers; // 2. 获取请求报文信息      可以通过这个获取具体信息  req.headers['host'] 等
    // 3. 获取请求方式   req.method
    // console.log(req.method) // 请求方式       在地址栏输入网址是GET方式    表单的默认跳转也是GET方式
    // console.log(header)       
    res.writeHead(200, {   // 编辑状态码和内容状态   200成功    400客户端语法错误    500服务器错误   404请求资源没有找到
        // 'content-type': 'text/plain'         // 纯文本格式   默认     如果写的是中文则要进行编码
        'content-type': 'text/html;charset=utf8'             // html格式         
    });
    // console.log('请求参数'+url)      // 获取一下请求参数 例子:?uname=djl&age=19
        // console.log(url.parse(req.url,true))     //  两个参数   第一个是解析URL地址可以拿到请求参数中的参数是字符串形式     第二个true是将查询参数转换为对象的形式
        // console,log(url.parse(req.url,true).query)     // 拿到这个对象
        let { query, pathname} = url.parse(req.url,true);         // query 是查询参数  pathname 是路径 例如 '/index'
        console.log(query.uname);   // djl   这里面的uname要对应
        console.log(query.age);     // 19     age也一样
    if (pathname === '/http' || pathname == '/') {
        // 响应结果
        res.end('<h1>第一个web服务器！</h1>');
    }
    else if (pathname == '/server') {
        res.end('serverpage')
    }
    else {
        res.end('not found')
    }
    if (req.method == 'POST') {
        console.log('你用的是POST请求');
        res.end('POST')
    }
    else if (req.method == 'GET') {
        console.log('你用的是GET请求');
        res.end('GET')
    };
});     

// 监听3000端口
app.listen(3000);
console.log('服务器已启动');
