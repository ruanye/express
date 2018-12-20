let express = require('express')
let app = express();
let bodyParser = require('body-parser')
app.listen(3000)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
let user = require('./user/user');
let car =require('./car/car')
app.use('/user',user);
app.use('/car',car)

