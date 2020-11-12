// 1. 搭建网站服务器, 实现客户端与服务器之间的通信
// 2. 连接数据库, 创建表, 向表中插入数据
// 3. 当用户访问/list时, 将用户信息查询出来
//      1. 实现路由功能
//      2. 呈现页面
//      3. 从数据库中查询用户信息, 呈现到页面中
// 4. 将用户信息和表格HTML进行拼接并将拼接结果响应给客户端
// 5. 当用户访问/add时, 呈现添加页面 实现添加用户信息功能
//      1. 通过添加获取路由呈现页面
//      2. 添加数据使用post方法来获取
//      3. 获取到的数据传入数据库
// 6. 当用户访问/modify时, 呈现修改页面 实现修改功能         通过数据库中的id来获取
//      1. 通过修改获取路由呈现页面
//          点击修改按钮获取用户ID
//          通过用户ID获取当前信息  呈现到页面中
//      2. 实现用户修改功能
//          指定表单修改的提交地址以及提交方式
//          接收修改的信息,更新对应数据的数据库
// 7. 当用户访问/delete时, 实现删除功能
//          接收修改的信息,更新对应数据的数据库
// 8. 已经完成但是要进行改善 使用模块化开发  对应分离

// 1. 
const Case =  require('./model/user');     // 接收
require('./model/index');     // 接收

