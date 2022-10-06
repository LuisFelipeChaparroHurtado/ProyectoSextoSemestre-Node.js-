"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CREATE_AUTHORS_BOOKS = void 0;
exports.SQL_CREATE_AUTHORS_BOOKS = {
    CONFIRM_BOOK: "SELECT COUNT(b.id_book) AS amount \
        FROM book b \
        WHERE b.id_book =$1",
    CONFIRM_AUTHOR: "SELECT COUNT(a.id_author) AS amount \
        FROM author a \
        WHERE a.id_author =$2",
    CREATE: 'INSERT INTO authors_books(fk_book, fk_author) VALUES ($1, $2) RETURNING id_authors_books'
};
