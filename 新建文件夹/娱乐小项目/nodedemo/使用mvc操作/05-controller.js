const model = require('./06-model');

function getIndex(req,res){
  model.getAllHero((arr)=>{
    res.render('index',{arr});
  })
  
}


const controller = {
  getIndex,getEdit,getHeroById,editHeroById,getEdit2
}

module.exports = controller;