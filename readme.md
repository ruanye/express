## express
>node的框架 
1. npm init -y 一键初始化 
*文件夹的命名不用和框架和包（jq,loadash ）重名 不能用中中文 不要用数字 
2. npm install express -s  下载express
3. listen的原理，注意第一个...arg是把参数合成数组，第二个是把参数铺平
app.listen = function(...arg){
     require('http').createServer(app).listen(...arg)
}
4. express 主要是对req 和res的方法进行了封装
5. res.sendStatus(404)，等于下面2个相加：
res.send('not found') res.status(404) 
6. app.all  所有的请求 不分get\post等
7. 中间件 官方文档-->资源 --->中间件 
* cors中间件 (跨域)
```
  npm install cors
```
 *body-parser 中间件 解析带请求体的数据(post,put)
 ``` 
  npm install body-parser
 ``` 
 >解析formd-ata
 bodyParser.urlencoded({extended:false})
 >解析json 
 bodyParser.json()
 >发送请求的数据格式
 www-form-urlencoded,form-data,application/json,text/xml

 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
 //原生js设置请求头 
 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
 //允许携带 cookie 发送请求
 xhr.withCredentials= true;
 
AXIOS 的实例 设置请求头 
const instance = axios.create({
   withCredentials:true,
   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

 
