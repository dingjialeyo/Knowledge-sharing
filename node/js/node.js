var http = require('http')
var fs = require('fs')


var server = http.createServer()
//request   response    plain   html   img/png
server.on('request',function(req,res){
    res.setHeader('Content-Type','text/html')
    var url = req.url
    if(url === '/'){
        console.log("go")
        fs.readFile('../html/index.html',function(err,data){
            res.end(data)
        })
    }
    
    else{
        res.end('<h1>4000004!</h1>')
        console.log("no");
    }

})

server.listen(3000,function(){

    console.log('服务器启动')

})