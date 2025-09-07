import express from "express";
import dotenv from "dotenv";
import {Client, Pool} from "pg";
// import { getAverageColor } from 'fast-average-color-node';
import bodyParser from "body-parser";

import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();

app.use(bodyParser.json()); // <-- this is required for JSON POST



app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config()


const PORT = process.env.PORT;
const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // If not local
});


client.connect()
  .then(() => console.log("DB connected!"))
  .catch(err => console.error("DB connection error:", err));

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
    res.json({ success: true, post: req.body.rows[0] }); // <-- send JSON back
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, error: "Failed to save post" });


    }
});

app.use(express.static(path.join(process.cwd(), "dist"))); // Vite builds to 'dist'


app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});



    app.listen(
        PORT, () => {
            console.log(`Server listens on port ${PORT}`)
        });