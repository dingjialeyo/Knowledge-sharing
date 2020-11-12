// blog的展示页面路由
// 引入express模块
const express = require('express');
// 创建博客页面展示路由
const home = express.Router();

home.get('/', (req, res) => {
    res.send('展示页面')
})


module.exports = home;