// 同步
var sum = (n1,n2) => n1+n2
console.log(sum(5,6));

// 异步                   异步API是无法通过返回值拿到结果的    而是通过回调函数拿到的
function getReturnValue(callback) {
    setTimeout(function() {
        callback({
            msg: 'hello'
        })
    },1000)
};

getReturnValue(function (data) {
    console.log(data)              // 这样既可获取
});
// console.log(result)        // undefined     因为seTimeout还没执行，就已经返回值了