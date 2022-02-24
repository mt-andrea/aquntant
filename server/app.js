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



//login & register  [W.I.P]  -még nem használhatóak

app.post("/register", (req, res) => {
    const felhasznalo = req.body.felhasznalo;
    const jelszo = req.body.jelszo;
    //const jelszoConfirm = req.body.jelszoConfirm;
    const nev = req.body.nev;
    const email = req.body.email;
    const cim = req.body.cim;

    pool.query("SELECT felhasznalo FROM partnerek WHERE email = ?", [email], (error, result) => {
        if(error) {
            console.log(error);
        }

        if(result.length > 0) {
            return res.render('register', {
                message: 'Az email foglalt'
            })
        } /*else if (jelszo !== jelszoConfirm) {
            return res.render('register', {
                message: 'A jelszavak nem azonosak.'
            })
        }
*/
        let hashJelszo =  bcrypt.hash(jelszo, saltRounds);
        console.log(hashJelszo);
        
        placeholders = [felhasznalo, hashJelszo, nev, email, cim]
        pool.query("INSERT INTO partnerek (nev,felhasznalo,jelszo,email,cim) VALUES (?)", placeholders, (error, result) => {
            if(!error){
                res.send(result);
            } else {
                res.send(error)
            }
        })

        
    })
    
})

