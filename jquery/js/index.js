// document.getElementById('b').style.background = "red"

// $('#a').css('background','blue')  //我的唯一类a用的方法
//$('.b').css('background','yellow')    //我的多种类b用的方法

// //一样

// $('#b').css('background','red').css('color','blue')


// $('#b p').css('border','2px solid blue');   //类下面的p标签

// $('input[type="number"]').css('background','yellow')  //input类型为number时

// $('div:first').css('border','2px solid pink')  //伪类：第一个div修改

//上面是选择器
//===============================================================================
//===============================================================================

// $('div .haizi')   ===   $('div').find('.haizi') 

// $('div').find('.haizi').css('border','2px solid pink')   //find找类--从最外层div找其中某类

// $('#nan').parent().css('border','3px solid pink')       //parent找类--找上一级类

// $('#nan').parents('.yeye').css('border','3px solid pink')   //parents找类--可以指定上级类

// $('.haizi').filter('.ok').css('border','3px solid red')      //filter过滤--在有许多同级类中加一个ok类过滤掉其他类选定此类
  
//这里是过滤器
//===================================================================================
//===================================================================================

// $('.a').css({
//     color: "red",
//     background: "black"
//驼峰命名法backgroundColor === background-color ==='background-color'这个在js文件中只能用驼峰命名法或者转义 ****
// })

// $('.a').css({

//     backgroundColor : "yellow"

// }).addClass('aa').removeClass('bb');      addClass--追加类样式    removeClass--去除类样式

// var a = $('.a')
// console.log(a.hasClass('aa'))      //查找a类中有没有aa这个类在控制台里返回布尔值
// a.removeClass('aa')             //查找a类中有没有aa这个类并去除
// var a = $('.a')
// a.hide();  //隐藏
// a.show();  //显示
// a.fadeOut(2000);   //2秒之后消失    fadeOut--淡出
// a.fadeIn();       //2秒消失后再显示   fadeIn--淡入
// a.slideUp(3000);   //3秒后从下往上消失    slideUp往上淡出
// a.slideDown(3000);   //3秒后从上往下消失    slideDown往下淡入

// var board = $('#board');
// function toggle() {

//     if(board.hasClass('active'))  //在board类中找一个active类
//     {
//         board.removeClass('active');
//     }
//     else{
//         board.addClass('active');
//     }
// }
// setInterval(toggle,1000);    //小例子闪灯

//样式操作
//=================================================================================
//=================================================================================

// var text = $('.a').text();      text和html一样的效果  但是html连标签也会返回
// console.log(text);            获取a类里面所有文本元素

// $('.a').text('lala')           替换a类元素并改成lala

//Prepend  --再上一级追加       Append--再最后一级追加

//remove   --删掉某类

//操作DOM
//==================================================================

// $('#a').attr('href','1433223')    //修改链接属性  与   prop类似 隐性


//获取value值
// var test = $('#text').val();
// console.log(test)

//这个点击交给我处理  自由处理
// $('#button').click(function (){

//     $('#form').submit(); 

// })





