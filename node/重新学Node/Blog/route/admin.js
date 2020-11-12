// Blog的管理页面路由
// 引入express模块
const express = require('express');
const admin = express.Router();

// 创建login路由
admin.get('/login', (req, res) => {
    // 第一个参数是模板路径
    res.render('admin/login')
});
// 创建user路由
admin.get('/user', (req, res) => {
    // 第一个参数是模板路径
    res.render('admin/user')
});
// 创建article路由
admin.get('/article', (req, res) => {
    // 第一个参数是模板路径
    res.render('admin/article')
});

// 导出这个模块对象
module.exports = admin; 