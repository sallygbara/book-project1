import type { Book, BookCreate, BookUpdate } from "../Models/Book";

const BASE_URL = "https://6988b7d1780e8375a688ffb7.mockapi.io/schema"

async function handleJson<T>(res: Response): Promise<T> {
    if (!res.ok) {
        let msg = "Request failed";
        try {
            const data = await res.json();
            if (data?.message) msg = data.message;
        } catch { }
        throw new Error(msg);
    }
    return res.json();
}

export const BooksApi = {
    async getAll(): Promise<Book[]> {
        const res = await fetch(BASE_URL);
        return handleJson<Book[]>(res);
    },

    async create(data: BookCreate): Promise<Book> {
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...data, isFavorite: false }),
        });
        return handleJson<Book>(res);
    },

    async remove(id: string): Promise<void> {
        const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Failed to delete book");
    },

    async update(id: string, data: BookUpdate): Promise<Book> {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return handleJson<Book>(res);
    },

};
