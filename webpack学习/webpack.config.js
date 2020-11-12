// 导入路径模块
const path = require('path');
// 导入 配置生成预览页面 模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    // 指定的页面
    template : './src/index.html',
    // 生成的预览页面
    filename : 'index.html'
});

const VueLoaderPlugin = require('vue-loader/lib/plugin')




module.exports = {
    // 编译模式    
    mode : 'development',   // 开发阶段 development    上线阶段 production
    // 默认的入口为src文件下的index.js默认的输出为dist下的main.js
    // 手动配置打包的入口
    entry : path.join(__dirname, './src/index.js'),
    // 手动配置输出文件
    output : {
        path : path.join(__dirname, './dist'),   //输出文件存放的路径
        filename : 'hello.js'
    },
    // 挂载
    plugins : [htmlPlugin, new VueLoaderPlugin()],
    module : {
        // 配置一系列规则
        rules : [
            // 支持css打包  支持自动添加css私有前缀
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
            // 支持less打包
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            // 支持scss打包
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            // 支持css中的图片和字体文件打包   limit图片最大字节为多少
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use: 'url-loader?limit=48688'
            },
            // 支持处理js文件的高级语法     exclude排除
            {
                test : /\.js$/, 
                use : 'babel-loader',
                exclude : /node_modules/
            },
            // 支持vue组件的加载器的配置
            {
                test : /\.vue$/,
                loader : 'vue-loader'
            }
        ]
    },

}