// 导入其他模块的私有成员     ap 自己命名
import mi from './ES6模块化-默认导出.js';

// 按需导入的私有成员
import { s1, s2 } from './ES6模块化-默认导出';

//直接导入的模块     会直接执行该模块的内容输出。
import './直接导入并执行模块代码'



console.log(mi)  // 将其他模块的私有成员导入到这个mi
console.log(s1)  // djl
console.log(s2)  // 20

// 通过  npx babel-node .\ES6模块化-导入语法   运行