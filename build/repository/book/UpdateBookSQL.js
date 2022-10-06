"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_UPDATE_BOOK = void 0;
exports.SQL_UPDATE_BOOK = {
    UPDATE: 'UPDATE book SET title_book=$2, date_publication=$3, code_book=$4, isbn_book=$5, fk_publisher=$6  \
    WHERE id_book=$1',
};
