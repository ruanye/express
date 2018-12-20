//登录注册模块 
// express 路由  
let express = require('express');
let router = express.Router()  
//创建一个路由集合  Router是一个函数 
//http://localhost:3000/user/login
//访问路由的路径 user/login  user/sign 
router.get('/login',function(req,res){
    res.send('登录')
  })
router.get('/sign',function(req,res){
    res.send('注册')
});
// 导出路由
module.exports = router;