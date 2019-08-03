// 引入MySQL插件
const mysql = require('mysql');
// 创建一个连接对象
let conn = mysql.createConnection({
    // ip
    host: '127.0.0.1',
    // 端口
    port: 3306,
    // 数据库账号
    user: 'root',
    // 数据库密码
    password: 'root',
    // 数据库名称
    database: 'heros'
})
// 连接数据库
conn.connect();
// 创建model层
const model = { getHeros, getSQL, addHero, getHeroById };
function getSQL(sql, callbcak) {
    // 执行sql语句
    conn.query(sql, (err, result, filed) => {
        if (err) console.log(err);
        // sql语句的执行结果
        // console.log(result);
        // console.log(fild);
        callbcak(result)
    })
}
// 获取所有英雄数据
function getHeros(callbcak) {
    // 保存sql语句
    let sql = `SELECT * FROM hero WHERE idDel=0`
    model.getSQL(sql, (result) => {
        callbcak(result);
    })
}
// 添加英雄
function addHero(data, callbcak) {
    let sql = `INSERT INTO hero (name,gender,img)VALUES('${data.name}','${data.gender}','${data.img}')`
    model.getSQL(sql, (result) => {
        callbcak(result);
    })
}
// 根据id找到英雄
function getHeroById(id,callback) {
    let sql = `SELECT * FROM hero WHERE id=${id}`;
    getSQL(sql, (result) => {
        callback(result);
    })
}
module.exports = model;