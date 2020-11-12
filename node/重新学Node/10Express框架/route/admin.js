// 创建路由 返回路由对象
const express = require('express');
const admin = express.Router();
// 创建二级路由      /home/index
admin.get('/index', (req, res) => {
    res.send('欢迎来到admin下的index')
})
// 响应出去
module.exports = admin;