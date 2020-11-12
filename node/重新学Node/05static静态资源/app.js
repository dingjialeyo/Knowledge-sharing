// 1. 引入系统模块http  url  path  fs  mime
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
// 2. 创建网站服务器
const app = http.createServer();
// 3. 为网站服务器对象添加请求事件
app.on('request', (req, res) => {
    let pathname = url.parse(req.url).pathname; // 获取页面纯路径   
    pathname = pathname == '/' ? '/index.html' : pathname;
    // 将它转换为文件真实的物理路径要进行路径拼接
    let realpath = path.join(__dirname, 'public' + pathname); // __dirname 指的是该路径的绝对路径 
    // res.end(path.join(__dirname , 'public' + pathname));        // C:\Users\丁嘉乐\Desktop\重要资料\node\重新学Node\05static静态资源\public\
    let type = mime.getType(realpath); // 根据路径可以返回该路径需要的类型
    fs.readFile(realpath, (err, data) => {
        if (err == null) {
            // 返回值得类型         如果请求的类型有多个那么需要   mime模块   下载npm i mime   方法调用
            res.writeHead(200, {   // 编辑状态码和内容状态   200成功    400客户端语法错误    500服务器错误   404请求资源没有找到
                // 'content-type': 'text/plain'         // 纯文本格式   默认     如果写的是中文则要进行编码
                'content-type': type         
            });
            res.end(data); // 读取文件
            // console.log(type) // 就可以返回一系列类型
        } else {
            // 返回值得类型
            res.writeHead(404, {   // 编辑状态码和内容状态   200成功    400客户端语法错误    500服务器错误   404请求资源没有找到
                // 'content-type': 'text/plain'         // 纯文本格式   默认     如果写的是中文则要进行编码
                'content-type': 'text/html;charset=utf8'             // html格式         
            });
            res.end('<h1>404</h1>');
            return;
        }
    })
})



// 5.监听端口
app.listen(3000);
console.log('服务器启动')
