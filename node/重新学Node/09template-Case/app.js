// 引入用于创建网站服务器模块
const http = require('http');
// 引入数据库模块
const Student =  require('./model/user');     // 接收
require('./model/index');     // 接收
// 引入router路由模块 需npm下载
const getRouter = require('router');
// 接收路由对象
const router = getRouter();
// 引入模板art-template
const template = require('art-template');
// 用于处理url地址     有一个方法 parse
const url = require('url');
// 引入路径模块
const path = require('path')
// 引入静态资源访问模块
const serveStatic = require('serve-static');
// 创建web服务器对象   app
const app = http.createServer();
// 实现静态资源访问的服务       第一个参数是路径
const serve = serveStatic(path.join(__dirname,'public'));

// 配置模板的根目录
template.defaults.root = path.join(__dirname,'views')

// router写法
// 档案信息页面
router.get('/index', (req,res) => {
    const html = template('index.art',{})
    res.end(html)
})
// 呈现页面
router.get('/list', (req,res) => {
    const html = template('list.art',{})
    res.end(html)
})

app.on('request',(req,res) => {
    const method = req.method;
    const pathname = url.parse(req.url).pathname;
    // 调用这个router方法
    router(req, res, () => {
        console.log('router调用正常')
    });
    // 调用这个serve方法
    serve(req, res, () => {
        console.log('serve调用正常')
    })
})

app.listen(8080);
console.log('启动成功');