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

const multer = require('multer')

require("dotenv").config();

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

app.get("/config/paypal", (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

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

app.get('/updatecustomer',(req, res) =>{
         db.query("UPDATE customer SET firstname=?, lastname=?, ic_no=?, phone_no=?, email=?, address=?  WHERE id = ?;",[req.query.firstname , req.query.lastname, req.query.ic_no, req.query.phone_no, req.query.email, req.query.address, req.query.id],(err, result)=>{
             console.log(result);
             res.send(result);
     
         })
     
     })

     app.get("/salesReport", (req, res) => {
        let monthReport = [
            {
                id: 1,
                name: "January",
                income: 0,
            },
            {
                id: 2,
                name: "February",
                income: 0,
            },
            {
                id: 3,
                name: "March",
                income: 0,
            },
            {
                id: 4,
                name: "April",
                income: 0,
            },
            {
                id: 5,
                name: "May",
                income: 0,
            },
            {
                id: 6,
                name: "June",
                income: 0,
            },
            {
                id: 7,
                name: "July",
                income: 0,
            },
            {
                id: 8,
                name: "August",
                income: 0,
            },
            {
                id: 9,
                name: "September",
                income: 0,
            },
            {
                id: 10,
                name: "October",
                income: 0,
            },
            {
                id: 11,
                name: "November",
                income: 0,
            },
            {
                id: 12,
                name: "December",
                income: 0,
            },
        ];
        db.query(
            "SELECT MONTH(orders.date) As Month, products.price, order_items.quantity FROM order_items JOIN products ON order_items.product_id = products.id  JOIN orders ON orders.order_id = order_items.order_id;",
    
            (err, result) => {
                result.forEach((x) => {
                    let income = x.price * x.quantity;
                    monthReport.forEach((y) => {
                        y.id == x.Month && (y.income += income);
                    });
                });
    
                if (result.length > 0) {
                    res.send({
                        message: "Successfully fetched monthly sales report.",
                        data: monthReport,
                    });
                    return;
                }
    
                if (err) {
                    res.send({
                        message: "failed to fetch monthly sales report.",
                        err: err,
                    });
                }
            }
        );
    });

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

        // const image = req.body.image
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
           
            db.query("INSERT INTO `products`(`thumb`, `name`, `description`, `timber_type`, `timber_quality`, `price`, `available_quantity`, `currency`) VALUES (?,?,?,?,?,?,?,?);",[name,description,timber_type,timber_quality,price, available_quantity,currency,thumb],(err,result)=>{
                console.log(err);
    
                if(result){
                    res.send({message: "Product Added..."});
                }
               
            })
        })
    
    })

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

