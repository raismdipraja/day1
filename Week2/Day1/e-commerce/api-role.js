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
app.get("/api/roles", (req,res)=>{
    pool.query(
        "select role_id, role_name from roles",
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
app.post("/api/roles", (req,res)=>{
    const {role_name} = req.body; 
    pool.query(
        "insert into roles (role_name) values ($1)",
        [role_name],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201);
        }
    )
});


// update table use method put
app.put("/api/roles/:id", (req,res)=>{
    const {id} = req.params;
    const {role_name} = req.body; 
    pool.query(
        "update roles set role_name=$1 where role_id=$2",
        [role_name,id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }
    )
}); 

// query by filter
app.get("/api/roles/:id", (req,res)=>{
    const {id} = req.params;
    pool.query(
        "select role_id, role_name from roles where role_id=$1",
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
app.delete("/api/roles/:id", (req,res)=>{
    const {id} = req.params;
    pool.query(
        "delete from roles where role_id=$1",
        [id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }
    )
}); 