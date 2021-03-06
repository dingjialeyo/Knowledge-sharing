// 查找


// 连接数据库
const mongoose = require('mongoose'); // 需要通过这个模块来连接Mongodb数据库

mongoose.connect('mongodb://localhost/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }) // 连接数据库   test 如果数据库当中没有则创建这个数据库
    .then(() => {
        console.log('成功')
    })
    .catch((err) => {
        console.log(err, '连接失败！')
    });


// 创建数据库

// 创建集合规则
const bookSchema = new mongoose.Schema({                // 规则Schema方法是一个构造函数  需要new来调用
    name: String,             // 这些都是字段    给定这些字段的类型
    people: String,
    buy: Boolean
});       

// 使用规则去创建集合book      并且这个book也是构造函数
const book = mongoose.model('Book',bookSchema)      // 第一个参数指定的名称需要大写  名字为books是数据库中的集合     第二个参数为 规则  是一个构造函数



// 查询文档 
    
// 1. 不给条件的话是全部查询
// book.find().then((data) => {
//     console.log(data)
// })

// 2. 条件查询        返回对应ID的数据     find查找的是一个数组      $in: 是包含     $gt: 是大于     $lt: 是小于
// book.find({_id: '5e7b4bfe09b7d96bd06853e0'}).then((data) => {
//     console.log(data)
// })
// findOne() 返回仅一条数据           默认是第一条 也可以给条件
// book.findOne({name: '小米'}).then((data) => {
//     console.log(data)
// })
book.find({buy: false}).then((data) => {
    console.log(data)
})



// book.deleteOne().then((data) => {
//     console.log(data)
// })
