// 1. 通过模块的名字 fs 对模块进行应用
const fs = require('fs');

// 2. 通过模块内部的readFile方法 "读取" 文件内容
fs.readFile('./0.hellonode.js', 'utf8', (err,data) => { // 三个参数 路径  编码格式  回调函数     回调函数有两个参数  err 错误信息  和  data 数据结果 
    // 如果文件读取出错 err 是错误信息    如果文件读取正确 err 是 null
    if (err == null) {          
        console.log(data); // var first = 'hello nodejs'; // console.log(first);  返回的是读取文件的数据data   说明 err == null 
    }
});