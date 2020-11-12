var board = $('#board');
function toggle() {

    if(board.hasClass('active'))  //在board类中找一个active类
    {
        board.removeClass('active');
    }
    else{
        board.addClass('active');
    }
}
setInterval(toggle,1000);    //小例子闪灯