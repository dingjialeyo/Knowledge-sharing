function ajax (ajaxObj) {
    // 存储的是默认值    
    var defaults = {
        type : 'get',
        url : '',
        data : {},
        header : {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        success : function () {},
        error : function () {},
    }   

    // 使用对象方法中的assign方法进行对象覆盖
    Object.assign(defaults,ajaxObj)     // 对象传了值就覆盖默认值

    // 创建ajax对象
    var xhr = new XMLHttpRequest();
    // 拼接请求参数的变量
    var params = '';
    // 循环用户传递进来的对象格式
    for (var attr in defaults.data) {
        // 将参数转换为字符串格式
        params += attr+'='+defaults.data[attr]+'&';
    }
    // 会多出一个&符 所以要进行截取
    params = params.substr(0,params.length-1)
    // console.log(params)
    // 判断请求方式
    if (defaults.type == 'get') {
        defaults.url = defaults.url + '?' + params;
    }
    // 配置ajax对象
    xhr.open(defaults.type, defaults.url);
    if (defaults.type == 'post') {
        var contentType = defaults.header['Content-Type'];
        // 设置post请求参数格式      但是用户想输入json格式的话就不行 所以格式也需要换为变量
        // 写入响应头数据
        xhr.setRequestHeader('Content-Type', contentType);
        // post的发送请求
        // 进行格式判断
        if (contentType == 'application/json') {
            xhr.send(JSON.stringify(defaults.data));  // 请求时候都需要转换为字符串格式
        } else {
            xhr.send(params);
        }
    }
    else {
        // 发送请求
        xhr.send();
    };
    // 监听onload事件
    xhr.onload = function() {
        // 获取响应头数据编码格式
        // console.log(xhr.getResponseHeader('Content-Type')) // xxxxxxxxx; charset=utf-8
        var contentType = xhr.getResponseHeader('Content-Type');
        // 获取服务器端返回的数据
        var responseText = xhr.responseText;
        // 判断响应编码格式是否包含application/json
        if (contentType.includes('application/json')) {
            // *请求时如果是json对象要转换为json字符串   响应时要将json字符串转换为json对象*
            responseText = JSON.parse(responseText);   // 将json字符串转换为json对象
        }
        // 对http状态码status进行判断
        if (xhr.status == 200) {
            defaults.success(responseText, xhr) // 实参
        }
        else {
            defaults.error(responseText, xhr);
        }
    }
}