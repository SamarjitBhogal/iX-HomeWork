import {
    collection, addDoc, 
    query, getDocs,
    doc, deleteDoc
} from 'firebase/firestore';

import {db} from '../firebase/firebase';
import { Book } from '../models/Book';

class LibraryService {
    constructor() {
        this.collection = 'books';
    }

    // create
    async createBook(book) {
        const collectionRef = collection(db, this.collection);
        const docRef = await addDoc(collectionRef, {
            title: book.title,
            author: book.author,
            isbn: book.isbn,
        });

        book.id = docRef.id;
        return book;
    }

    // read
    async readBooks() {
        const q = query(collection(db, this.collection));

        const qSnapshot = await getDocs(q);
        const books = [];

        qSnapshot.forEach((doc) => {
            const data = doc.data();

            books.push(new Book(
                data.title,
                data.author,
                data.isbn,
                doc.id
            ));
        });
        return books;
    }

    // delete

    async deleteBook(bookId) {
        const docRef = doc(db, this.collection, bookId);
        await deleteDoc(docRef);
    }
}

const service = new LibraryService();
export default service;