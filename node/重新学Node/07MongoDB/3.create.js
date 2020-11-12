// 创建文档的另一种方法

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

// 向集合book中插入文档
// book.create({name: '夏目友人帐', people: 'djl', buy: false}, (err,data) => { // 第一个参数是数据    第二个参数是回调函数
//     // 错误对象
//     console.log(err)

//     // 插入的文档信息
//     console.log(data)
// })

// 另一种写法       说明book是Promise对象
book.create({name: '紫霞', people: '朱茵', buy: false},{name: '小米', people: '雷军', buy: true})
    .then((resolve) => {
        // console.log(resolve)
    })
    .catch((reject) => {
        // console.log(reject)
    })


// 查询文档      不给条件的话是全部查询
book.find().then((data) => {
    console.log(data)
})