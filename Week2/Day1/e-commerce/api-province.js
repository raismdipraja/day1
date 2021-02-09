const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "ecommerce"

});

const app = express();
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port,()=> console.log(`server listening on port ${port}`));


// qury table regions
app.get("/api/province", (req,res)=>{
    pool.query(
        "select prov_id, prov_name from province",
        [],
        (error, result)=>{
            if(error){
                throw error;
            }
            res.status(200).json(result.rows);
        }
    )
});


// insert
app.post("/api/province", (req,res)=>{
    const {prov_name} = req.body; 
    pool.query(
        "insert into province (prov_name) values ($1)",
        [prov_name],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201);
        }
    )
});


// update table use method put
app.put("/api/province/:id", (req,res)=>{
    const {id} = req.params;
    const {prov_name} = req.body; 
    pool.query(
        "update province set prov_name=$1 where prov_id=$2",
        [prov_name,id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }
    )
}); 

// query by filter
app.get("/api/province/:id", (req,res)=>{
    const {id} = req.params;
    pool.query(
        "select prov_id, prov_name from province where prov_id=$1",
        [id],
        (error, result)=>{
            if(error){
                throw error;
            }
            res.status(200).json(result.rows);
        }
    )
});

// query delete
app.delete("/api/province/:id", (req,res)=>{
    const {id} = req.params;
    pool.query(
        "delete from province where prov_id=$1",
        [id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }
    )
}); 