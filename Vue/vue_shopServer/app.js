const express = require('express')
const app = express()


// 设置静态资源入口
app.use(express.static('./dist'))

app.listen(800, () => {
    console.log('ok')
})