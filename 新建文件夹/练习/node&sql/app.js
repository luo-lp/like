// 引入express
const express = require('express');
// 使用express
const app = express();
// 引入router模块
const router = require('./router');
// 绑定端口
app.listen(3000, () => {
    console.log('服务器创建成功地址是:http://127.0.0.1:3000');
})

