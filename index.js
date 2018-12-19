let express  = require('express')
//引入express express 是个函数 
let app  = express();
//express执行固定叫做app
// express把各个请求方法进行封装 参数就是 路径 callback  
// ** 路径 是不带任何参数的绝对路径 
//代码执行顺序  是从上到下执行 如果匹配到路径了就不在继续往下走  

app.get('/sign',function(req,res){
//   console.log(req.method,'method')
//   //请求方式 全是大写 
//   console.log(req.path,'path')
//   //express 封装的 不带任何参数的路径 
//    console.log(req.query,'query')
//    //？号后面的查询字符串 
//    console.log(req.headers,'header')
   //请求头
  res.send('登录')
})
app.post('/sign',function(req,res){
  res.send('post登录')
})
app.get('/app',function(req,res){
    res.send('not found')
    res.status(404)
})
app.all('*',function(req,res){
    res.sendStatus(404)
 })
app.listen(8080,function(){
   console.log('sucess') 
})
