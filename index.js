var express = require('express');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
//var urlencoded = bodyParser.urlencoded({extended:false});

var app = express();

var tasks = [];

app.get("/",(req,res,next)=>{
    res.json("{'message': ' Servidor Dice Hola '}");
});


app.post("/tasks",jsonParser,(req,res,next)=>{
    req.body.id = tasks.length+1;
    tasks.push(req.body);
    res.send("OK");
});


app.get("/tasks",(req,res,next)=>{
    res.json(tasks);
});

app.listen(3000,()=>{
    console.log("Servidor Corriendo en puerto 3000")
});