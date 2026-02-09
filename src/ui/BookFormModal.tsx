import { useEffect, useState } from "react";
import type { Book, BookCreate } from "../Models/Book";


type Props = {
    book: Book | null;
    onCreate: (data: BookCreate) => void;
    onUpdate: (id: string, data: BookCreate) => void;
};

export default function BookFormModal({ book, onCreate, onUpdate }: Props) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [coverImage, setCoverImage] = useState("");
    useEffect(() => {
        if (book) {
            setTitle(book.title);
            setAuthor(book.author);
            setDescription(book.description);
            setCoverImage(book.coverImage);
        }
    }, [book]);

    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (!title.trim() || !author.trim() || !description.trim() || !coverImage.trim()) {
            return alert("All fields are required!");
        }

        onCreate({
            title: title.trim(),
            author: author.trim(),
            description: description.trim(),
            coverImage: coverImage.trim(),
            isFavorite: false
        });

        setTitle("");
        setAuthor("");
        setDescription("");
        setCoverImage("");
    }

    return (
        <form onSubmit={submit} className="bookfrom">
            <h2 className="editbook">
                {book ? "Edit Book" : "Add Book"}
            </h2>
            <h1 className="book">
                <input value={title} onChange={e => setTitle(e.target.value)}
                    className="input mb-2"
                    placeholder="Title" />
                <input value={author} onChange={e => setAuthor(e.target.value)} className="input mb-2"
                    placeholder="Author" />
                <input value={description} onChange={e => setDescription(e.target.value)} className="input mb-2"
                    placeholder="Description" />
                <input value={coverImage} onChange={e => setCoverImage(e.target.value)} className="input mb-2"

                    placeholder="Cover IMAGE URL" />
            </h1>
            <button className="changes">
                {book ? "Save Changes" : "Add Book"}
            </button>
            <button className="cancel" onClick={() => {
                setTitle("");
                setAuthor("");
                setDescription("");
                setCoverImage("");
            }}>
                {book ? "Cancel" : "Clear Fields"}
            </button>
            <button className="add">
                {book ? "Add Book" : "save changes"}
            </button>




        </form>

    );
}
