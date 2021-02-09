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
app.get("/api/users", (req,res)=>{
    pool.query(
        "select users_id, users_name, users_email, user_password from users",
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
app.post("/api/users", (req,res)=>{
    const {users_name, users_email,user_password} = req.body; 
    pool.query(
        "insert into users (users_name, users_email, user_password) values ($1, $2, $3)",
        [users_name, users_email, user_password],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201);
        }
    )
});


// update table use method put
app.put("/api/users/:id", (req,res)=>{
    const {id} = req.params;
    const {users_name, users_email,user_password} = req.body; 
    pool.query(
        "update users set users_name=$1, users_email=$2,user_password=$3 where users_id=$4",
        [users_name,users_email,user_password,id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }
    )
}); 

// query by filter
app.get("/api/users/:id", (req,res)=>{
    const {id} = req.params;
    pool.query(
        "select users_id, users_name from users where users_id=$1",
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
app.delete("/api/users/:id", (req,res)=>{
    const {id} = req.params;
    pool.query(
        "delete from users where users_id=$1",
        [id],
        (error,result)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }
    )
});