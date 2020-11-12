// 修改操作


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

// // 修改单个
// book.updateOne({name: '紫霞'},{name: '紫霞仙子'}).then((data) => {
//     console.log(data)        // 返回的也是说明对象 { n: 1, nModified: 1, ok: 1 }
// });

// 修改多个     满足条件的全部修改
book.updateMany({name: '紫霞'},{name: '夏洛'}).then((data) => {
    console.log(data)   // { n: 2, nModified: 2, ok: 1 }
})