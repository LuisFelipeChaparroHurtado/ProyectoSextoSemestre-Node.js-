"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_SEARCH_ID_LOANDETAIL = void 0;
exports.SQL_SEARCH_ID_LOANDETAIL = {
    CARGAR: 'SELECT b.title_book \
        FROM loan_detail ld\
        INNER JOIN book b \
        ON ld.fk_book = b.id_book \
        WHERE ld.id_loan_detail = $1'
};