app.patch("/changepass", async (req, res) => {
    const felhasznalo = req.body.felhasznalo;
    const jelszo = req.body.jelszo;

    let hashJelszo = await bcrypt.hash(jelszo, saltRounds);
    console.log(hashJelszo);

    pool.query("UPDATE partnerek SET jelszo=? WHERE felhasznalo=?", [hashJelszo, felhasznalo], (error, result) => {
        if(!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })

})

app.post("/login", (req, res) => {
    const felhasznalo = req.body.felhasznalo;
    const jelszo = req.body.jelszo;

    const q = "SELECT * FROM users WHERE felhasznalo = ? AND jelszo = ?;";
    pool.query(q, [felhasznalo, jelszo] , (error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})

//listázások
app.get("/listazas" ,(req, res)=> {
    const q = "SELECT penzmozgasok.datum, tipusok.tipus, penzmozgasok.osszeg, "+
        "afa_kulcs.szazalek, partnerek.nev, partnerek.cim, penzmozgasok.megjegyzes FROM penzmozgasok "+ 
        "INNER JOIN tipusok ON tipusok.id=penzmozgasok.tipus_id "+
        "INNER JOIN afa_kulcs ON afa_kulcs.id=penzmozgasok.afa_id "+
        "INNER JOIN partnerek ON partnerek.id=penzmozgasok.partner_id;";

    pool.query(q, (error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})

app.get("/listazas/partner" ,(req, res)=> {
    const q = "SELECT penzmozgasok.datum, tipusok.tipus, penzmozgasok.osszeg, "+
        "afa_kulcs.szazalek, partnerek.nev, partnerek.cim, penzmozgasok.megjegyzes FROM penzmozgasok "+ 
        "INNER JOIN tipusok ON tipusok.id=penzmozgasok.tipus_id "+
        "INNER JOIN afa_kulcs ON afa_kulcs.id=penzmozgasok.afa_id "+
        "INNER JOIN partnerek ON partnerek.id=penzmozgasok.partner_id "+
        "WHERE partnerek.nev=?";

    pool.query(q, req.body.partner ,(error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})

app.get("/listazas/tipus" ,(req, res)=> {
    const q = "SELECT penzmozgasok.datum, tipusok.tipus, penzmozgasok.osszeg, "+
        "afa_kulcs.szazalek, partnerek.nev, partnerek.cim, penzmozgasok.megjegyzes FROM penzmozgasok "+ 
        "INNER JOIN tipusok ON tipusok.id=penzmozgasok.tipus_id "+
        "INNER JOIN afa_kulcs ON afa_kulcs.id=penzmozgasok.afa_id "+
        "INNER JOIN partnerek ON partnerek.id=penzmozgasok.partner_id "+
        " WHERE tipusok.tipus=?;";

    pool.query(q, req.body.tipus ,(error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})

app.get("/listazas/honap" ,(req, res)=> {
    const q = "SELECT penzmozgasok.datum, tipusok.tipus, penzmozgasok.osszeg, "+
        "afa_kulcs.szazalek, partnerek.nev, partnerek.cim, penzmozgasok.megjegyzes FROM penzmozgasok "+ 
        "INNER JOIN tipusok ON tipusok.id=penzmozgasok.tipus_id "+
        "INNER JOIN afa_kulcs ON afa_kulcs.id=penzmozgasok.afa_id "+
        "INNER JOIN partnerek ON partnerek.id=penzmozgasok.partner_id "+
        "WHERE YEAR(penzmozgasok.datum)=? AND MONTH(penzmozgasok.datum)=?;";

    pool.query(q, req.body.ev ,req.body.honap ,(error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})

app.get("/osszegzes", (req, res) => {
    const q = "SELECT sum(case when osszeg < 0 then osszeg else 0 end) AS pozitiv, "
        +"sum(case when osszeg > 0 then osszeg else 0 end) AS negativ "
        +"FROM penzmozgasok;";

    pool.query(q, (error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})


//Hozzáadások 


app.post("/hozzaad/tipus", (req, res) =>{
    const q = "INSERT IGNORE INTO tipusok (tipus) VALUES (?);";

    pool.query(q, req.body.tipus, (error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})
    
app.post("/hozzaad/afa", (req, res) =>{
    const q = "INSERT IGNORE INTO afa_kulcs (szazalek) VALUES (?);";

    pool.query(q, req.body.afa, (error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})

app.post("/hozzaad/partner", (req, res) =>{  //biztos kell?
    const q = "INSERT IGNORE INTO partnerek (nev,cim) VALUES (?);";
    placeholders = [req.body.nev, req.body.cim];
    pool.query(q, placeholders, (error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})

app.post("/hozzaad/penzmozgas", (req, res) =>{
    const q = "INSERT INTO penzmozgasok (datum,osszeg,tipus_id,afa_id,partner_id,megjegyzes) VALUES (?)";
    placeholders = [req.body.datum, req.body.osszeg, req.body.tipusId, req.body.afaId, req.body.partnerId, req.body.megjegyzes];
    pool.query(q, placeholders, (error, results) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
})

//update routing

app.patch("/csere/tipus", (req, res) => {
    const q = "UPDATE tipusok SET tipus=? WHERE id=?";
    pool.query(q, [req.body.tipus, req.body.id], (error, result) => {
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})

app.patch("/csere/afa", (req, res) => {
    const q = "UPDATE afa_kulcs SET szazalek=? WHERE id=?";
    pool.query(q, [req.body.afa, req.body.id], (error, result) => {
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})

app.patch("/csere/partner", (req, res) => { //gondold át
    const q = "UPDATE partnerek SET nev=?, cim=? WHERE id=?";
    pool.query(q, [req.body.nev, req.body.cim, req.body.id], (error, result) => {
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})
app.patch("/csere/penzmozgasok", (req, res) => {
    placeholders = [req.body.datum, req.body.osszeg, req.body.tipusId, req.body.afaId, req.body.partnerId, req.body.megjegyzes, req.body.id];
    const q = "UPDATE penzmozgasok SET datum=?, osszeg=?, tipus_id=?, afa_id=?, partner_id=?, megjegyzes=? WHERE id=?";
    pool.query(q, placeholders, (error, result) => {
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})

//torlesek

app.delete("/torol/tipus/:id", (req, res) => {
    const q = "DELETE FROM tipusok WHERE id=?";
    pool.query(q, [req.params.id], (error, result) =>{
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})

app.delete("/torol/afa/:id", (req, res) => {
    const q = "DELETE FROM afa_kulcs WHERE id=?";
    pool.query(q, [req.params.id], (error, result) =>{
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})

app.delete("/torol/partner/:id", (req, res) => { //maradhat szerintem.
    const q = "DELETE FROM partnerek WHERE id=?";
    pool.query(q, [req.params.id], (error, result) =>{
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})

app.delete("/torol/penzmozgasok/:id", (req, res) => {
    const q = "DELETE FROM penzmozgasok WHERE id=?";
    pool.query(q, [req.params.id], (error, result) =>{
        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }
    })
})

app.listen(3000, () => {
    console.log("Server elindítva a 3000-es porton...")
});