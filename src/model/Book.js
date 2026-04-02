import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    coverImage: String,
    isFavorite: Boolean,
});

export const Book = mongoose.model("Book", bookSchema);