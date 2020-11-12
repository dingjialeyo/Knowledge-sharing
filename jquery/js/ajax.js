var btn = $('#button');

var card = $('#card');

btn.on('click',function (){

// if(card.is(':visible'))
// card.hide();
// card.toggle();   //toggle可以代替上面两行

// card.load('ajaxyibu.html');  //要在本地开服务器才能实现ajax
// card.toggle();//简单的显示和隐藏

//优化
    // if(card.is(':visible')){
    //     card.slideUp();   //动画隐藏
    // }
    // else{
    //     card.load('ajaxyibu.html');  //要在本地开服务器才能实现ajax
    //     card.slideDown() //动画显示
    // }


//最后优化
    var load = false;
    if(card.is(':visible')){
        card.slideUp();   //动画隐藏
    }
    else{
        if(!load){
            card.load('ajaxyibu.html');  //要在本地开服务器才能实现ajax
        load = true;
        }
        card.slideDown() //动画显示
    }
})

