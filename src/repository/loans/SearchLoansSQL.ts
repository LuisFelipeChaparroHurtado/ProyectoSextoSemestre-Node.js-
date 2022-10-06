export const SQL_SEARCH_LOAN = {
    CARGAR:
        'SELECT l.id_loan, l.start_date_loan, l.description, c.name_customer \
        FROM loans l \
        INNER JOIN customer c \
        ON l.fk_customer = c.id_customer\
        WHERE l.id_loan = $1'
}