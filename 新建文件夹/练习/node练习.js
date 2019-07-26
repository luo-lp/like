/**
 * 创建http模块
 * 创建fs模块
 * 开启服务器
 * 监听8080端口并随意输出个东西
 * 当收到请求后
 * 如果url的前缀是/assets或者/views的话
 * 使用fs.readFile
 * 如果url的后缀是.css
 * 设置请求头 text/css
 */
const http = require('http');
const fs = require('fs');
const server = http.createServer();
server.listen(8080, () => {
    console.log('服务器开启成功');
});
server.on('request', (req, res) => {
    const url = req.url;
    if (url.startsWith('/views') || url.startsWith('/assets')) {
        if (url.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
        fs.readFile('.' + req.url, (err, data) => {
            if (err) throw err;
            res.end(data);
        })
    }
});