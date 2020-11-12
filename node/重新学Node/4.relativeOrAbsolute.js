// 相对路径 与 绝对路径

const fs = require('fs'); // 引入文件管理模块
const path = require('path'); // 引入路径处理模块

// 相对路径读取
// fs.readFile('./0.hellonode.js','utf8',(err,data) => {     
//     console.log(err);     // null
//     console.log(data);    // 文件内容
// });
// 绝对路径读取    一般来说都是使用绝对路径
console.log(__dirname);  // C:\Users\丁嘉乐\Desktop\重要资料\node\重新学Node
console.log(path.join(__dirname,'0.hellonode.js'))  // C:\Users\丁嘉乐\Desktop\重要资料\node\重新学Node\0.hellonode.js
fs.readFile(path.join(__dirname,'0.hellonode.js'),'utf8',(err,data) => {      // __dirname 拿到当前路径下的绝对路径
    console.log(err);     // null
    console.log(data);    // 文件内容
});
// CMD  node .\重新学Node\4.relativeOrAbsolute.js  用绝对路径才能访问到