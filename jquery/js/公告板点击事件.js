var card  = $('#card');
var jihuo = $('#jihuo');

//当点击时触发函数效果    这个是on方法     //dbclick双击
jihuo.on('click',function(){

    // card.is(':visible')  当card可见时
    if(card.is(':visible')){

        // card.hide();   这个是直接显示和隐藏

        card.slideUp(1000);   //这个是添加动画的效果
    }
    else{
        // card.show();      这个是直接显示和隐藏

        card.slideDown(1000);    //这个是添加动画的效果
    }
})

//当鼠标进入card这个类时执行函数     
card.on('mouseover',function (){

    card.addClass('active')


})
//当鼠标离开card这个类时执行函数     
card.on('mouseout',function (){

    card.removeClass('active')

})
