"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_SEARCH_ID_BOOK = void 0;
exports.SQL_SEARCH_ID_BOOK = {
    CARGAR: 'SELECT  p.name_publisher \
        FROM book b\
        INNER JOIN publisher p\
        ON b.fk_publisher = p.id_publisher\
        WHERE b.id_book = $1'
};
