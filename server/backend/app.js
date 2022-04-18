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
const saltRounds = 10; 
app.use(cors());


var pool = mysql.createPool({
    host: 'localhost',
    port: "3306",
    user: 'root',
    password: '',
    database: 'aquntant',
    multipleStatements: true
});



//login, register and user account operations

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

app.patch("/change/pass", authenticateToken ,(req, res) => { 
    const {oldpassword,newpassword} = req.body;
    const q = "UPDATE user SET pass=? WHERE username=?";
    let newHashPass =  bcrypt.hashSync(newpassword, saltRounds);
    

    if(bcrypt.compareSync(oldpassword, req.user.pass)) {
        pool.query(q,[newHashPass, req.user.username], (error, result) =>{
            if(!error) {
                res.send(result)
            } else {
                res.send(error)
            }
        })
    } else {
        console.log("Error") //PH message
    }
})

app.patch("/change/email", authenticateToken, (req, res) => {
    const {oldemail,newemail,password} = req.body
    const q = "UPDATE user SET email=? WHERE username=?;"
    
    if(bcrypt.compareSync(password, req.user.pass) && (oldemail==req.user.email)) {
        pool.query(q,[newemail, req.user.username], (error, result) => {
            if(!error) {
                res.send({message: "Success"})
            } else {
                res.send(error)
            }
        })
    } else {
        console.log("Error")
    }

})


//listing routes



app.get("/listing", authenticateToken, (req, res)=> {
    const q = "SELECT DATE_FORMAT(movement.date, '%Y-%m-%d') as date, movement.amount, "+
        "partner.name AS name, partner.address, user.username ,movement.comment,tax.name as tax FROM movement "+ 
        "INNER JOIN partner ON partner.id=movement.partnerid "+
        "INNER JOIN user ON user.id=partner.userid "+
        "INNER JOIN tax ON tax.id=movement.taxid "+
        "WHERE user.username=? ORDER BY movement.id DESC;";        
    pool.query(q,[req.user.username], (error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})


app.post("/listing/filtered", authenticateToken,(req,res) => {
    let {in_out,month,partner} = req.body;
    let ph =[req.user.username]
    let q ="SELECT DATE_FORMAT(movement.date, '%Y-%m-%d') as date, movement.amount, "+
    "partner.name AS name, partner.address, user.username ,movement.comment,tax.name as tax FROM movement "+ 
    "INNER JOIN partner ON partner.id=movement.partnerid "+
    "INNER JOIN user ON user.id=partner.userid "+
    "INNER JOIN tax ON tax.id=movement.taxid "+
    "WHERE user.username=? ";
    if(in_out =="-" && month!="0" && partner!="0") {
        q +="AND movement.amount<0 AND MONTH(movement.date)=? AND partner.name=? "
        ph.push(month,partner)
    }
    if(in_out =="-" && month=="0" && partner!="0") {
        q +="AND movement.amount<0 AND partner.name=? "
        ph.push(partner)
    }
    if(in_out =="-" && month!="0" && partner=="0") {
        q +="AND movement.amount<0 AND MONTH(movement.date)=? "
        ph.push(month)
    }
    if(in_out =="-" && month=="0" && partner=="0") {
        q +="AND movement.amount<0 "
    }
    if(in_out =="+" && month!="0" && partner!="0") {
        q +="AND movement.amount>0 AND MONTH(movement.date)=? AND partner.name=? "
        ph.push(month,partner)
    }
    if(in_out =="+" && month=="0" && partner!="0") {
        q +="AND movement.amount>0 AND partner.name=? "
        ph.push(partner)
    }
    if(in_out =="+" && month!="0" && partner=="0") {
        q +="AND movement.amount>0 AND MONTH(movement.date)=? "
        ph.push(month,partner)
    }
    if(in_out =="+" && month=="0" && partner=="0") {
        q +="AND movement.amount>0 "
    }
    if(in_out =="0" && month!="0" && partner!="0") {
        q +="AND MONTH(movement.date)=? AND partner.name=? "
        ph.push(month,partner)
    }
    if(in_out =="0" && month=="0" && partner!="0") {
        q +="AND partner.name=? "
        ph.push(partner)
    }
    if(in_out =="0" && month!="0" && partner=="0") {
        q +="AND MONTH(movement.date)=? "
        ph.push(month)
    }
    q+="ORDER BY movement.id DESC"
    pool.query(q, ph, (error, result)=> {
        if(!error) {
            res.send(result)
        } else {
            res.send(error)
        }
    })
})

//add routes
app.post("/add/partner", authenticateToken,(req,res) => {
    const {name,email,country,postal_code,address} = req.body
    const userId =req.user.id
    const q = "INSERT INTO partner (name,email,country,postal_code,address,userid) VALUES (?);"
    const placeholders = [name,email,country,postal_code,address,userId]
    pool.query(q,[placeholders], (error, result) => {
        if(!error) {
            res.send(result)
        } else {
            res.send(error)
        }
    })

})

app.post("/add/transaction", authenticateToken, (req,res) => {
    const {date,taxid,amount,partnerid,comment} =req.body
    const q ="INSERT INTO movement (date,taxid,amount,partnerid,comment) VALUES (?);"
    const ph =[date, taxid, amount, partnerid, comment]
    pool.query(q,[ph], (error, result) => {
        if(!error) {
            res.send(result)
        } else {
            res.send(error)
        }
    })
})

app.post("/choices/partner", authenticateToken,(req,res)=> {
    const userid =req.user.id
    const q ="SELECT id,name,email,concat(country,' ',postal_code,' ',address) as address FROM partner WHERE userid=?;"
    pool.query(q, [userid], (error, result) => {
        if(!error) {
            res.send(result)
        } else {
            res.send(error)
        }
    })
})
app.post("/choices/tax",(req,res)=> {
    const q ="SELECT id,name,percent FROM tax;"
    pool.query(q, (error, result) => {
        if(!error) {
            res.send(result)
        } else {
            res.send(error)
        }
    })
})

app.post("/summary", authenticateToken,(req, res) => { //unused
    const userid = req.user.id
    const q = "SELECT sum(case when movement.amount < 0 then movement.amount else 0 end) AS negativ, "+
        "sum(case when movement.amount > 0 then movement.amount else 0 end) AS pozitiv FROM movement "+
        "INNER JOIN partner ON partner.id=movement.partnerid "+
        "INNER JOIN user ON user.id=partner.userid "+
        "WHERE user.id=?;";
    pool.query(q,[userid], (error, results) => {
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
        return res.status(401).send({ message: "Authorization required!" })
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err)
            return res.status(403).send({ message: "Access denied!" })
        req.user = user
        next()
        //console.log(user)
    })
}


    


app.listen(4000, () => {
    console.log("Server started on port 4000...")
});