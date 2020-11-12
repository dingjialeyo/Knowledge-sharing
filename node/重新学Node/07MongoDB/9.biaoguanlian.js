// 表与表之间的关联

const mongoose = require('mongoose');      // 需要通过这个模块来连接Mongodb数据库

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true,useUnifiedTopology: true })            // 连接数据库   test 如果数据库当中没有则创建这个数据库
    .then(() => {
        console.log('数据库连接成功')
    })
    .catch((err) => {
        console.log(err,'连接失败！')
    })

// 建立一个学生表   字段类型声明
const studentSchema = new mongoose.Schema({
    name: String,
    // required: true
});
// 建立一个老师表
const teacherSchema = new mongoose.Schema({
    title: String,
    author: {
        // 关联学生的id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }
});

// 存入创建  需要传值才能显示
const student = mongoose.model('Student',studentSchema);
const teacher = mongoose.model('Teacher',teacherSchema);

// 传值
// student.create({name: 'djl'}).then();
// teacher.create({title: 'first',author: '5e7ca3aae382a91860c4a703'}).then((data) => {
//     console.log(data)
// })

// 使老师的信息中的author显示学生信息     populate()  里面写关联的信息
teacher.find().populate('author').then(data => {
    console.log(data)    // author: { _id: 5e7ca3aae382a91860c4a703, name: 'djl', __v: 0 },    已经可以显示学生表中的内容  关联成功
})
