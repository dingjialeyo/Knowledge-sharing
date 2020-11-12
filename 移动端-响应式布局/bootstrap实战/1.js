var http = require('http')
var fs = require('fs')


var server = http.createServer()

server.on('request',function(req,res){
    var url = req.url
    if(url === '/'){
        fs.readFile('./bootstrap/html/index.html,',function(err,data){
            res.end(data)
        })
    }
    else{
        res.end('<h1>404!</h1>')
    }

})

server.listen(3000,function(){

    console.log('服务器启动')

})