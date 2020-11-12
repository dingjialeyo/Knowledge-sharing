// 解决回调地狱
const fs = require('fs');
// 这种嵌套是会依次执行   但是难以维护         所以用 Promise   解决这种回调地狱的问题
// fs.readFile('../../1.txt', 'utf8', (err,data) => {           
//     console.log(data)
//     fs.readFile('../../2.txt', 'utf8', (err,data) => {
//         console.log(data)
//         fs.readFile('../../3.txt', 'utf8', (err,data) => {
//             console.log(data)
//         });
//     });
// });

//  如何解决   首先看当前回调地狱中有多少异步API   在这有三个读取文件的异步API        只是换了一种形式    换汤不换药   
function p1() {
    return new Promise((resolve,reject) =>{
        fs.readFile('../../1.txt', 'utf8', (err,data) => {
            resolve(data)
        });
    });
}

function p2() {
    return new Promise((resolve,reject) =>{
        fs.readFile('../../2.txt', 'utf8', (err,data) => {
            resolve(data)
        });
    });
}

function p3() {
    return new Promise((resolve,reject) =>{
        fs.readFile('../../3.txt', 'utf8', (err,data) => {
            resolve(data)
        });
    });
}
p3().then((resolve) => {
    console.log(resolve);
    return p1();
})
    .then((resolve) => {
        console.log(resolve);
        return p2();
    })
    .then((resolve) => {
        console.log(resolve)
    })
    // 这样执行的话就是 3 1 2                解决了用多层回调的方法
