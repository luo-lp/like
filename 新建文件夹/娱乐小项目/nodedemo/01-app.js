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