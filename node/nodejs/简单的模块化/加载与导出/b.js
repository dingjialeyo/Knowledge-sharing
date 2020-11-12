
//被对象exports所调用的数据会被其他模块访问

var foo = 'bbb'

exports.foo = 'hello'

exports.add = function(x,y){

    return x+y
}

var age = '1aaa'
exports.age = age

exports.readFile = function(pp,xxx){

console.log('文件路径:',pp)

}