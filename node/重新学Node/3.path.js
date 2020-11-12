// 一种拼接路径的方法
const path = require('path');

const pathabc = path.join('a','b','c');    //  __dirname 相对这个文件的绝对路径

console.log(pathabc)   // a\b\c
