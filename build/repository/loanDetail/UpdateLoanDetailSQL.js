"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_UPDATE_LOANDETAIL = void 0;
exports.SQL_UPDATE_LOANDETAIL = {
    UPDATE: 'UPDATE loan_detail SET return_date=$2, days_arrears=$3, description=$4, delivery_date=$5, fk_book=$6, fk_loans=$7  \
    WHERE id_loan_detail=$1',
};
