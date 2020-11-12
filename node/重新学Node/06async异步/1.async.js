console.log('a');
setTimeout(function() {
    console.log('c')
},1000)          //   说明定时器是异步API
console.log('b')