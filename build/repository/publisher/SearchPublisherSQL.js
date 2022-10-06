"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_SEARCH_PUBLISHER = void 0;
exports.SQL_SEARCH_PUBLISHER = {
    CARGAR: 'SELECT  p.id_publisher, p.name_publisher, p.country_publisher, p.number_phone_publisher \
        FROM publisher p\
        WHERE p.id_publisher = $1'
};
