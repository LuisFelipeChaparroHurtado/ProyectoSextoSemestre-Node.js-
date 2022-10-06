"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LIST_LOANS = void 0;
exports.SQL_LIST_LOANS = {
    LIST: 'SELECT  l.id_loan, l.start_date_loan, l.description, c.name_customer\
    FROM loans l \
    INNER JOIN customer c \
    ON l.fk_customer = c.id_customer'
};
