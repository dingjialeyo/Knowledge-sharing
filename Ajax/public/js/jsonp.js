// jsonp 函数封装
function jsonp (jsonpObj) {
    // 创建script标签
    var script = document.createElement('script');
    // 将函数变成全局变量   且函数名必须为动态不相同的 不然会有覆盖
    // jsonp01234516544...       replace('.','') 将点替换为无 就是将点去掉
    var fnName = 'jsonp' + Math.random().toString().replace('.','') 
    // 点后面不能跟变量 所以用[]
    window[fnName] = jsonpObj.success;
    // 设置src属性   通过请求参数将函数名传递到服务器端
    // 将请求参数拼接为字符串
    var params = '';
    for (var k in jsonpObj.data){
        params += '&' + k + '=' + jsonpObj.data[k];
    };
    console.log(params)
    script.src = jsonpObj.url + '?callback=' + fnName + params;
    // 将script追加到页面中
    document.body.appendChild(script);
    // 当script加载完后删掉该标签
    script.onload = function () {
        document.body.removeChild(script)
    }
}