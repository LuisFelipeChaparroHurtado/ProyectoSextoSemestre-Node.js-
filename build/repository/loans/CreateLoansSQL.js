"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CREATE_LOAN = void 0;
exports.SQL_CREATE_LOAN = {
    CREATE: 'INSERT INTO loans(start_date_loan, description, fk_customer) VALUES ($1, $2, $3) RETURNING id_loan',
    CONFIRM: 'SELECT COUNT(id_loan) AS amount \
        FROM loans \
        WHERE fk_customer=$3'
};
