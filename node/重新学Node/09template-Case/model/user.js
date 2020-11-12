// 数据库创建
const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 3,
        max: 80
    },
    sex: String,
    password: Number,
    email: String,
    hobbies: [String], // 为数组类型 并且数组中的元素都为String
    Date: {
        type: Date,
        default: Date.now
    }
})
const Student = mongoose.model('Student', caseSchema);

// 要开放出去被外部接收
module.exports = Student;