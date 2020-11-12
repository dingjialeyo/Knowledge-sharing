//  这个是读数据
var fs = require('fs')

//这个是写数据
fs.readFile('../de/1.php',function(err,data){
    res.end(data)
})

server.listen(3000,function(){
    console.log('服务器启动了')
})
