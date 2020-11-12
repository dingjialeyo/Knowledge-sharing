//结合fs发送文件中的数据
//不同的数据资源（img css html js....）中的Content-Type是不一样的

var  http = require('http')
var fs = require('fs')

// 创建server
var server = http.createServer()

//这里是监听request请求事件，并处理函数                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
server.on('request',function(req,res){
    var url = res.url
    
    
})


server.listen(3000,function(){
    console.log('服务器启动了')
})