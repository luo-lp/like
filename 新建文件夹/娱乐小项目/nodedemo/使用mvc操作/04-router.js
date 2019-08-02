const express = require('express');
const router = express.Router();
const controller = require('./05-controller');

router.get('/index',(req,res)=>{
  controller.getIndex(req,res);
})


module.exports = router;