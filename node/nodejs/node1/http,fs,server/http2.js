var  http = require('http')

// 创建server
var server = http.createServer()


//request  请求事件处理函数，需要接收两个参数
//     Request   请求对象     请求对象可以用来获取客户端的一些请求信息，例如请求路径
//     Response  响应对象     响应对象可以用来给客户端发送响应消息


//这里是监听request请求事件，并处理函数                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
server.on('request',function(request,response){
    console.log('收到' + request.url)
    //如果是127.0.0.1：3000的话收到的路径为/



    //response 对象有一个方法 ：write 可以用来给客户端发送响应数据
    //write 可以多次使用，但是最后一定要end来结束响应，否则客户端会一直等待

    // response.write('hello')
    // response.write('hello')
    // response.end()
    //直接用end来响应事件
    // response.end('hello')
    var url = request.url
    if(url === '/'){
        console.log('这个是根目录')
        response.end('/////')
    }
    else if(url === '/login'){
        console.log('这个是loginpage')
        response.end('login')
    }
    else {

        console.log('404')
        response.end('404')

    }
})


server.listen(3000,function(){
    console.log('服务器启动了')
})