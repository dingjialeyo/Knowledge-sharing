//requrie 方法有两个作用：
// 1.加载文件模块里面的代码
// 2.拿到被加载文件模块导出的接口对象  每个文件都提供一个对象:exports
// exports 默认是一个空对象
// 要的是把所有需要被外部访问的成员到丢给这个exports这个对象中

var fo = require('./b.js')

var fs = require('fs')

console.log(fo.foo)

console.log(fo.add(5,5))

console.log(fo.age)

fo.readFile('./a.js')


fs.readFile('./a.js',function(err,data){

if(err){
    console.log('文件读取失败')
}
else{
    console.log(data.toString())
}

})