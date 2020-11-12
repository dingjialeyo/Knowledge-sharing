let a = 10;
let b = 20;
let c = 30;
function show() {
    console.log('show')
}

// 默认导出   将私有成员暴露出去，其他模块可以使用    但是这个只能使用一次
export default {
    a,
    b,
    show
} 
// 按需导入   这种可以使用多次
export let s1 = 'djl';
export let s2 = 20;