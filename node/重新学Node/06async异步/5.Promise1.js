const fs = require('fs');

// 创建Promise 对象
let promise = new Promise((resolve,reject) => {           // 两个参数也是两个函数      当这个异步成功了调用resolve    失败了调用reject
    fs.readFile('../../1.txt', 'utf8', (err,data) => {
        if (err != null) {
            reject(err);            // 失败了 把失败信息传出去  用参数传
        }
        else {
            resolve(data)
        }
    });
});
// then方法的第一个参数是resolve状态的回调函数，第二个参数（可选）是reject状态的回调函数。    
promise.then((data) => {
    console.log(data);
})     .catch((err) => {           // 链式编程
    console.log(err)            
})     
