// 创建路由 返回路由对象
const express = require('express');
const home = express.Router()

// 创建二级路由      /home/index
home.get('/index', (req, res) => {
    res.send('欢迎来到home下的index')
})

// 响应导出
module.exports = home;