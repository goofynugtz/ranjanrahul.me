import express from "express";
import cors from "cors";
import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config()

import blogDAO from "./dao/blogDAO";
import blogs from "./api/blogs.route";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/blogs", blogs);
app.use("*", (req, res) => {
    res.status(404).json({ error: "Not Found" });
})

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

if (process.env.DB_URI === undefined){
    throw console.error("400: DatabaseURI is not found");
}

MongoClient.connect(process.env.DB_URI ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.catch (error => {
    console.error(error.stack);
    process.exit(1);
})
.then(async client => {
    
    await blogDAO.injectDB(client);
    await blogDAO.getBlogs();
    app.listen(port, () => {
        console.log(`Listening on port: ${port}`);
        // console.log(`Try going to ${process.env.DB_URI}`);
    })
})

export default app;