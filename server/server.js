import express  from "express";
import cors from "cors";
import DB from "./db.js";
import bodyParser from "body-parser";
import {v2 as cloudinary} from 'cloudinary';


const app = express();
const port = 3030;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

DB.connect();

app.get("/", (req, res) => {
    res.json("WELCOME");
});

app.get("/allcontacts", async (req, res) => {
    try{
        const result = await DB.query(`
        SELECT *
        FROM contacts
        `)
        const rows = result.rows;
        console.log("success");
        res.send(rows);
    } 
    catch(error){
        console.log(error);
        return res.status(400).json({error});
    }
});

app.get("/individual/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const result = await DB.query(`
        SELECT *
        FROM contacts
        WHERE id = ${id}
        `)
        const rows = result.rows;
        console.log(rows);
        res.send(rows[0]);
    } 
    catch(error){
        console.log(error);
        return res.status(400).json({error});
    }
});

app.post("/add", async (req, res) => {
    try{
        const {name, email, phone, notes, url} = req.body;
        console.log(req.body);
        const result = await DB.query(`
        INSERT INTO contacts (name, email, phone, notes, url)
        VALUES ('${name}', '${email}', '${phone}', '${notes}', '${url}')
        `)
        res.send("success");
    } 
    catch(error){
        console.log(error);
        return res.status(400).json({error});
    }
});

app.put("/edit/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const {name, email, phone, notes, url} = req.body;
        console.log(req.body);
        const result = await DB.query(`
        UPDATE contacts
        SET name='${name}', email='${email}', phone='${phone}', notes='${notes}', url='${url}'
        WHERE id = ${id}
        `)
        res.send("success");
    }
    catch(error){
        console.log(error);
        return res.status(400).json({error});
}
});

app.delete("/delete/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const result = await DB.query(`
        DELETE FROM contacts WHERE id=${id}
        `)
        res.send("success");
    } 
    catch(error){
        console.log(error);
        return res.status(400).json({error});
    }
})

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
