const http = require ('http');
const port = process.env.PORT || 1337;
const Product =
    {
        id:1,
        names: "Laptop Dell",
        price: 1500.00,
        variant:{
            type : "Gamer",
            core : "i7 Core"
        }
    }

const server = http.createServer(function(req,res){
    res.end(JSON.stringify(Product));
});

// open port server di 1337
server.listen(port);
console.log(`Server Listen on Port ${port}`);