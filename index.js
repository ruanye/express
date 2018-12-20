let express  = require('express')
//引入express express 是个函数 
let app  = express();
//express执行固定叫做app
// express把各个请求方法进行封装 参数就是 路径 callback  
// ** 路径 是不带任何参数的绝对路径 
//代码执行顺序  是从上到下执行 如果匹配到路径了就不在继续往下走  
app.use(function(req,res,next){
    res.setHeader('content-type','text/plain;charset=utf8');
     next()
})

//放在需要处理的路径前面处理通用逻辑  可以用来进行权限校验等 ，必须写next 才会继续往下走   拦截req,res  不带路径 表示匹配所有 带路径表示匹配这个路径上的进行处理 
//中间的作用 访问路径之前可以提前做一些逻辑处理 但是中间件必须放在你要处理的路径之前  
app.use('/sign',function(req,res,next){
  console.log('郭东帅很帅')
  next()
})
//:id路径参数 必须有 但是不固定（动态的）  通过req.params 取到路径参数 
// list/2
app.get('/list/:id/:name',function(req,res){
    console.log(req.params.id);
    res.send('请求一个')
})
app.get('/list',function(req,res){
   res.send('请求多个')
})
app.get('/sign',function(req,res){
//   console.log(req.method,'method')
//   //请求方式 全是大写 
//   console.log(req.path,'path')
//   //express 封装的 不带任何参数的路径 
//    console.log(req.query,'query')
//    //？号后面的查询字符串 
//    console.log(req.headers,'header')
   //请求头
  res.end('登录')
})

app.get('/login',function(req,res){
  res.end('第二个')
})
app.get('/app',function(req,res){
    res.send('not found')
    res.status(404)
})
app.get('/car',function(req,res){
  res.send('这是第100个请求')
})
app.all('*',function(req,res){
    res.sendStatus(404)
 })
app.listen(8080,function(){
   console.log('sucess') 
})
