const fs = require('fs');

module.exports = {
  getAllHero
};

function getAllHero(callback){
  fs.readFile('./data/heros.json','utf-8',(err,data)=>{
    if(err) console.log(err);
    let arr = JSON.parse(data);
    callback(arr);
  })
}

