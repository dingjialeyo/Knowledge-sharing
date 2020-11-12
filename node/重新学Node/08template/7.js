// 引入模板引擎
const template = require('art-template');
const path = require('path');
const dateformat = require('dateformat');

// template方法是用来拼接字符串的      
// 1. 模板路径要写绝对路径   __dirname  在这儿指向的是08template目录
// 2. 要在模板中显示数据 对象类型
// 3. 并且返回值为字符串

// 设置模板的根目录
template.defaults.root = path.join(__dirname,'views')
// 配置模板的默认后缀名      作用是可以省略后缀    需要其他的后缀那写上即可
template.defaults.extname = '.art'


// 导入模板变量
template.defaults.imports.dateformat = dateformat;
// 这里就可以直接找文件名
const html = template('6', {
    time: new Date()
})
console.log(html) // 返回的是HTML  