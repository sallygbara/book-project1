import express from "express";
import { Book } from "../Models/Book.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const books = await Book.find();
    res.send(books);
});

router.post("/", async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.send(book);
});

router.delete("/:id", async (req, res) => {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    res.send(deleted);
});

export default router;