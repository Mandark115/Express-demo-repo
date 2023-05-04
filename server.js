//server setup and declarations
const express = require("express");
const app = express();

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');



var userName = "Mandark";
var password = "kradnam115";

//todo list functionalities
let toDoList = [];
var index = 0;

app.get("/to-do", function(req, res){
    res.render("to-do", {
        userName: userName,
        toDoList:  toDoList,
    });
})

app.post("/to-do", function(req, res){
    let item = req.body.listItem;
    toDoList.push(item);
    res.redirect("/to-do");
})







//login functioning
app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    let uname = req.body.name;
    let pswd = req.body.pwd;
    if(uname === userName && pswd === password) {
        res.redirect("/to-do");
    }
    else{
        res.redirect("/");
    }
    
})






//server initiation
app.listen(3000, function(){

    console.log("server started at port 3000");
})