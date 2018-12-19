####express
## node的框架 
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

