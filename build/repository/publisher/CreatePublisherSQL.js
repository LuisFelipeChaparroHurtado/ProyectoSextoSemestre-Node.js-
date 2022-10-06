"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CREATE_PUBLISHER = void 0;
exports.SQL_CREATE_PUBLISHER = {
    CREATE: 'INSERT INTO publisher(name_publisher, country_publisher, number_phone_publisher) VALUES ($1, $2, $3) RETURNING id_publisher',
    CONFIRM: 'SELECT COUNT(id_publisher) AS amount \
        FROM publisher \
        WHERE lower(name_publisher) = lower($1)'
};
