const express = require('express');
const app = express();
var cors = require('cors')
const mysql = require("mysql");

const bcrypt = require('bcrypt');
const { response } = require('express');
const saltRounds = 10

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
    multipleStatements:true
});

app.get('/getit',cors(),(req, res) =>{
    const sqlInsert = "SELECT * FROM customer;"
    db.query(sqlInsert,(err, result)=>{
        console.log(result);
        res.send(result);

    })
})

app.get('/getorder',cors(),(req, res) =>{
    const sqlInsert = "SELECT * FROM customer_order;"
    db.query(sqlInsert,(err, result)=>{
        console.log(result);
        res.send(result);

    })
})

app.get('/getSales',cors(),(req, res) =>{
    const sqlInsert = "SELECT * FROM completed_order;"
    db.query(sqlInsert,(err, result)=>{
        console.log(result);
        res.send(result);

    })
})

app.get('/getSnotify',cors(),(req, res) =>{
    const sqlInsert = "SELECT * FROM supplier_notification;"
    db.query(sqlInsert,(err, result)=>{
        console.log(result);
        res.send(result);

    })
})
app.post('/reg',(req,res)=>{

    const username = req.body.username
    const password = req.body.password
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const address = req.body.address
    const ic = req.body.ic
    const phone = req.body.phone
    const email = req.body.email
    const gender = req.body.gender

    bcrypt.hash(password,saltRounds,(err,hash)=>{
        
        if(err){
            console.log(err);
        }
        
        db.query("INSERT INTO `customer`(`firstname`, `lastname`, `gender`, `ic_no`, `phone_no`, `email`, `username`, `password`, `address`) VALUES (?,?,?,?,?,?,?,?,?);INSERT INTO `users` (`username`, `password`, `userrole`) VALUES (?,?,'customer');",[firstname,lastname,gender,ic,phone,email, username, hash,address,username,hash],(err,result)=>{
            console.log(err);

            if(result){
                res.send({message: "Successfully Registered..."});
            }
           
        })
    })




})

app.post('/supreg',(req,res)=>{

    const username = req.body.username
    const password = req.body.password
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const address = req.body.address
    const ic = req.body.ic
    const phone = req.body.phone
    const email = req.body.email
    const gender = req.body.gender

    bcrypt.hash(password,saltRounds,(err,hash)=>{
        
        if(err){
            console.log(err);
        }
        
        db.query("INSERT INTO `supplier`(`firstname`, `lastname`, `gender`, `ic_no`, `phone_no`, `email`, `username`, `password`, `address`) VALUES (?,?,?,?,?,?,?,?,?);INSERT INTO `users` (`username`, `password`, `userrole`) VALUES (?,?,'supplier');",[firstname,lastname,gender,ic,phone,email, username, password,address,username,hash],(err,result)=>{
            console.log(result);

            if(result){
                res.send({message: "Successfully Registered..."});
            }
           
        })
    })


})

app.post("/login",(req,res)=>{

    const password = req.body.password;
    const username = req.body.username;

 

    db.query(
        "SELECT * FROM users WHERE username = ?;",
        username,
        (err,result) => {
            console.log(result);

            if(err){
                res.send({err: err});
            }
            if(result.length > 0){
               bcrypt.compare(password,result[0].password,(error, response) =>{
                   
                   if(response){
                    res.send(result);
                   }
                   else{
                    res.send({message:"Invalid Username or Password"});
                    console.log(error);
                   }
               })
            }
            else{
                res.send({message:"Invalid Username or Password"});
            }
        }
    );
});



app.listen(3001,() =>{
    console.log("running on port 3001");

});