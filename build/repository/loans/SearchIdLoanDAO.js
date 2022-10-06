"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_SEARCH_ID_LOAN = void 0;
exports.SQL_SEARCH_ID_LOAN = {
    CARGAR: 'SELECT c.name_customer, c.surname_customer \
        FROM loans l\
        INNER JOIN customer c\
        ON c.id_customer=l.fk_customer\
        WHERE l.id_loan = $1'
};
