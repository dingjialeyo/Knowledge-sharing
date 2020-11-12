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

// 创建集合规则
const userSchema = new mongoose.Schema({                // 规则Schema方法是一个构造函数  需要new来调用
    name: String,             // 这些都是字段    给定这些字段的类型
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
});  

// 从外部读取数据到数据库中
const user = mongoose.model('User',userSchema);



// mongoimport -d test -c user -file ./user.json  通过这个指令获取JSON文件   