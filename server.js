let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let path  = require('path');
//引入路径模块 
app.listen(3000)
//访问静态文件 
 app.use(express.static('public'));
//解析请求体
// app.use('/static',express.static('public'));
//如果写了一个路径 会在访问路径前面添加这个路径  
// localhsot:3000/static 
// app.use(express.static(path.join(__dirname, 'public')));

//__dirname 表示绝对路径
// path路径方法 path.join 拼接路径
//为了访问更加安全 可以使用绝对路径 
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
//路由
let user = require('./user/user');
let car =require('./car/car')
app.use('/user',user);
app.use('/car',car)

