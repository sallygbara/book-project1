import { useEffect, useState } from "react";
import { BooksApi } from "./api/api";
import type { Book, BookCreate } from "./Models/Book";

import SortBar from "./ui/SortBar";
import BookCard from "./ui/BookCard";
import BookFormModal from "./ui/BookFormModal";


type SortBy = "title" | "author" | "favorite" | "description" | "coverImage";

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>("title");
  const [editingBook, setEditingBook] = useState<Book | null>(null);


  useEffect(() => {
    BooksApi.getAll().then(setBooks);
  }, []);

  const sortedBooks = [...books].sort((a, b) => {
    if (sortBy === "favorite") {
      return Number(b.isFavorite) - Number(a.isFavorite);
    }

    const va = (sortBy === "title" ? a.title : a.author).toLowerCase();
    const vb = (sortBy === "title" ? b.title : b.author).toLowerCase();
    return va.localeCompare(vb);
  });

  async function createBook(data: BookCreate) {
    const created = await BooksApi.create(data);
    setBooks(prev => [created, ...prev]);
  }

  async function updateBook(id: string, data: BookCreate) {
    const updated = await BooksApi.update(id, data);
    setBooks(prev => prev.map(b => b.id === id ? updated : b));
    setEditingBook(null);
  }

  async function deleteBook(id: string) {
    await BooksApi.remove(id);
    setBooks(prev => prev.filter(b => b.id !== id));
  }

  async function toggleFav(book: Book) {
    const updated = await BooksApi.update(book.id, {
      isFavorite: !book.isFavorite,
      title: book.title,
      author: book.author,
      description: book.description,
      coverImage: book.coverImage,
    });
    setBooks(prev => prev.map(b => b.id === updated.id ? updated : b));
  }

  return (
    <div className="span-2">
      <div className="mx-auto max-w-5xl">
        <SortBar sortBy={sortBy} setSortBy={(value: SortBy) => setSortBy(value)} />

        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-1">
            <BookFormModal
              book={editingBook}
              onCreate={createBook}
              onUpdate={updateBook}
            />
          </div>

          <div className="md:col-span-2">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sortedBooks.map(b => (
                <BookCard
                  key={b.id}
                  book={b}
                  onDelete={deleteBook}
                  onToggleFav={toggleFav}
                  Editor={setEditingBook}
                />
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
