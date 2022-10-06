export const SQL_SEARCH_CUSTOMER = {
    CARGAR:
        'SELECT c.id_customer, c.customer_identification, c.name_customer, c.surname_customer, c.customer_address, c.number_phone_customer  \
        FROM customer c\
        WHERE c.id_customer = $1'
}