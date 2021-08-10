const express = require('express');
const app = express();
var cors = require('cors')
const mysql = require("mysql");

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const bcrypt = require('bcrypt');
const { response } = require('express');
const saltRounds = 10

app.use(express.json());
app.use(
    cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,

}
));

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    key:"userId",
    secret: "youtube",
    resave: false,
    saveUninitialized: false,
    cookie:{
        //expires: 60 * 60 *24
    },
}))

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

app.get('/getsupplier',(req, res) =>{
    db.query("SELECT * FROM supplier WHERE username=?",[req.query.name],(err, result)=>{
        console.log(result);
        res.send(result);

    })

})

app.get('/supplierproduct',(req, res) =>{
    db.query("SELECT * FROM products WHERE supplier_id=?",[req.query.id],(err, result)=>{
        console.log(result);
        res.send(result);

    })

})

app.get('/suppliersales',(req, res) =>{
    db.query("SELECT * FROM order_items JOIN products ON order_items.product_id = products.id WHERE order_items.supplier_id=?;",[req.query.id],(err, result)=>{
        console.log(result);
        res.send(result);

    })
})

app.get('/customizedorder',(req, res) =>{
    db.query("SELECT * FROM customized_order JOIN customer ON customized_order.customer_id = customer.id WHERE customized_order.supplier_id=?;",[req.query.id],(err, result)=>{
        console.log(result);
        res.send(result);

    })
})

app.get('/changeorderstatus',(req, res) =>{
    console.log(req.query.sid)
     db.query("UPDATE customized_order SET status = (SELECT status from customized_order ) WHERE supplier_id = ?;",[req.query.cid , req.query.pid],(err, result)=>{
         console.log(result);
         res.send(result);
 
     })
 
 })
// app.get('/getSnotify',(req, res) =>{
//     db.query("SELECT * FROM supplier_notification WHERE Supplier_id=?",[req.query.id],(err, result)=>{
//         console.log(result);
//         res.send(result);

//     })
// })

app.get('/getproducts',(req, res) =>{
    const sqlInsert = "SELECT * FROM products;"
    db.query(sqlInsert,(err, result)=>{
        console.log(result);
        res.send(result);

    })
})



app.get('/productsdetails',(req, res) =>{
    db.query("SELECT * FROM products WHERE id=?",[req.query.id],(err, result)=>{
        console.log(req.query.id);
        res.send(result);

    })

})

app.get('/ordersbycustomer_id',(req, res) =>{
    db.query("SELECT * FROM orders JOIN order_items ON orders.order_id = order_items.order_id JOIN products ON order_items.product_id = products.id WHERE orders.customer_id=?;",[req.query.id],(err, result)=>{
        //console.log(req.query.id);
        res.send(result);

    })

})


app.get('/getuser',(req, res) =>{
    //console.log('sfd');
    db.query("SELECT * FROM customer WHERE username=?",[req.query.name],(err, result)=>{
        console.log(result);
        res.send(result);

    })

})

app.get('/getcart',(req, res) =>{
    db.query("SELECT shoppingcart.id,shoppingcart.customer_id,shoppingcart.product_id,shoppingcart.quantity,shoppingcart.data_added,products.name,products.description,products.price,products.thumb FROM shoppingcart INNER JOIN products ON shoppingcart.product_id = products.id WHERE shoppingcart.customer_id=?",[req.query.id],(err, result)=>{
        console.log(result);
        res.send(result);

    })

})

/**/

app.get('/increasequantity',(req, res) =>{
   console.log(req.query.cid)
   console.log(req.query.pid)
    db.query("UPDATE shoppingcart SET quantity = quantity +1 WHERE customer_id = ? AND product_id = ?;",[req.query.cid , req.query.pid],(err, result)=>{
        console.log(result);
        res.send(result);

    })

})

app.get('/decreasequantity',(req, res) =>{
    console.log(req.query.cid)
    console.log(req.query.pid)
     db.query("UPDATE shoppingcart SET quantity = quantity -1 WHERE customer_id = ? AND product_id = ?;",[req.query.cid , req.query.pid],(err, result)=>{
         console.log(result);
         res.send(result);
 
     })
 
 })

 app.get('/removeitem',(req, res) =>{
    console.log(req.query.cid)
    console.log(req.query.pid)
     db.query("DELETE FROM shoppingcart WHERE customer_id = ? AND product_id =?;",[req.query.cid , req.query.pid],(err, result)=>{
         console.log(result);
         res.send(result);
 
     })
 
 })

  app.get('/updaterating',(req, res) =>{
    //console.log(req.query.cid)
    //console.log(req.query.pid)
     db.query("UPDATE order_items SET rating=? WHERE product_id = ? AND order_id=? AND item_number=?;",[req.query.rating , req.query.pid, req.query.oid, req.query.item_no],(err, result)=>{
         console.log(result);
         res.send(result);
 
     })
 
 })

 app.get('/addtocart',(req, res) =>{
    //console.log(req.query.cid)
    //console.log(req.query.pid)
     db.query("INSERT INTO `shoppingcart`(`customer_id`, `product_id`, `quantity`, `data_added`) VALUES (?,?,1,NOW());",[req.query.cid , req.query.pid],(err, result)=>{
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

app.get("/login",(req,res)=>{
    if (req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false});
    }
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
                    req.session.user = result;
                    //console.log(req.session.user);
                    res.send(result);
                    return;
                   }
                   else{
                    res.send({message:"Invalid Username or Password"});
                    console.log(error);
                    return;
                   }
               })
            }
            else{
                res.send({message:"Invalid Username or Password"});
                return;
            }
        }
    );
});

app.post("/logout",(req,res)=>{
    req.session.destroy((err) =>{
         if(err) throw err;
         res.send({info:'success'});
         return
     })
 
 
 })


app.listen(3001,() =>{
    console.log("running on port 3001");

});