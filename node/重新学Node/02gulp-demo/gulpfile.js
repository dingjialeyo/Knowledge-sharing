// 引入gulp方法   拷贝操作
const gulp = require('gulp');           
const htmlmin = require('gulp-htmlmin');    // 引入gulp方法中的压缩模块
const fileinclude = require('gulp-file-include');        // 引入gulp方法中的公共代码提取模块
const less = require('gulp-less');     // less转换css
const cssmin = require('gulp-csso');    // css代码压缩
const babel = require('gulp-babel');     // js语法转换
const jsmin = require('gulp-uglify');     // js代码压缩
// 使用gulp.task() 建立任务    两个参数  任务的名称   任务的回调函数
gulp.task('first', () => {
    console.log('第一个gulp任务');
    // 1. 获取你要处理的文件  使用gulp.src()方法
    gulp.src('./src/css/index.css') // 这是要处理的代码
    // 2. 将处理的代码输出到dist目录下           pipe 处理
        .pipe(gulp.dest('dist/css'));
});
// 如何执行这种代码   npm 下载 gulp-cli   然后在当前目录下执行:   gulp 任务的名称



// html任务 
    // 1. html文件中的代码进行压缩操作
    // 2. 抽取html文件中的公共代码

    gulp.task('htmlmin',() => {
        console.log('执行了htmlmin操作');
        gulp.src('./src/*.html')    // *.html  所有的html文件
        // .pipe(fileinclude())       // 先执行提取公共代码部分    这个先了解即可
        .pipe(htmlmin({ collapseWhitespace: true}))               // 压缩html文件中的代码         collapseWhitespace: true  是否压缩空格  
        .pipe(gulp.dest('dist')); // 输出到dist目录
    })

// css任务
    // 1. less语言转换css
    // 2. css代码压缩

    gulp.task('cssmin', () => {
        console.log('cssmin执行成功！');
        gulp.src(['./src/css/*.less','./src/css/*.css'])        // gulp.src   里面可以写数组 就可以传多个路径
            .pipe(less())      // less语言转换为css 
            .pipe(cssmin())       // css代码压缩
            .pipe(gulp.dest('dist/css')) 
            // 实现步骤   建立cssmin任务---> 读取路径下的所有less和css---> 现将less转换为css----> 将css代码压缩 --->输出到dist/css中
    });

// javascript任务
    // 1. es6转换es5     好处: 我们不必等到浏览器支持ES6的代码才去使用ES6语法， 现在就可以使用ES6语法 只是在浏览器运行之前将ES6语法转换为ES5
    // 2. js代码压缩

    gulp.task('jsmin',() => {
        console.log('jsmin执行成功！');
        gulp.src('./src/js/1.js')
        .pipe(babel({
            // 他可以判断当前代码的运行环境 将代码转换为当前环境所支持的代码;
            presets: ['@babel/env']      // 从src中的ES6语法的js 已经成功 转换为了 Es5语法js
        }))
        .pipe(jsmin())
        .pipe(gulp.dest('dist/js'));
    })

// 复制文件夹任务
    gulp.task('copy', () => {
        console.log('copy成功！');
        gulp.src('./src/img/*')
        .pipe(gulp.dest('dist/images')); // 将img文件的所有图片输出到dist/images里
        
        gulp.src('./src/copy/*')
        .pipe(gulp.dest('dist/lib'));
    })

// 构建任务    依次执行上面的命令   不需要一步一步来执行
    gulp.task('default', gulp.parallel('htmlmin', 'cssmin','jsmin','copy'), () => {
        console.log('已全部执行完毕')
    });


// 总结:   gulpfile.js 和 src 和 dist 三个是要手动创建的       src是你原本的项目内容经过一系列操作 将scr里面的文件 输出到 dist下