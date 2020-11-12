// Node.js 规定一个javascript文件就是一个模块， 模块内部内部定义的变量和函数默认情况是外部无法访问的
// 模块内部可以通过exports对象进行导入,使用require方法导入其他模块

// 第一种方法
const add = (n1,n2) => n1 + n2;     // 这个模块有这个加法功能然后用另一个模块调用这个模块的方法
exports.add = add;       // 导出这个方法


