// 导入路径模块
const path = require('path');
// 导入 配置生成预览页面 模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    // 指定的页面
    template : path.join(__dirname,'./src/index.html'),
    // 生成的预览页面
    filename : 'index.html'
});
// webpack 默认会找 src路径 -> index.js 为入口文件
module.exports = {
    mode: 'development',  // mode 用来指定构建模式   development 开发模式 代码不会被压缩   production 发行模式，代码会被压缩
    plugins: [htmlPlugin],
    // 所有第三方模块的匹配规则
    // module: {
    //     rules: [
    //         { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
    //     ]
    // }
}