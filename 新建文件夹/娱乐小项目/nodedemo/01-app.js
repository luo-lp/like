const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser');
app.listen(8000, () => {
  console.log(111);
});
app.use('/assets', express.static('assets'))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.set('view engine', 'ejs')
// 主页
app.get('/index', (req, res) => {
  fs.readFile('./data/heros.json', 'utf-8', (err, data) => {
    if (err) console.log(err);
    let arr = JSON.parse(data)
    res.render('index', {
      arr
    })
  })
})
// 添加英雄页面
app.get('/add.html', (req, res) => {
  fs.readFile('./views/add.html', (err, data) => {
    if (err) console.log(err);
    res.end(data)
  })
})
// 实现添加功能
app.post('/addHero', (req, res) => {
  fs.readFile('./data/heros.json', 'utf-8', (err, data) => {
    if (err) console.log(err);
    let arr = JSON.parse(data)
    req.body.id = 0;
    arr.forEach(e => {
      if (e.id > req.body.id) {
        req.body.id = e.id;
      }
    });
    req.body.id += 1;
    arr.push(req.body);
    fs.writeFile('./data/heros.json', JSON.stringify(arr), 'utf-8', (err) => {
      if (err) console.log(err);
      res.send({
        code: 200,
        msg: '成功'
      })
    })
  })
})