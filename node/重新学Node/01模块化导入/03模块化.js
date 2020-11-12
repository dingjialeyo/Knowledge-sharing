
// 第二种方法
const uname = name =>  `hello ${name}`;
const x = 100;         // 没有模块导出的话 别的模块是访问不到这个变量
module.exports.uname = uname;
module.exports.x = x;   // 这样的话 别的模块就可以访问

// 优先级高于上面   module.exports   >   module.exports.对象
module.exports = {
    uname: 'dingjiale',
    age: 18
}

// 如果第一种方法的exports.对象 和 module.exports.对象 指向的是不同地址 以 module.exports为准 