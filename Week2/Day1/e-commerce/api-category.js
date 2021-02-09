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
app.get("/api/category", (req,res)=>{
    pool.query(
        "select cate_id, cate_name from category",
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
app.post("/api/category", (req,res)=>{
    const {cate_name} = req.body; 
    pool.query(
        "insert into category (cate_name) values ($1)",
        [cate_name],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201);
        }
    )
});


// update table use method put
app.put("/api/category/:id", (req,res)=>{
    const {id} = req.params;
    const {cate_name} = req.body; 
    pool.query(
        "update category set cate_name=$1 where cate_id=$2",
        [cate_name,id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }
    )
}); 

// query by filter
app.get("/api/category/:id", (req,res)=>{
    const {id} = req.params;
    pool.query(
        "select cate_id, cate_name from category where cate_id=$1",
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
app.delete("/api/category/:id", (req,res)=>{
    const {id} = req.params;
    pool.query(
        "delete from category where cate_id=$1",
        [id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }
    )
}); 