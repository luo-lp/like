// 创建controller层
const controller = { getIndex, getAdd }
// 引入model层
const model = require('./model')
// 首页
function getIndex(req, res) {
    // 获取所有英雄数据
    model.getHeros(result => {
        let arr = result
        // 渲染页面
        res.render('index', { arr })
    })
}
function getAdd(req, res) {
    res.render('add')
}
// 把controller暴露出去
module.exports = controller;