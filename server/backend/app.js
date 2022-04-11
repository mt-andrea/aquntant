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
    const {username, email, password } = req.body
    
    const q = "SELECT email FROM user WHERE email = ?;"+
            "SELECT username FROM user WHERE username =?;"
    pool.query(q, [email,username], (error, result) => {
        if(result[0].length > 0) {
            return res.send({message: "The email is in use"});
        }
        if(result[1].length > 0) {
            return res.send({message: "The username is in use"})
        }
        
        let hashPass =  bcrypt.hashSync(password, 10);
        console.log(hashPass);
        
        placeholders = [username,email,hashPass]
        q3 = "INSERT INTO user (username, email, pass) VALUES (?);"
        pool.query(q3, [placeholders], (error, result) => {
            if(!error){
               return res.send({message: "Success"});
            } else {
               return res.send({message: "Failure"})

            }
        })  
    })
})

app.post("/login",(req, res) => {
    const { username, password } = req.body;
    const q = "SELECT * FROM user WHERE username = ?";
    pool.query(q, [username],
        function (error, result) {
            if (error)
                return res.send({message:"Database error"});
            else if (result.length == 0) {
                return res.send({message: "Incorrect username or password"})
            } else {
                user = JSON.parse(JSON.stringify(result[0]));
                if (!bcrypt.compareSync(password, user.pass))
                    return res.send({message: "Incorrect username or password"})
                const token = jwt.sign(user, process.env.TOKEN_SECRET)
                res.json({ token: token, message: "Success" })
                
            }
        }
    )
})

