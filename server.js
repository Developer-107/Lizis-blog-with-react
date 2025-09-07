import express from "express";
import dotenv from "dotenv";
import {Client, Pool} from "pg";
// import { getAverageColor } from 'fast-average-color-node';
import bodyParser from "body-parser";

import path from "path";
import cors from "cors";



const app = express();

app.use(bodyParser.json()); // <-- this is required for JSON POST



app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config()
app.use(express.static(path.join(process.cwd(), "dist"))); // Vite builds to 'dist'


const PORT = process.env.PORT;
const client = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.DATABASE,

});

app.get("/api/blogs", async (req, res) => {
    const page = parseInt(req.query.page) || 1; // current page, default 1
    const limit = 5; // blogs per page
    const offset = (page - 1) * limit;

    try {
        const totalResult = await client.query("SELECT COUNT(*) FROM blogs");
        const totalBlogs = parseInt(totalResult.rows[0].count);
        const totalPages = Math.ceil(totalBlogs / limit);

        // Get the blogs for this page (recent first)

        const result = await client.query(
        "SELECT * FROM blogs ORDER BY id DESC LIMIT $1 OFFSET $2",
        [limit, offset]
        );

        res.json({
            blogs: result.rows,
            totalPages,
            currentPage: page}) 
        } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching blogs");
        }
        });

app.get("/api/blog/:id", async (req, res) => {
    const postId = req.params.id;

    

    const result = await client.query(
        "SELECT * FROM blogs WHERE id=$1",
        [postId]
        );



    res.json({specificBlog: result.rows[0]})
    });


app.post("/post", async (req, res) => {
    
    const { title, subtitle, cover_img, content} = req.body;
  

    try {
    await client.query(
        "INSERT INTO blogs (title, subtitle, post_content, cover_img, post_date) VALUES ($1, $2, $3, $4, NOW())",
        [title, subtitle, content, cover_img]
    );
    res.json({ success: true, post: result.rows[0] }); // <-- send JSON back
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, error: "Failed to save post" });


    }
});



app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    } else {
        next();
    }
    });



    app.listen(
        PORT, () => {
            console.log(`Server listens on port ${PORT}`)
        });