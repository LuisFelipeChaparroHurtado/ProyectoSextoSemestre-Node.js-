"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CREATE_LOANDETAIL = void 0;
exports.SQL_CREATE_LOANDETAIL = {
    CREATE: 'INSERT INTO loan_detail(return_date, days_arrears, description, delivery_date, fk_book, fk_loans) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id_loan_detail',
    CONFIRM_BOOK: 'SELECT COUNT(ld.id_loan_detail) AS amount \
        FROM loan_detail ld \
        WHERE ld.fk_book=$5'
};
