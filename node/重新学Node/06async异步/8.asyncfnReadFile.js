// 解决了回调地狱的问题
const fs = require('fs');
const promisify = require('util').promisify; // promisify方法是用来改造一些异步API的，使这些异步API返回Promise对象  从而支持异步函数语法
// 现在的fs.readFile()需要一个util模块的promisify方法才能返回promise对象   才能使用await方法
// promisify方法 改造一下fs.readFile这个异步API   就能返回     Promise对象
const readFile = promisify(fs.readFile);

    async function run() {
        let f1 = await readFile('../../1.txt','utf8')       // 不执行完成不往后执行   通过返回值来获取数据
        let f2 = await readFile('../../2.txt','utf8')
        let f3 = await readFile('../../3.txt','utf8')
        console.log(f1)
        console.log(f2)
        console.log(f3)
    }
    run()