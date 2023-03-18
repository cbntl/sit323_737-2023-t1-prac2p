var express = require('express')
var app = express()
var port = process.env.port || 3000;

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extends:false}));

app.listen(port, ()=>{
    console.log("App listening to: http://localhost:"+port)
})

//respond with "hello world" when 
app.get('/', function (req, res) {
    res.send('hello world!')
})

// list to a particular port
//app.listen(3000)