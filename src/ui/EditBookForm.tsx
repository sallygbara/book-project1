import { useState } from "react";
import type { Book } from "../Models/Book";

type Props = {
    book: Book;
    onSave: (book: Book) => void;
    onCancel: () => void;
};

export default function EditBookForm({ book, onSave, onCancel }: Props) {
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [description, setDescription] = useState(book.description);
    const [coverImage, setCoverImage] = useState(book.coverImage);
    return (
        <div className="editOverlay">
            <div className="editBox">
                <h3>Edit Book</h3>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                />

                <div className="actions">
                    <button onClick={onCancel}>Cancel</button>
                    <button
                        onClick={() =>
                            onSave({ ...book, title, author, description, coverImage })
                        }
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
