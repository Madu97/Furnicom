const express = require('express');
const app = express();
//var cors = require('cors')
const mysql = require("mysql");
var router = express.Router();
//const fileUpload = require('express-fileupload');
//const exphbs = require('express-handlebars');
const path = require('path');


//const connection = require('./config/database');


const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const bcrypt = require('bcrypt');
const { response } = require('express');
const saltRounds = 10


//app.engine('hbs', exphbs({ extname: '.hbs' }));
//app.set('view engine', 'js');

//Multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./");},
    filename: function(req, file, cb){
        const ext = file.mimetype.split("/")[1];
        cb(null, `uploads/${file.originalname}-${Date.now()}.${ext}`);
    }
});
const upload = multer({
    storage: storage
});

//CORS
const cors = require('cors')
app.use(cors({
    origin: true,
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use(express.static('public'));
app.use(express.static('upload'));

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

//mysql
//const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'user',
    password : "",
    database : 'test'
});

//connection.connect();

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
    multipleStatements:true
});

app.get('/getit',(req, res) =>{
    const sqlInsert = "SELECT * FROM customer;"
    db.query(sqlInsert,(err, result)=>{
        console.log(result);
        res.send(result);

    })
})

app.get('/getsup',(req, res) =>{
    const sqlInsert = "SELECT * FROM supplier;"
    db.query(sqlInsert,(err, result)=>{
        console.log(result);
        res.send(result);

    })
})

app.get('/getdeli',(req, res) =>{
    const sqlInsert = "SELECT * FROM delivery_person;"
    db.query(sqlInsert,(err, result)=>{
        console.log(result);
        res.send(result);

    })
})

