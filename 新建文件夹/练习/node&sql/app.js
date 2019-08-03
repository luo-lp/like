// 引入express
const express = require('express');
// 使用express
const app = express();
// 引入router模块
const router = require('./router');
// 引入bodyParser
// const bodyParser = require('body-parser')
// 绑定端口
app.listen(3000, () => {
    console.log('服务器创建成功地址是:http://127.0.0.1:3000');
})
// 设置使用ejs模板
app.set('view engine', 'ejs')
// 设置body-parser
// app.use(bodyParser.urlencoded({ extended: false }))
// 使用router层
// app.use(router)
// 下载 npm i body-parser -S
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false }));
