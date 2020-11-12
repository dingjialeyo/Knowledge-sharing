// 路由模块

const express = require('express');
const router = express.Router();
const index = require('./index.js')


// 查询图书列表
router.get('/books',index.getAllBooks);
// 添加图书
router.post('/books',index.addBook);
// 跳转到图书编辑
router.get('/books/:id',index.toEditBook);
// 编辑图书提交表单
router.put('/books/:id',index.editBook);
// 删除图书信息
router.delete('/books/:id',index.deleteBook);
// 验证图书是否存在
router.get('/books/book/:name',index.checkName);

module.exports = router;