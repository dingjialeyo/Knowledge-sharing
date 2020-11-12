// 先等页面加载完后执行
// 引入动画函数js
window.addEventListener('load', function () {
    var focus = this.document.querySelector('.focus');
    var arrow_l = this.document.querySelector('.arrow_l');
    var arrow_r = this.document.querySelector('.arrow_r');
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = "block";
        arrow_r.style.display = "block"
        clearInterval(timer);
        timer = null; // 清理定时器变量
    });
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = "none";
        arrow_r.style.display = "none";
        timer = setInterval(function () {
            // 手动调用点击事件
            arrow_r.click();
        }, 2000)
    });
    // 小圆圈及轮播
    // 下面的小圆圈动态生成有几张图片就有几个小圆圈
    //先获取ul 中的 li的个数对应了小圆圈
    var ul = focus.querySelector('ul');
    var ol = this.document.querySelector('.circle');
    var focusWidth = focus.offsetWidth;
    // console.log(ul.children.length) // 4
    for (let i = 0; i < ul.children.length; i++) {
        // 循环创建小圆圈
        var li = this.document.createElement('li');
        // 生成小圆圈并且给每一个自定义索引值
        li.setAttribute('data-index', i);
        ol.appendChild(li);
        // 排他   生成同时直接绑定事件
        li.addEventListener('click', function () {
            // 干掉其他 for
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ""
            }
            //留下自己
            this.className = "currents";
            // 获取当前点击小圆圈的索引值
            var index = this.getAttribute('data-index');
            // 这个索引和下面的num 要配对
            num = index;
            // 这个索引和下面的circle 也要配对
            circle = index;
            animate(ul, {
                "left": -index * focusWidth
            });
        })
    }
    ol.children[0].className = "currents";
    // 焦点按钮及轮播
    // 克隆最后第一张图片放到最后   为什么不会生成对应的小圆圈 因为在生成小圆圈之后执行的代码
    var li_frist = ul.children[0].cloneNode(true);
    // 追加到 ul 最后
    ul.appendChild(li_frist);
    //先设置一个计步器 计算点击次数 和小圆圈索引值同理
    var num = 0;
    // circle是绑定了小圆圈的变动
    var circle = 0;
    // 节流阀
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false; // 关闭节流阀
            // 无缝轮播 
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, {
                "left": -focusWidth * num
            }, function () {  
                flag = true; // 节流阀开启 当整个动画执行完后开启
            });
            circle++;
            // 如果circle走到小圆圈的长度 说明到了最后一张 然后重新开始
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }
    });

    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false; // 关闭
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, {
                "left": -focusWidth * num
            }, function () {
                flag = true; // 开启
            });
            circle--;
            // 如果circle < 0 说明为第一张图片往左侧 , 则小圆圈变为4
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circleChange();
        }
    })

    function circleChange() {
        // 先清除其他小圆圈的类
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = "";
        }
        // 留下当前小圆圈的类
        ol.children[circle].className = "currents";
    }
    // 自动播放模块
    var timer = this.setInterval(function () {
        // 手动调用点击事件
        arrow_r.click();
    }, 2000)
})