// load http = core module
const http = require ('http');

// set port default in 1337
const port = process.env.PORT || 1337;


// createServer method has 2 paaram => request(req), respons(res)
const server = http.createServer(function(req,res){
    res.setHeader("Contect-Type","application/json")
    res.end(JSON.stringify);
});

// open port server di 1337
server.listen(port);
console.log(`Server Listen on Port ${port}`);