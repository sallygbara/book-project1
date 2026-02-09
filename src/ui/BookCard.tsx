import type { Book } from "../Models/Book";

type Props = {
    book: Book;
    onDelete: (id: string) => void;
    onToggleFav: (book: Book) => void;
    Editor: (book: Book) => void;
};

export default function BookCard({ book, onDelete, onToggleFav, Editor }: Props) {
    const colorClass = book.isFavorite ? "blue" : "yellow";

    return (
        <div className={`bookCard ${colorClass}`}>

            <img src={book.coverImage}
                alt={book.coverImage || "Book cover"}
                className="image"

            />

            <h3 className="bookTitle">{book.title}</h3>
            <p className="bookAuthor">{book.author}</p>
            <p className="bookDescription muted small">{book.description}</p>

            <div className="cardActions">
                <button className="iconBtn" onClick={() => onToggleFav(book)}>
                    {book.isFavorite ? "💙" : "🤍"}
                </button>

                <button className="deleteBtn" onClick={() => onDelete(book.id)}>
                    delete 🗑️
                </button>

                <button className="EditorBtn" onClick={() => Editor(book)}>
                    editor✏️
                </button>
            </div>
        </div>
    );
}