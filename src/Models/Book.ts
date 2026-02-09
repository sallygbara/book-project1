export interface Book {
    id: string;
    title: string;
    author: string;
    description: string;
    coverImage: string;
    isFavorite: boolean;

}

export interface BookCreate {
    title: string;
    author: string;
    description: string;
    coverImage: string;
    isFavorite: boolean;

}

export interface BookUpdate {
    title?: string;
    author?: string;
    isFavorite?: boolean;
    description: string;
    coverImage: string;
}