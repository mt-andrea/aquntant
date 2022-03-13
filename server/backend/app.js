require('dotenv').config();
const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json());
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const saltRounds = 10; //nem bántani!!!
app.use(cors());


var pool = mysql.createPool({
    host: 'localhost',
    port: "3306",
    user: 'root',
    password: '',
    database: 'aquntant',
    multipleStatements: true
});



//login & register  [W.I.P]  -register használható állapotban van

app.post("/register",  (req, res) => {
    const {name, email, username, pass, country, postal, address} = req.body
    
    q = "SELECT email FROM partner WHERE email = ?"
    pool.query(q, [email], (error, result) => {
        if(error) {
            console.log(error);
        }

        if(result.length > 0) {
            return res.render('register', {
                message: 'Az email foglalt'
            })
        } /*else if (pass !== jelszoConfirm) {
            return res.render('register', {
                message: 'A jelszavak nem azonosak.'
            })
        }
*/
        let hashPass =  bcrypt.hashSync(pass, saltRounds);
        console.log(hashPass);
        
        placeholders2 = [name, email, country, postal, address]
        placeholders = [username,hashPass]
        q2 = "INSERT INTO user (username, pass) VALUES (?);"+
             "INSERT INTO partner (name, email, country, postal_code, address, userid) VALUES (?,(SELECT id FROM user WHERE username = ?));"    
        pool.query(q2, [placeholders, placeholders2,username], (error, result) => {
            if(!error){
                res.send(result);
            } else {
                res.send(error)
            }
        })

        
    })
    
})

app.patch("/changepass", async (req, res) => { //[WIP]
    const username = req.body.username;
    const pass = req.body.pass;

    let hashPass = await bcrypt.hash(pass, saltRounds);
    console.log(hashPass);

    pool.query("UPDATE partner SET pass=? WHERE name=?", [hashPass, username], (error, result) => {
        if(!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })

})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const pass = req.body.pass;

    const q = "SELECT * FROM users WHERE username = ? AND pass = ?;";
    pool.query(q, [username, pass] , (error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})

//listing routes
app.get("/listing" ,(req, res)=> {
    const q = "SELECT movement.date, type.name, movement.amount, "+
        "partner.name, partner.address, movement.comment FROM movement "+ 
        "INNER JOIN type ON type.id=movement.typeid "+
        "INNER JOIN partner ON partner.id=movement.partnerid;";

    pool.query(q, (error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})

app.get("/listing/partner" ,(req, res)=> {
    const q = "SELECT movement.date, type.name, movement.amount, "+
        "partner.name, partner.address, movement.comment FROM movement "+ 
        "INNER JOIN type ON type.id=movement.typeid "+
        "INNER JOIN partner ON partner.id=movement.partnerid "+
        "WHERE partner.name=?;";

    pool.query(q, req.body.name ,(error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})

app.get("/listing/type" ,(req, res)=> {
    const q = "SELECT movement.date, type.name, movement.amount, "+
        "partner.name, partner.address, movement.comment FROM movement "+ 
        "INNER JOIN type ON type.id=movement.typeid "+
        "INNER JOIN partner ON partner.id=movement.partnerid "+
        " WHERE type.name=?;";

    pool.query(q, req.body.name ,(error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})

app.get("/listing/month" ,(req, res)=> {
    const q = "SELECT movement.date, type.name, movement.amount, "+
        "partner.name, partner.address, movement.comment FROM movement "+ 
        "INNER JOIN type ON type.id=movement.typeid "+
        "INNER JOIN partner ON partner.id=movement.partnerid "+
        "WHERE YEAR(movement.date)=? AND MONTH(movement.date)=?;";

    pool.query(q, req.body.year ,req.body.month ,(error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})

app.get("/summary", (req, res) => {
    const q = "SELECT sum(case when amount < 0 then amount else 0 end) AS pozitiv, "
        +"sum(case when amount > 0 then amount else 0 end) AS negativ "
        +"FROM movement;";

    pool.query(q, (error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})


//add routes


app.post("/add/type", (req, res) =>{
    const q = "INSERT IGNORE INTO type (name) VALUES (?);";

    pool.query(q, req.body.name, (error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})
    
app.post("/add/tax", (req, res) =>{
    const q = "INSERT IGNORE INTO tax (name,percent) VALUES (?);";

    pool.query(q, [req.body.name, req.body.percent], (error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})



app.post("/add/movement", (req, res) =>{
    const q = "INSERT INTO movement (date,amount,typeid,partnerid,comment) VALUES (?)";
    placeholders = [req.body.date, req.body.amount, req.body.typeid, req.body.partnerId, req.body.comment];
    pool.query(q, placeholders, (error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})

//update routes

app.patch("/change/type", (req, res) => {
    const q = "UPDATE type SET name=?, taxid=? WHERE id=?";
    pool.query(q, [req.body.name, req.body.taxid,req.body.id], (error, result) => {
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})

app.patch("/change/tax", (req, res) => {
    const q = "UPDATE tax SET name=? ,percent=? WHERE id=?";
    pool.query(q, [req.body.name, req.body.percent, req.body.id], (error, result) => {
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})

app.patch("/change/partner", (req, res) => { 
    const q = "UPDATE partner SET name=?, email=?, country=?, postal_code=?, address=? WHERE id=?";
    pool.query(q, [req.body.name, req.body.email, req.body.country, req.body.postal_code, req.body.address, req.body.id], (error, result) => {
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})
app.patch("/change/movement", (req, res) => {
    placeholders = [req.body.date, req.body.amount, req.body.typeid, req.body.partnerId, req.body.comment, req.body.id];
    const q = "UPDATE movement SET date=?, amount=?, typeid=?, partnerid=?, comment=? WHERE id=?";
    pool.query(q, placeholders, (error, result) => {
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})

//delete routes

app.delete("/delete/name/:id", (req, res) => {
    const q = "DELETE FROM type WHERE id=?";
    pool.query(q, [req.params.id], (error, result) =>{
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})

app.delete("/delete/type/:id", (req, res) => {
    const q = "DELETE FROM type WHERE id=?";
    pool.query(q, [req.params.id], (error, result) =>{
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})

app.delete("/delete/tax/:id", (req, res) => {
    const q = "DELETE FROM tax WHERE id=?";
    pool.query(q, [req.params.id], (error, result) =>{
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})

app.delete("/delete/partner/:id", (req, res) => { //maradhat szerintem.
    const q = "DELETE FROM partner WHERE id=?";
    pool.query(q, [req.params.id], (error, result) =>{
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})

app.delete("/delete/movement/:id", (req, res) => {
    const q = "DELETE FROM movement WHERE id=?";
    pool.query(q, [req.params.id], (error, result) =>{
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token)
        return res.status(401).send({ message: "Azonosítás szükséges!" })
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err)
            return res.status(403).send({ message: "Nincs jogosultsága!" })
        req.user = user
        next()
    })
}

app.listen(4000, () => {
    console.log("Server elindítva a 4000-es porton...")
});