var fs = require('fs')
fs.readFile('./de/1.txt',function(error,data){
    console.log(data.toString())

});

// var fs = require('fs')
// fs.writeFile('./de/2.txt','大家好啊，这是我自己',function(error){

// console.log('文件写入成功！')
// });