// 引入express
const express = require('express');
// 创建router
const router = express.Router();
// 引入controller模块
const controller = require('./controller')
// 首页
router.get('/index',(req,res)=>{
    controller.getIndex(req,res)
})
// 修改英雄页面
router.get('/edit',(req,res)=>{
    controller.edit(req,res)
})
// 处理修改英雄页面数据
router.post('/revampHero',(req,res)=>{
    controller.revampHero(req,res)
})
// 添加英雄页面
router.get('/add.html',(req,res)=>{
    controller.getAdd(req,res)
})
// 处理添加英雄请求
router.post('/addHero',(req,res)=>{
    controller.addHero(req,res)
})
// 让router暴露出来
module.exports= router;
