function my$(id) {
    return document.getElementById(id)
}
//写获取样式属性的兼容
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];   //xxx.left  ==  xxx["left"]
    }
    else{
        return ele.currentStyle[attr];
    }
};
//封装可以添加任意多个属性的变速动画函数再增加回调函数再增加层级和透明度     最终形态
function animate(ele, json,callback) { //目标元素，样式，目标位置
    //清理定时器
    clearInterval(ele.timeId);
    ele.timeId = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            //判断是否有这个zIndex属性
            if(attr == "zIndex"){
                //层级改变只需要改变这个值
                ele.style[attr] = json[attr];
            }
            //判断是否有这个opacity属性
            else if(attr == "opacity"){
            //获取当前元素的透明度
            var current = getStyle(ele, attr)*100;  //将透明度增加100倍好计算     并且getStyle(ele, attr)是数字类型
            //当前的属性对应的值
            var target = json[attr]*100;
            //移动的步数
            var step = (target - current) / 10; //json[attr]就是这个属性的值
            //判断step是否为正数为正向上取整,负数是向下取整。
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step;
            ele.style[attr] = current/100;    //计算完后还原回去
            }
            //普通的带px的属性
            else{
            //获取当前元素位置
            var current = parseInt(getStyle(ele, attr)) //转数字类型
            //当前的属性对应的值
            var target = json[attr];
            //移动的步数
            var step = (target - current) / 10; //json[attr]就是这个属性的值
            //判断step是否为正数为正向上取整,负数是向下取整。
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step;
            ele.style[attr] = current + "px";
            }
            // 判断是否到达目标
            if (current != target) {
                flag = false;
            }
        }
    if (flag) {
        clearInterval(ele.timeId);   //所有属性准备完了才清理定时器
        //然后触发回调函数，前提用户传入了这个函数
        if(callback){
            callback();
        }
    };
}, 20)
};
