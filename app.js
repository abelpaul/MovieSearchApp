var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");


app.get("/results",function(req,res){
    request("http://www.omdbapi.com/?s=spiderman&apikey=thewdb",function(error,response,body){
        if(!error && response.statusCode == 200){
            let data = JSON.parse(body)
            res.render("results", { data: data});
        }
    })
})



app.listen(3000,function(){
    console.log("movie app is running");
})