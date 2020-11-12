var  http = require('http')

var server = http.createServer()

server.on('request',function(req,res){

    //响应内容中的中文会变成乱码所以要添加响应内容的类型
    // res.setHeader('Content-Type','text/plain; charset=utf-8')
    // res.end('hello  大家好')
    //text/plain  简单的文本类型
    //text/html   html 类型
    


    var url = req.url

    if(url === '/plain'){
        res.setHeader('Content-Type','text/plain; charset=utf-8')
        res.end('hello  大家好')
    }
    else if(url === '/html'){
        res.setHeader('Content-Type','text/html; charset=utf-8')
        res.end('<p>hello html<a href="#">点我</a></p>')
    }
})


server.listen(3000,function(){
    console.log('服务器启动了')
})