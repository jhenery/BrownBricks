const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("Hello Internet")
})

app.get("/:param", (req,res)=>{
    res.send("You requested " + req.params["param"])
})

app.use(function(req, res){
    res.send("Page Not Found")
})

app.listen(7070, function(err){
    if(err)return console.log("Could't bromg i[ the server.");
    console.log("Server is running");
})

console.log("Hello node");