app.get('/getcustomer',(req, res) =>{
        db.query("SELECT * FROM customer WHERE id=?",[req.query.id],(err, result)=>{
            console.log(req.query.id);
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

app.get('/updatedeliverinfo',(req, res) =>{
    db.query("UPDATE delivery_person SET firstname=?,lastname=?,email=?,phone_no=?,address=? WHERE id=?;",[req.query.fname, req.query.lname, req.query.email, req.query.phone, req.query.address, req.query.d_id],(err, result)=>{
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

app.get('/updatesupplierinfo',(req, res) =>{
    db.query("UPDATE supplier SET firstname=?,lastname=?,email=?,phone_no=?,address=? WHERE id=?;",[req.query.fname, req.query.lname, req.query.email, req.query.phone, req.query.address, req.query.sup_id],(err, result)=>{
        console.log(result);
        res.send(result);

    })

})

app.get('/getCustomOrder',(req, res) =>{
    db.query("SELECT * FROM customized_order WHERE supplier_id=? AND status_code = '5';",[req.query.id],(err, result)=>{
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
    db.query("SELECT * FROM customized_order JOIN customer ON customized_order.customer_id = customer.id WHERE customized_order.supplier_id=? ORDER BY order_id DESC;",[req.query.id],(err, result)=>{
        console.log(result); 
        res.send(result);

    })
})

app.get('/changeorderstatus',(req, res) =>{
     db.query("UPDATE customized_order SET status_code = ? WHERE supplier_id = ? AND order_id = ? ;",[req.query.status , req.query.sid, req.query.oid],(err, result)=>{
         console.log(result);
         res.send(result);
 
     })
 
 })

 app.get('/getallcustomizedorder',(req, res) =>{
    db.query("SELECT * FROM customized_order JOIN customer ON customized_order.customer_id = customer.id;",[req.query.id],(err, result)=>{
        console.log(result); 
        res.send(result);

    })
})

 app.get('/getallproductcount',(req, res) =>{
    db.query("SELECT COUNT(*)AS products FROM products",(err, result)=>{
        console.log(result);
        res.send(result); 

    })

})

app.get('/getallcustomercount',(req, res) =>{
    db.query("SELECT COUNT(*)AS customer FROM customer",(err, result)=>{
        console.log(result);
        res.send(result); 

    })

})

app.get('/getallsuppliercount',(req, res) =>{
    db.query("SELECT COUNT(*)AS supplier FROM supplier",(err, result)=>{
        console.log(result);
        res.send(result); 

    })

})

app.get('/getalldeliverercount',(req, res) =>{
    db.query("SELECT COUNT(*)AS delivery FROM delivery_person",(err, result)=>{
        console.log(result);
        res.send(result); 

    })

})

app.get('/getallordercount',(req, res) =>{
    db.query("SELECT COUNT(*)AS orders FROM orders",(err, result)=>{
        console.log(result);
        res.send(result); 

    })

})

app.get('/gettotalsales',(req, res) =>{
    db.query("SELECT * FROM order_items JOIN products ON order_items.product_id = products.id",(err, result)=>{
        console.log(result);
        res.send(result);

    })
})

app.get('/changestatus',(req, res) =>{
    db.query("UPDATE orders SET status_code = ? WHERE order_id = ? ;",[req.query.status , req.query.oid],(err, result)=>{
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

app.get('/getorders',(req, res) =>{
    db.query("SELECT * FROM orders JOIN customer ON orders.customer_id = customer.id JOIN order_items ON orders.order_id = order_items.order_id JOIN products ON order_items.product_id = products.id",(err, result)=>{
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
    db.query("SELECT * FROM orders JOIN order_items ON orders.payment_id = order_items.payment_id JOIN products ON order_items.product_id = products.id WHERE orders.customer_id=?;",[req.query.id],(err, result)=>{
        //console.log(req.query.id);
        res.send(result);

    })

})

app.get('/recentordersbycustomer_id',(req, res) =>{
    db.query("SELECT * FROM orders JOIN order_items ON orders.payment_id = order_items.payment_id JOIN products ON order_items.product_id = products.id WHERE orders.customer_id=? LIMIT 2;",[req.query.id],(err, result)=>{
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
    db.query("SELECT shoppingcart.id,shoppingcart.customer_id,shoppingcart.product_id,shoppingcart.quantity,shoppingcart.data_added,products.name,products.description,products.price,products.available_quantity,products.thumb FROM shoppingcart INNER JOIN products ON shoppingcart.product_id = products.id WHERE shoppingcart.customer_id=?",[req.query.id],(err, result)=>{
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

 app.get('/addtoorder',(req, res) =>{

    db.query("INSERT INTO `orders`(`payment_id`, `customer_id`, `ship_method`, `date`,`status`,`status_code`) VALUES (?,?,'VISA',NOW(),'Preparing','0');",[req.query.order_id , req.query.customer_id],(err, result)=>{
        res.send(result);

    })

})

app.get('/addToorderItems',(req, res) =>{

   db.query("INSERT INTO `order_items`(`payment_id`, `item_number`, `product_id`, `supplier_id`,`quantity`,`rating`) VALUES (?,?,?,'19',?,'0');UPDATE products SET available_quantity = available_quantity -? WHERE id = ?;",[req.query.payment_id , req.query.item_number, req.query.product_id, req.query.qtn, req.query.qtn, req.query.product_id],(err, result)=>{
       res.send(result);

   })

})

app.get('/deletecart',(req, res) =>{

    db.query("DELETE FROM shoppingcart WHERE customer_id = ?;",[req.query.customer_id],(err, result)=>{
        console.log(result);
        res.send(result);

    })

})

app.get('/updatecustomerinfo',(req, res) =>{
    db.query("UPDATE customer SET firstname=?,lastname=?,email=?,phone_no=?,address=? WHERE id=?;",[req.query.fname, req.query.lname, req.query.email, req.query.phone, req.query.address, req.query.cust_id],(err, result)=>{
        console.log(result);
        res.send(result);

    })

})

 app.get('/checkusername',(req, res) =>{

       db.query("SELECT username FROM users WHERE username=?;",[req.query.username],(err, result)=>{
    
           res.send(result);
    
    
       })
    
    
    })

    app.get('/searchproducts',(req, res) =>{
        //console.log(req.query.word)
        range1 = req.query.range1;
        range2 =req.query.range2;
        sortbyrating = req.query.sortbyrating;
    
        qr = "SELECT * FROM products WHERE name LIKE '"+req.query.word+"%' OR name LIKE '%"+req.query.word+"%';";
        
        if(range1 && range2){
            if(sortbyrating){
                qr = "SELECT * FROM products WHERE (price BETWEEN "+range1+" AND "+range2+ ") AND (name LIKE '"+req.query.word+"%' OR name LIKE '%"+req.query.word+"%') ORDER BY (total_ratings / total_people_rated) DESC;";
            }else{
            qr = "SELECT * FROM products WHERE (price BETWEEN "+range1+" AND "+range2+ ") AND (name LIKE '"+req.query.word+"%' OR name LIKE '%"+req.query.word+"%');";
            }
        }
        else{
            if(sortbyrating){
                qr = "SELECT * FROM products WHERE name LIKE '"+req.query.word+"%' OR name LIKE '%"+req.query.word+"%' ORDER BY (total_ratings / total_people_rated) DESC;";
            }else{
                qr = "SELECT * FROM products WHERE name LIKE '"+req.query.word+"%' OR name LIKE '%"+req.query.word+"%';";
            }
        }
    
        db.query(qr,(err, result)=>{
            res.send(result);
    
        })
    
    })
    
    
      app.post('/uploadpp', (req, res) => {
    
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
              cb(null, '../src/Assets/Images')
            },
            filename: (req, file, cb) => {
              cb(null, Date.now() + '-' +file.originalname)
            }
          })
          
          const upload = multer({ storage: storage }).single('file')
        
        upload(req, res, (err) => {
          if (err) {console.log(err)
            res.sendStatus(500);
          }
          res.send(req.file);
        });
        //app.use(express.static('../Client/src/Assets/Images'));
      });
    
      app.get('/updateprofilepic',(req, res) =>{
        db.query("UPDATE customer SET profile_picture=? WHERE id=?;",[req.query.name, req.query.id],(err, result)=>{
            console.log(result);
            res.send(result);
    
        })
    
    })

    app.get('/updatepropicture',(req, res) =>{
        db.query("UPDATE supplier SET profile_picture=? WHERE id=?;",[req.query.name, req.query.id],(err, result)=>{
            console.log(result);
            res.send(result);
    
        })
    
    })

    app.get('/updatepicture',(req, res) =>{
        db.query("UPDATE delivery_person SET profile_picture=? WHERE id=?;",[req.query.name, req.query.id],(err, result)=>{
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