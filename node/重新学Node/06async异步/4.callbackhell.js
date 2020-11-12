// 回调地狱
const fs = require('fs');
// 这种嵌套是会依次执行   但是难以维护         所以用 Promise   解决这种回调地狱的问题
fs.readFile('../../1.txt', 'utf8', (err,data) => {           
    console.log(data)
    fs.readFile('../../2.txt', 'utf8', (err,data) => {
        console.log(data)
        fs.readFile('../../3.txt', 'utf8', (err,data) => {
            console.log(data)
        });
    });
});