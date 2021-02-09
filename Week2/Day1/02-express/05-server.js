const fs = require('fs');
const port = process.env.PORT || 1337;

const express = require('express');
const app = express();

// router
app.get("/",responseText);
app.get("/json",responseJson);
app.get("/static/*",responseStatic);
app.listen(port);
console.log(`Server Listen on Port ${port}`);

const port = process.env.PORT || 1337;

const Product ={
    id:1,
    names: "Laptop Dell",
    price: 1500.00,
    variant:{
        type : "Gamer",
        core : "i7 Core"
    }
}

function responseStatic(req,res) {
    const filename = `${__dirname}/public${req.url.split('static')[1]}`;
    fs.createReadStream(filename)
        .on("error", ()=> responseNotFound(req,res))
        .pipe(res);
}

function responseText(req,res){
    res.setHeader("Content-Type","text/plain");
    res.end("JS Bootcamp with code.id");
}

function responseJson(req,res){
    res.setHeader("Content-Type","application/JSON");
    res.end(JSON.stringify(Product));
}

function responseNotFound(req,res){
    res.writeHead(404,{"Content-Type": "text/plain"});
    res.end("Page Not Found");
}