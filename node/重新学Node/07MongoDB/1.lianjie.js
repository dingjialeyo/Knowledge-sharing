const mongoose = require('mongoose');      // 需要通过这个模块来连接Mongodb数据库

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true,useUnifiedTopology: true })            // 连接数据库   test 如果数据库当中没有则创建这个数据库
    .then(() => {
        console.log('成功')
    })
    .catch((err) => {
        console.log(err,'连接失败！')
    })