// 增加验证规则

const mongoose = require('mongoose');      // 需要通过这个模块来连接Mongodb数据库

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true,useUnifiedTopology: true })            // 连接数据库   test 如果数据库当中没有则创建这个数据库
    .then(() => {
        console.log('数据库连接成功')
    })
    .catch((err) => {
        console.log(err,'连接失败！')
    })


const postSchema = new mongoose.Schema({
    title: {
        type: String,       // title 的类型
        required: [true,'请输入有效字段'],       // 如果这个字段你不传的话 会报错   true代表必填  第二个数是错误信息
        minlength: [2, '输入长度必须大于2'],
        maxlength: [5, '输入长度必须小于5'],       // 还可以设置长度
        trim: true              // 去除两边的空格
    },
    age: {
        type: Number,
        required: [true,'请输入有效字段'],
        min: [1, '请输入正确的年龄'],
        max: [100, '请输入正确的年龄']
    },
    Date: {
        type: Date,
        default: Date.now      // 如果没传时间 默认为当前时间 
    },
    // 分类
    fenlei: {
        type: String,
        enum: ['css','js','html']        // 另一个验证  必填  并且内容必须为规定的
    },
    // 自定义验证
    author: {
        type: String,
        // 自定义验证
        validate: {
            validator: v => {        // validate 是一个函数    v是传入的值 也是要验证的值
                // 返回布尔值      true验证成功   false验证失败
                return v && v.length > 3
            },
            // 自定义错误信息
            message: '传入的值不符合验证规则'
        }
    }
});
const post = mongoose.model('Post',postSchema)             // 返回的是Promise一个对象
post.create({title: 'three', age: '9',data: '2020/3/2',fenlei: 'js',author: 'cd'}).then((data) => {           // 不传数据  
    console.log(data)     // ValidationError  验证错误    title: 请输入有效字段
})
    // 获取错误信息
    .catch((err) => {
        const error = err.errors;
        // console.log(error)
        // console.log(err)
        for(var k in error) {
            console.log(error[k]['message'])       // 传入的值不符合验证规则
        }  
    })
