import type { Book } from "../Models/Book";
import BookCard from "./BookCard";


type Props = {
    books: Book[];
    onDelete: (id: string) => void;
    onToggleFav: (book: Book) => void;

};

export default function BookGrid({ books, onDelete, onToggleFav }: Props) {
    function Editor(_book: Book): void {
    }

    return (
        <div className="booksGrid">
            {books.map((b) => (
                <BookCard
                    key={b.id}
                    book={b}
                    onDelete={onDelete}
                    onToggleFav={onToggleFav}
                    Editor={Editor}

                />
            ))}
        </div>
    );
}
