"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_UPDATE_AUTHORS_BOOKS = void 0;
exports.SQL_UPDATE_AUTHORS_BOOKS = {
    UPDATE: 'UPDATE authors_books SET fk_books=$2, fk_author=$3 \
    WHERE id_author_books=$1',
};
