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
app.get("/api/product_images", (req,res)=>{
    pool.query(
        "select prim_id, prim_file_name, prim_path, prim_prod_id from product_images",
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
app.post("/api/product_image", (req,res)=>{
    const {prim_id, prim_file_name, prim_path,prim_prod_id} = req.body; 
    pool.query(
        "insert into product_images (prim_id, prim_file_name, prim_path,prim_prod_id) values ($1, $2, $3, $4)",
        [prim_id, prim_file_name, prim_path,prim_prod_id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201);
        }
    )
});


// update table use method put
app.put("/api/product_image/:id", (req,res)=>{
    const {id} = req.params;
    const {prim_file_name, prim_path,prim_prod_id} = req.body; 
    pool.query(
        "update product_images set prim_file_name=$1, prim_path=$2,prim_prod_id=$3 where prim_id=$4",
        [prim_file_name,prim_path,prim_prod_id,id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }
    )
}); 

// query by filter
app.get("/api/product_image/:id", (req,res)=>{
    const {id} = req.params;
    pool.query(
        "select prim_id, prim_file_name, prim_path, prim_prod_id from product_images where prim_id=$1",
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
app.delete("/api/product_image/:id", (req,res)=>{
    const {id} = req.params;
    pool.query(
        "delete from product_images prim where prim_id=$1",
        [id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }
    )
});