app.patch("/changepass", (req, res) => { 
    const username = req.body.username;
    const pass = req.body.pass;

    let hashPass =  bcrypt.hashSync(pass, saltRounds);
    console.log(hashPass);

    pool.query("UPDATE user SET pass=? WHERE username=?", [hashPass, username], (error, result) => {
        if(!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })

})



app.post("/admin", (req, res) => {  //[WIP]
    const hashPass = process.env.ADMIN
    if (!bcrypt.compareSync(req.body.pass, hashPass))
        return res.status(401).send({ message: "Hibás jelszó!"})
    const token = jwt.sign({ pass: req.body.pass} , process.env.TOKEN_SECRET, {expiresIn:3600})
    res.json({ token: token, message: "Sikeres bejelentkezés."})
})

//listing routes
app.get("/listing", authenticateToken, (req, res)=> {
    const q = "SELECT DATE_FORMAT(movement.date, '%Y-%m-%d') as date, type.name AS type_name, movement.amount, "+
        "partner.name AS name, partner.address, user.username ,movement.comment FROM movement "+ 
        "INNER JOIN type ON type.id=movement.typeid "+
        "INNER JOIN partner ON partner.id=movement.partnerid "+
        "INNER JOIN user ON user.id=partner.userid "+
        "WHERE user.username=?;";        
    pool.query(q,[req.user.username], (error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})


app.post("/listing/filtered", authenticateToken,(req,res) => {
    let {in_out,month} = req.body;
    let ph =[]
    let q ="";
    if(in_out == "0" && month =="0") {
        q = "SELECT DATE_FORMAT(movement.date, '%Y-%m-%d') as date, type.name AS type_name, movement.amount, "+
        "partner.name AS name, partner.address, user.username ,movement.comment FROM movement "+ 
        "INNER JOIN type ON type.id=movement.typeid "+
        "INNER JOIN partner ON partner.id=movement.partnerid "+
        "INNER JOIN user ON user.id=partner.userid "+
        "WHERE user.username=?;"; 
        ph=[req.user.username]
    }
    if(in_out == "+" && month != "0") {
        q = "SELECT DATE_FORMAT(movement.date, '%Y-%m-%d') as date, type.name, movement.amount, "+
        "partner.name, partner.address, user.username ,movement.comment FROM movement "+ 
        "INNER JOIN type ON type.id=movement.typeid "+
        "INNER JOIN partner ON partner.id=movement.partnerid "+
        "INNER JOIN user ON user.id=partner.userid "+
        "WHERE movement.amount>0 AND MONTH(movement.date)=? AND user.username=?;";
        ph = [month, req.user.username]
    } if(in_out == "+" && month == "0") {
        q = "SELECT DATE_FORMAT(movement.date, '%Y-%m-%d') as date, type.name, movement.amount, "+
        "partner.name, partner.address, user.username ,movement.comment FROM movement "+ 
        "INNER JOIN type ON type.id=movement.typeid "+
        "INNER JOIN partner ON partner.id=movement.partnerid "+
        "INNER JOIN user ON user.id=partner.userid "+
        "WHERE movement.amount>0 AND user.username=?;";
        ph=[req.user.username]
    }
     if(in_out == "-" && month != "0") {
        q = "SELECT DATE_FORMAT(movement.date, '%Y-%m-%d') as date, type.name, movement.amount, "+
        "partner.name, partner.address, user.username ,movement.comment FROM movement "+ 
        "INNER JOIN type ON type.id=movement.typeid "+
        "INNER JOIN partner ON partner.id=movement.partnerid "+
        "INNER JOIN user ON user.id=partner.userid "+
        "WHERE movement.amount<0 AND MONTH(movement.date)=? AND user.username=?;";
        ph=[month, req.user.username]
    } if(in_out == "-" && month =="0") {
        q = "SELECT DATE_FORMAT(movement.date, '%Y-%m-%d') as date, type.name, movement.amount, "+
        "partner.name, partner.address, user.username ,movement.comment FROM movement "+ 
        "INNER JOIN type ON type.id=movement.typeid "+
        "INNER JOIN partner ON partner.id=movement.partnerid "+
        "INNER JOIN user ON user.id=partner.userid "+
        "WHERE movement.amount<0 AND user.username=?;";
        ph=[req.user.username]
    } 
     if(in_out == "0" && month !="0") {
        q = "SELECT DATE_FORMAT(movement.date, '%Y-%m-%d') as date, type.name, movement.amount, "+
        "partner.name, partner.address, user.username ,movement.comment FROM movement "+ 
        "INNER JOIN type ON type.id=movement.typeid "+
        "INNER JOIN partner ON partner.id=movement.partnerid "+
        "INNER JOIN user ON user.id=partner.userid "+
        "WHERE MONTH(movement.date)=? AND user.username=?;";
        ph=[month, req.user.username]
    } 
    pool.query(q, ph, (error, result)=> {
        if(!error) {
            res.send(result)
        } else {
            res.send(error)
        }
    })

     
})

app.get("/summary", authenticateToken,(req, res) => {
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

app.delete("/delete/partner/:id", (req, res) => { 
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


app.post("/test/add/all", (req, res) =>{    //only for testing and easier data insertion
    const {taxname,taxpercent,typename,partnername,username,email,country,postal,address,pass,date,amount,comment} = req.body;

    const q = "INSERT INTO tax (name, percent) VALUES (?);"+
              "INSERT INTO type (name, taxid) VALUES (?,(SELECT id FROM tax WHERE name = ?));"+
              "INSERT INTO user (username, pass) VALUES (?);"+
              "INSERT INTO partner (name, email, country, postal_code, address, userid) VALUES (?,(SELECT id FROM user WHERE username = ?));"+
              "INSERT INTO movement (date,amount,typeid,partnerid,comment) VALUES "
              +"(?,(SELECT id FROM type WHERE name = ?),(SELECT id FROM user WHERE username = ?),?);";
              
        let hashPass =  bcrypt.hashSync(pass, saltRounds);
        
        placeholders = [[taxname, taxpercent],typename, taxname, [username, hashPass],[partnername,email,country,postal,address],username,[date, amount], typename, username, comment];
    pool.query(q, placeholders, (error, results) => {
        if (!error) {
            res.send(results);
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
    console.log("Server started on port 4000...")
});