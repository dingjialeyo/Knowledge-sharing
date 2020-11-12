// 1. 先引入fs模块
const fs = require('fs');


// 2. 通过模块内部的writeFile方法 "写入" 文件内容
fs.writeFile('../write.txt','hello node.js',err => {  // 同样三个参数  路径  写入内容  函数
    if (err != null) {   // err 不为空说明读取失败
        console.log('读取失败');
        return;   // 读取失败了，然后阻止代码向下执行
    }
    else {
        console.log('读取成功！') // 说明写入成功了
    }
})