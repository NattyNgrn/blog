import express  from "express";
import cors from "cors";
import DB from "./db.js";
import bodyParser from "body-parser";



const app = express();
const port = 3030;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

DB.connect();

app.get("/", (req, res) => {
    res.json("WELCOME");
});

app.get("/allposts", async (req, res) => {
    try{
        const result = await DB.query(`
        SELECT *
        FROM posts
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

app.get("/post/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const result = await DB.query(`
        SELECT *
        FROM posts
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

app.get("/user/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const result = await DB.query(`
        SELECT *
        FROM users
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

app.put("/edituser/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const {username, password, firstname, lastname, email, url, bio} = req.body;
        console.log(req.body);
        const result = await DB.query(`
        UPDATE contacts
        SET username='${username}', password='${password}', firstname='${firstname}', lastname='${lastname}', 
        email='${email}', url='${url}', bio='${bio}'
        WHERE id = ${id}
        `)
        res.send("success");
    }
    catch(error){
        console.log(error);
        return res.status(400).json({error});
}
});

app.post("/addpost", async (req, res) => {
    try{
        const {user, title, recorded, url, article} = req.body;
        console.log(req.body);
        const result = await DB.query(`
        INSERT INTO posts (user, title, recorded, url, article)
        VALUES ('${user}', '${title}', '${recorded}', '${url}', '${article}')
        `)
        res.send("success");
    } 
    catch(error){
        console.log(error);
        return res.status(400).json({error});
    }
});

app.post("/newuser", async (req, res) => {
    try{
        const {username, password, firstname, lastname, email, url, bio} = req.body;
        console.log(req.body);
        const result = await DB.query(`
        INSERT INTO users (username, password, firstname, lastname, email, url, bio)
        VALUES ('${username}', '${password}', '${firstname}', '${lastname}', '${email}', '${url}', '${bio}')
        `)
        res.send("success");
    } 
    catch(error){
        console.log(error);
        return res.status(400).json({error});
    }
});
// app.put("/edit/:id", async (req, res) => {
//     try{
//         const id = req.params.id;
//         const {name, email, phone, notes, url} = req.body;
//         console.log(req.body);
//         const result = await DB.query(`
//         UPDATE contacts
//         SET name='${name}', email='${email}', phone='${phone}', notes='${notes}', url='${url}'
//         WHERE id = ${id}
//         `)
//         res.send("success");
//     }
//     catch(error){
//         console.log(error);
//         return res.status(400).json({error});
// }
// });

app.delete("/delete/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const result = await DB.query(`
        DELETE FROM posts WHERE id=${id}
        `)
        res.send("success");
    } 
    catch(error){
        console.log(error);
        return res.status(400).json({error});
    }
})

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
