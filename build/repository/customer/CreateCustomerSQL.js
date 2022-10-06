"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CREATE_CUSTOMER = void 0;
exports.SQL_CREATE_CUSTOMER = {
    CREATE: 'INSERT INTO customer(customer_identification, name_customer, surname_customer, customer_address, number_phone_customer) VALUES ($1, $2, $3, $4, $5) RETURNING id_customer',
    CONFIRM: 'SELECT COUNT(c.id_customer) AS amount \
        FROM customer c \
        WHERE lower(c.name_customer) = lower($2)'
};
