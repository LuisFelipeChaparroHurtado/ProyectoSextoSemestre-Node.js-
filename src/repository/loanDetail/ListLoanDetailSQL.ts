export const SQL_LIST_LOANDETAIL = {
    LIST: 'SELECT ld.id_loan_detail, ld.return_date,ld.days_arrears, ld.description, ld.delivery_date, b.title_book, l.start_date_loan \
    FROM loan_detail ld \
    INNER JOIN book b \
    ON ld.fk_book = b.id_book\
    INNER JOIN loans l\
    ON ld.fk_loans = l.id_loan'
}