import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import usersRouter from "./routes/users.js";
import booksRouter from "./routes/books.js";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/booksDB")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use("/users", usersRouter);
app.use("/books", booksRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});