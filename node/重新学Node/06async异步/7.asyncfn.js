// 异步函数   
    // 1. 在普通函数定义async关键字 普通函数就变为异步函数
    // 2. 异步函数的返回值默认是Promise对象
    // 3. 在异步函数内部使用throw关键字进行错误抛出
// async function f1() {

// } 
// console.log(f1())  // Promise { undefined }
async function f1() {
    throw "404";     // 和return一样 执行了 后面就不执行
    return 123; 
} 
// console.log(f1())  // Promise { 123 }     
// 所以说这个函数我们可以用then方法  和Promise一样  比Promise更简洁 不需要new一个Promise对象  但是原来的catch方法中的错误处理reject参数了 ===》 throw
// 相当于return 的返回值 就是 then方法中的data参数   throw的返回值 就是catch方法中的reject参数 
f1().then((data) => {
    console.log(data); // 123
})  .catch((reject) => {
    console.log(reject)  // 404
})

// 异步函数中的await关键字
    // 1. 它只能出现在异步函数中
    // 2. await 后面跟 Promise对象    它可以暂停异步函数的执行  等待Promise对象返回结果后再向下执行函数

    // 例子依次读取123文件
    async function p1() {  
        return 1;
    };

    async function p2() {  
        return 2;
    }

    async function p3() {  
        return 3;
    }
    // 通过一个run函数来执行这些异步函数
    async function run() {
        await p1();              // 没有返回结果是不会向下执行的    将异步代码写成同步代码的形式  和 同步一样
        await p2();
        await p3();
        console.log(await p1());
        console.log(await p2());
        console.log(await p3());
    }
    run()         // 123