app.get('/getprod',(req, res) =>{
    const sqlInsert = "SELECT * FROM products;"
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

app.get('/getdelivery',(req, res) =>{
    db.query("SELECT * FROM delivery_person WHERE username=?",[req.query.name],(err, result)=>{
        console.log(result);
        res.send(result);

    })

})

app.get('/deliveryhistory',(req, res) =>{
    db.query("SELECT * FROM dperson_status JOIN delivery_person ON dperson_status.dperson_id = delivery_person.id WHERE dperson_status.dperson_id=?;",[req.query.id],(err, result)=>{
        console.log(result);
        res.send(result);

    })
})

app.get('/deliverycount',(req, res) =>{
    db.query("SELECT COUNT(*)AS delivercount FROM delivery WHERE dperson_id= ?",[req.query.id],(err, result)=>{
        console.log(result);
        res.send(result); 

    })

})

app.get('/pendingcount',(req, res) =>{
    db.query("SELECT COUNT(DISTINCT order_id)AS pendingcount FROM dperson_status WHERE status='Pending' AND dperson_id= ?",[req.query.id],(err, result)=>{
        console.log(result);
        res.send(result); 

    })

})


app.get('/cancelcount',(req, res) =>{
    db.query("SELECT COUNT(*)AS cancelcount FROM canceled_order WHERE dperson_id = ?",[req.query.id],(err, result)=>{
        console.log(result);
        res.send(result); 

    })

})

app.get('/deliverydata',(req, res) =>{
    db.query("SELECT * FROM dperson_status JOIN customer ON dperson_status.customer_id = customer.id WHERE dperson_status.dperson_id=?;",[req.query.id],(err, result)=>{
        console.log(result); 
        res.send(result);

    })
})


app.get('/changedeliverystatus',(req, res) =>{
     db.query("UPDATE dperson_status SET status = ? WHERE dperson_id = ?;",[req.query.status , req.query.dperson_id],(err, result)=>{
         console.log(result);
         res.send(result);
 
     })
 
})
 
app.get('/getdeliverynotification',(req, res) =>{
    db.query("SELECT * FROM delivery_notification WHERE order_id=?",[req.query.id],(err, result)=>{
        console.log(result);
        res.send(result);

    })

})



app.get('/productcount',(req, res) =>{
    db.query("SELECT COUNT(*)AS rowcount FROM products WHERE supplier_id= ?",[req.query.id],(err, result)=>{
        console.log(result);
        res.send(result); 

    })

})

app.get('/ordercount',(req, res) =>{
    db.query("SELECT COUNT(DISTINCT order_id)AS count FROM order_items WHERE supplier_id= ?",[req.query.id],(err, result)=>{
        console.log(result);
        res.send(result); 

    })

})

app.get('/customizedordercount',(req, res) =>{
    db.query("SELECT COUNT(*)AS orders FROM customized_order WHERE supplier_id = ?",[req.query.id],(err, result)=>{
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

app.get('/getCustomOrder',(req, res) =>{
    db.query("SELECT * FROM customized_order WHERE supplier_id=? AND status_code = '4';",[req.query.id],(err, result)=>{
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
     db.query("UPDATE customized_order SET status_code = ? WHERE supplier_id = ?;",[req.query.status , req.query.sid],(err, result)=>{
         console.log(result);
         res.send(result);
 
     })
 
 })

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

 app.get('/checkusername',(req, res) =>{

       db.query("SELECT username FROM users WHERE username=?;",[req.query.username],(err, result)=>{
    
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
       
    
        bcrypt.hash(password,saltRounds,(err,hash)=>{
           
            if(err){
                console.log(err);
               
            }
           
            db.query("INSERT INTO `customer`(`firstname`, `lastname`, `ic_no`, `phone_no`, `email`, `username`, `password`, `address`) VALUES (?,?,?,?,?,?,?,?);INSERT INTO `users` (`username`, `password`, `userrole`) VALUES (?,?,'customer');",[firstname,lastname,ic,phone,email, username, hash,address,username,hash],(err,result)=>{
                console.log(err);
    
                if(result){
                    res.send({message: "Successfully Registered..."});
                }
               
            })
        })
    
    
    
    
    })

    app.post('/addcus',(req,res)=>{

        const username = req.body.username
        const password = req.body.password
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const address = req.body.address
        const ic = req.body.ic
        const phone = req.body.phone
        const email = req.body.email
       
    
        bcrypt.hash(password,saltRounds,(err,hash)=>{
           
            if(err){
                console.log(err);
               
            }
           
            db.query("INSERT INTO `customer`(`firstname`, `lastname`, `ic_no`, `phone_no`, `email`, `username`, `password`, `address`) VALUES (?,?,?,?,?,?,?,?);INSERT INTO `users` (`username`, `password`, `userrole`) VALUES (?,?,'customer');",[firstname,lastname,ic,phone,email, username, hash,address,username,hash],(err,result)=>{
                console.log(err);
    
                if(result){
                    res.send({message: "Customer Added..."});
                }
               
            })
        })
    })


    /*app.get('/updatecustomer',(req,res)=>{

        const username = req.body.username
        const password = req.body.password
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const address = req.body.address
        const ic = req.body.ic
        const phone = req.body.phone
        const email = req.body.email
       
    
        bcrypt.hash(password,saltRounds,(err,hash)=>{
           
            if(err){
                console.log(err);
               
            }
           
            db.query("UPDATE customer SET firstname=?, lastname=?, ic_no=?, phone_no=?, email=?, username=?, password=?, address=?  WHERE id = ?;",[req.query.firstname , req.query.lastname, req.query.ic_no, req.query.phone_no, req.query.email, req.query.username, req.query.password, req.query.address, req.query.id],(err, result)=>{
                console.log(err);
    
                if(result){
                    res.send({message: "Customer Edited..."});
                }
               
            })
        })
    })*/

    app.get('/updatecustomer',(req, res) =>{

         db.query("UPDATE customer SET firstname=?, lastname=?, ic_no=?, phone_no=?, email=?, username=?, password=?, address=?  WHERE id = ?;",[req.query.firstname , req.query.lastname, req.query.ic_no, req.query.phone_no, req.query.email, req.query.username, req.query.password, req.query.address, req.query.id],(err, result)=>{
             console.log(result);
             res.send(result);
     
         })
     
     })

     app.post('/update',(req, res) => {
        const userId = req.body.id;
        let sql = "update customer SET firstname='"+req.body.firstname+"', lastname='"+req.body.lastname+"', ic_no='"+req.body.ic_no+"', phone_no='"+req.body.phone_no+"',  email='"+req.body.email+"',  username='"+req.body.username+"', password='"+req.body.password+"', address='"+req.body.address+"' where id ="+userId;
        let query = db.query(sql,(err, results) => {
          if(err) throw err;
          res.redirect('/');
        });
    });



     /*app.put("/updatecustomer", (req, res) => {
        const id = req.body.id;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const ic_no = req.body.ic_no;
        const phone_no = req.body.phone_no;
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        const address = req.body.address;
        
        db.query(
          "UPDATE customer SET firstname=?, lastname=?, ic_no=?, phone_no=?, email=?, username=?, password=?, address=? WHERE id = ?",
          [firstname, lastname, ic_no, phone_no, email, username, password, address, id],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
        );
      });*/

      app.get('/selectcus',(req, res) =>{    
        db.query("SELECT * FROM customer WHERE id = ?;",[req.query.id],(err, result)=>{
            console.log(result);
            res.send(result);    
        })    
    })

      

     app.get('/deletecustomer',(req, res) =>{    
         db.query("DELETE FROM customer WHERE id = ?;",[req.query.id],(err, result)=>{
             console.log(result);
             res.send(result);    
         })    
     })

     app.get('/deletesupplier',(req, res) =>{    
        db.query("DELETE FROM supplier WHERE id = ?;",[req.query.id],(err, result)=>{
            console.log(result);
            res.send(result);    
        })    
    })

    app.get('/deleteproduct',(req, res) =>{    
        db.query("DELETE FROM products WHERE id = ?;",[req.query.id],(err, result)=>{
            console.log(result);
            res.send(result);    
        })    
    })

    app.get('/deletedeliver',(req, res) =>{    
        db.query("DELETE FROM delivery_person WHERE id = ?;",[req.query.id],(err, result)=>{
            console.log(result);
            res.send(result);    
        })    
    })


    app.post('/addsup',(req,res)=>{

        const username = req.body.username
        const password = req.body.password
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const address = req.body.address
        const ic = req.body.ic
        const phone = req.body.phone
        const email = req.body.email
       
    
        bcrypt.hash(password,saltRounds,(err,hash)=>{
           
            if(err){
                console.log(err);
            }
           
            db.query("INSERT INTO `supplier`(`firstname`, `lastname`, `ic_no`, `phone_no`, `email`, `username`, `password`, `address`) VALUES (?,?,?,?,?,?,?,?);INSERT INTO `users` (`username`, `password`, `userrole`) VALUES (?,?,'supplier');",[firstname,lastname,ic,phone,email, username, hash,address,username,hash],(err,result)=>{
                console.log(err);
    
                if(result){
                    res.send({message: "Supplier Added..."});
                }
               
            })
        })
    
    
    
    
    })

    app.post('/adddel',(req,res)=>{

        const username = req.body.username
        const password = req.body.password
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const availability = req.body.availability
        const ic = req.body.ic
        const phone = req.body.phone
        const email = req.body.email
       
    
        bcrypt.hash(password,saltRounds,(err,hash)=>{
           
            if(err){
                console.log(err);
            }
           
            db.query("INSERT INTO `delivery_person`(`firstname`, `lastname`, `ic_no`, `phone_no`, `email`, `username`, `password`, `availability) VALUES (?,?,?,?,?,?,?,?);INSERT INTO `users` (`username`, `password`, `userrole`) VALUES (?,?,'deliver');",[firstname,lastname,ic,phone,email, username, hash,availability,username,hash],(err,result)=>{
                console.log(err);
    
                if(result){
                    res.send({message: "Deliver Added..."});
                }
               
            })
        })
    
    
    
    
    })

    app.post('/addprod',(req,res)=>{

        const image = req.body.image
        const name = req.body.name
        const description = req.body.description
        const timber_type = req.body.timber_type
        const timber_quality = req.body.timber_quality
        const price = req.body.price
        const available_quantity = req.body.available_quantity
        const currency = req.body.currency
        const thumb = req.body.thumb
       
        
    
        bcrypt.hash(saltRounds,(err,hash)=>{
           
            if(err){
                console.log(err);
            }
           
            db.query("INSERT INTO `products`(`image`, `name`, `description`, `timber_type`, `timber_quality`, `price`, `available_quantity`, `currency`, `thumb`) VALUES (?,?,?,?,?,?,?,?,?);",[image,name,description,timber_type,timber_quality,price, available_quantity,currency,thumb],(err,result)=>{
                console.log(err);
    
                if(result){
                    res.send({message: "Product Added..."});
                }
               
            })
        })
    
    })

    /*app.use(cors());

    const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public_html/', 'uploads'),
    filename: function (req, file, cb) {   
        // null as first argument means no error
        cb(null, Date.now() + '-' + file.originalname )  
    }
    })*/

    app.post('/imageupload', async (req, res) => {	
        try {
            // 'avatar' is the name of our file input field in the HTML form
    
            let upload = multer({ storage: storage}).single('avatar');
    
            upload(req, res, function(err) {
                // req.file contains information of uploaded file
                // req.body contains information of text fields
    
                if (!req.file) {
                    return res.send('Please select an image to upload');
                }
                else if (err instanceof multer.MulterError) {
                    return res.send(err);
                }
                else if (err) {
                    return res.send(err);
                }
    
                const classifiedsadd = {
                    image: req.file.filename
                };
                const sql = "INSERT INTO products SET ?";
                db.query(sql, classifiedsadd, (err, results) => {  if (err) throw err;
                    res.json({ success: 1 })      
    
                });  
    
            }); 
    
        }catch (err) {console.log(err)}
    })

    db.getConnection((err, connection) => {
        if (err) {
          if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
          }
          if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.');
          }
          if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.');
          }
        }
      
        if (connection) connection.release();
      
        return;
      });
    

    app.post('/supreg',(req,res)=>{

            const username = req.body.username
            const password = req.body.password
            const firstname = req.body.firstname
            const lastname = req.body.lastname
            const address = req.body.address
            const ic = req.body.ic
            const phone = req.body.phone
            const email = req.body.email
           
        
            bcrypt.hash(password,saltRounds,(err,hash)=>{
               
                if(err){
                    console.log(err);
                }
               
                db.query("INSERT INTO `supplier`(`firstname`, `lastname`, `ic_no`, `phone_no`, `email`, `username`, `password`, `address`) VALUES (?,?,?,?,?,?,?,?);INSERT INTO `users` (`username`, `password`, `userrole`) VALUES (?,?,'supplier');",[firstname,lastname,ic,phone,email, username, hash,address,username,hash],(err,result)=>{
                    console.log(err);
        
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