const http = require('http');
const url = require('url');
const querystring = require('querystring')
const app = http.createServer();
app.on('request', async (req, res) => {
    const method = req.method;
    const {
        query,
        pathname
    } = url.parse(req.url, true); // query 是查询参数本身是字符串类型，当为true  query为对象类型    
    // const {pathname} = url.parse(req.url)
    if (method == 'GET') { // 页面的请求都是GET方法
        // 呈现列表页面
        if (pathname == '/list' || pathname == '/') {
            // await 只能出现在异步函数中     
            let AsyncCase = await Case.find()
            // console.log(AsyncCase)
            // 数据与页面进行拼接       头部拼接
            let list = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h6>
                        <a href="add" class="btn btn-primary">添加用户</a>
                    </h6>
                    <table class="table table-striped table-bordered">
                        <tr>
                            <td>用户名</td>
                            <td>年龄</td>
                            <td>爱好</td>
                            <td>邮箱</td>
                            <td>操作</td>
                        </tr>
                        `
            // 数据部分
            // 对数据进行遍历
            AsyncCase.forEach(item => { // item.name      模板中的特有写法    ${}      然后爱好也是一个数组 所以还需要在内部拆分  循环遍历
                list += `
					<tr>
						<td>${item.name}</td>
						<td>${item.age}</td>
						<td>
				`;

                item.hobbies.forEach(item => {
                    list += `<span>${item}</span>`;
                })

                list += `</td>
						<td>${item.email}</td>
						<td>
							<a href="/remove?id=${item._id}" class="btn btn-danger btn-xs">删除</a>
							<a href="/modify?id=${item._id}" class="btn btn-success btn-xs">修改</a>
						</td>
					</tr>`;
            });
            // 尾部拼接
            list += `
						</table>
					</div>
				</body>
				</html>
			`;
            res.end(list);
            // 添加页面
        } else if (pathname == '/add') {
            let add = `<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>用户列表</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
</head>

<body>
	<div class="container">
		<h3>添加用户</h3>
		<form method="post" action="/add">
			<div class="form-group">
				<label>用户名</label>
				<input name="name" type="text" class="form-control" placeholder="请填写用户名">
			</div>
			<div class="form-group">
				<label>密码</label>
				<input password="password" type="password" class="form-control" placeholder="请输入密码">
			</div>
			<div class="form-group">
				<label>年龄</label>
				<input name="age" type="text" class="form-control" placeholder="请填写邮箱">
			</div>
			<div class="form-group">
				<label>邮箱</label>
				<input name="email" type="email" class="form-control" placeholder="请填写邮箱">
			</div>
			<div class="form-group">
				<label>请选择爱好</label>
				<div>
					<label class="checkbox-inline">
						<input type="checkbox" value="足球" name="hobbies"> 足球
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="篮球" name="hobbies"> 篮球
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="橄榄球" name="hobbies"> 橄榄球
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="敲代码" name="hobbies"> 敲代码
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="抽烟" name="hobbies"> 抽烟
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="喝酒" name="hobbies"> 喝酒
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="烫头" name="hobbies"> 烫头
					</label>
				</div>
			</div>
			<button type="submit" class="btn btn-primary">添加用户</button>
		</form>
	</div>
</body>

</html> `
            res.end(add);
            // 修改页面
        } else if (pathname == '/modify') {
            let id = await Case.findOne({
                _id: query.id
            });
            let hobbiesArr = ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头', '吃饭', '睡觉', '打豆豆'];
            console.log(id) // 返回的是该id的对应数据
            // 对应的数据与页面进行拼接
            let modify = `<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>用户列表</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
</head>

<body>
	<div class="container">
		<h3>修改用户</h3>
		<form method="post", action="/modify?id=${id._id}" >
			<div class="form-group">
				<label>用户名</label>
				<input name="name" type="text" class="form-control" placeholder="请填写用户名" value="${id.name}" >
			</div>
			<div class="form-group">
				<label>密码</label>
				<input password="password" type="password" class="form-control" placeholder="请输入密码" value="${id.password}" >
			</div>
			<div class="form-group">
				<label>年龄</label>
				<input name="age" type="text" class="form-control" placeholder="请填写邮箱" value="${id.age}" >
			</div>
			<div class="form-group">
				<label>邮箱</label>
				<input name="email" type="email" class="form-control" placeholder="请填写邮箱" value="${id.email}" >
			</div>
			<div class="form-group">
				<label>请选择爱好</label>
				<div>`
            // 数组拼接
            hobbiesArr.forEach(item => { // item  相当于是遍历的数组中的每一个元素
                // 判断当前循环遍历项在不在用户的爱好数组里
                let isHobby = id.hobbies.includes(item); // 返回值为布尔值     意思是id的中爱好数据有没有和这个数组匹配的
                if (isHobby) {
                    modify += `<label class="checkbox-inline">
                    <input type="checkbox" value="${item}" name="hobbies" checked> ${item}
                </label>`
                } else {
                    modify += `<label class="checkbox-inline">
                    <input type="checkbox" value="${item}" name="hobbies"> ${item}
                </label>`
                }
            })
            modify += `</div>
                </div>
                <button type="submit" class="btn btn-primary" >修改用户</button>
            </form>
        </div>
    </body>
    
    </html>`
            res.end(modify);



        }   //删除页面
        else if (pathname == '/remove') {
            // res.end(query.id)       能够获取对应的数据库ID
            await Case.findOneAndDelete({_id: query.id});
            res.writeHead(301,{
                'Location': '/list'
            });
            res.end(); // 结束
        }

    } else if (method == 'POST') {
        // 处理用于添加功能   因为我在表单写的方法为post  当点击添加按钮  程序会传入这个路由 
        if (pathname == '/add') {
            // console.log(123)
            // 1. 接收数据需要queryString模块
            let formData = ""; // 声明一个变量来接收
            // 接收post请求参数
            req.on('data', (params) => { // params传过来的参数
                formData += params;
            });
            // post请求完成处理
            req.on('end', async () => {
                // console.log(postParams);     // uname=djl&pwd=dingjiale  但是依然是字符串 用到内置模块querystring进行转换
                // 添加的数据   
                let addData = querystring.parse(formData);
                // console.log(addData)     写入的数据      并且刚好是对象类型  添加到数据库时不需要转换
                // 2. 将用户提交的信息添加到数据库中
                await Case.create(addData);
                // res.end();
                // 添加成功跳转页面     301重定向     Location跳转地址
                res.writeHead(301, {
                    'Location': '/'
                });
                res.end();
            });
        } else if (pathname == '/modify') {
            // 获取用户修改的最新数据
            // 1. 接收数据需要queryString模块
            let formData = ""; // 声明一个变量来接收
            // 接收post请求参数
            req.on('data', (params) => { // params传过来的参数
                formData += params;
            });
            // post请求完成处理
            req.on('end', async () => {
                // console.log(postParams);     // uname=djl&pwd=dingjiale  但是依然是字符串 用到内置模块querystring进行转换
                // 修改的数据   
                let Updata = querystring.parse(formData);
                // console.log(addData)     写入的数据      并且刚好是对象类型  添加到数据库时不需要转换
                // 2. 将用户提交的信息修改到数据库中
                await Case.updateOne({
                    _id: query.id
                }, Updata);
                // res.end();
                // 添加成功跳转页面     301重定向     Location跳转地址
                res.writeHead(301, {
                    'Location': '/'
                });
                res.end();
            });
        }
    } else {
        res.end('404')
    }
})
app.listen(300);



