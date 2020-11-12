var  http = require('http')

var server = http.createServer()


//request  请求事件处理函数，需要接收两个参数
//     Request   请求对象     请求对象可以用来获取客户端的一些请求信息，例如请求路径
//     Response  响应对象     响应对象可以用来给客户端发送响应消息
server.on('request',function(request,response){
    console.log('收到' + request.url)

    //request.socket.remotePort获取端口号
    //request.socket.remoteAddress收到的端口号

    //如果是127.0.0.1：3000的话收到的路径为/



    //response 对象有一个方法 ：write 可以用来给客户端发送响应数据
    //write 可以多次使用，但是最后一定要end来结束响应，否则客户端会一直等待

    // response.write('hello')
    // response.write('hello')
    // response.end()

    // response.end('hello')
    var url = request.url

    if (url === '/products'){
        var products = [{
            name: '苹果',
            price: 88
        },
        {
            name: '香蕉',
            price: 66
        },
        {
            name: '栗子',
            price: 33
        },
    ]


    response.end(JSON.stringify(products))
    //response.end()里面响应的内容只能是二进制数据或者字符串
    //不能是数字，对象，数组，布尔值
    //JSON.parse('[]')转数组
    //JSON.stringify([])转字符串数组  例如：response.end(JSON.stringify(products))


    }
})


server.listen(3000,function(){
    console.log('服务器启动了')
})