// 1. 引入系统模块http  url
    const http = require('http');
    const url = require('url')
// 2. 创建网站服务器
    const app = http.createServer();
// 3. 为网站服务器对象添加请求事件
    app.on('request', (req,res) => {
        res.writeHead(200, {   // 编辑状态码和内容状态   200成功    400客户端语法错误    500服务器错误   404请求资源没有找到
            // 'content-type': 'text/plain'         // 纯文本格式   默认     如果写的是中文则要进行编码
            'content-type': 'text/html;charset=utf8'             // html格式         
        });
        // 获取客户端的请求方式
        const method = req.method.toLowerCase();      // toLowerCase()转换小写
        // 获取客户端的请求地址    要通过url模块
        const pathname = url.parse(req.url).pathname;      // const {pathname} = url.parse(req.url);    等价
        // 先判断请求方式然后判断请求地址
        if (method == 'get') {
            if (pathname == '/' || pathname == '/index') {
                res.end('<h1>欢迎来到主页</h1>');
            }
            else if (pathname == '/list') {
                res.end('<h1>欢迎来到列表页</h1>');
            }
            else {
                res.end('<h1>404</h1>');
            }
        }
        else if (method == 'post') {     // 和上面同样

        }
    })
// 4. 实现路由功能 --->1. 获取客户端的请求方式  -->  2.获取客户端的请求地址


// 5.监听端口
    app.listen(3000);
    console.log('服务器启动')
