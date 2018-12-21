let express = require('express');
let app = express();
let fs = require('fs');
let bodyParser = require('body-parser');
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

let sliders = require('./slider')
function read(cb) {
    fs.readFile('./good.json', 'utf8', (err, data) => {
      if (err) { //文件错误或者没长度 
        console.log(err)
        cb([])
      } else {
        cb(JSON.parse(data))
      }
    })
  }
  
  function write(data, cb) {
    fs.writeFile('./good.json', JSON.stringify(data), 'utf8', cb)
  }
  let offset = 5;
  //每一页的数据是5条
  app.get('/slider',function(req,res){
    res.json(sliders)  
  })
  app.get('./new',function(req,res){
    read(data=>{
        let newlist = data.reverse().slice(0, 6);
        res.json(newlist)
    })
  })
  app.delete('/list/:id',function(req,res){
    let id = req.params.id;
    read(data=>{
        data = data.filter(item => item.id !== id);
        write(data,()=>{
           res.json({}) 
        }) 
    })
  })
  app.put('/list',function(req,res){
      let good = req.body;
      let id = good.id;
      read(data=>{
        let goods = data.map(item=>{
           if(item.id===id) {
               return good
           }
           return item
        })  
        write(goods,()=>{
         res.json(good)
        })
      })
  })
  
app.listen(3000)