// 创建controller层
const controller = { getIndex, getAdd, addHero, edit, revampHero }
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
// 添加英雄页面
function getAdd(req, res) {
    // 渲染页面
    res.render('add')
}
// 处理添加英雄请求
function addHero(req, res) {
    // 获取请求的数据
    let data = req.body;
    model.addHero(data, (result) => {
        // 创建一个对象返回作为相应
        let response = {
            code: 501,
            msg: '失败'
        }
        // 判断是否成功
        if (result.affectedRows === 1) {
            response.code = 200;
            response.msg = '成功'
        }
        res.send(response)
    })
}
// 修改英雄页面
function edit(req, res) {
    let id = req.query.id;
    // 根据id获取数据
    model.getHeroById(id,(arr)=>{
        arr = arr[0]
        // 渲染页面
        res.render('edit',{arr})
    })
}
// 修改英雄
function revampHero(req,res){
    let id = req.body.id;
    // console.log(req.body);
    // console.log(id);
    model.getDataSetHero(req.body,(result)=>{
        let response = {
            code: 501,
            msg: '失败'
        }
        if(result.affectedRows===1){
            response.code=200,
            msg='成功'
        }
    })
}
// 把controller暴露出去
module.exports = controller;