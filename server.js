let express = require('express')
let app = express();
app.listen(3000)
let user = require('./user/user');
app.use('/user',user);
//购物车
app.post('/carlist',function(){
  res.send('购物车列表')
})
app.get('/one',function(){
  res.send('查找一个商品')
})