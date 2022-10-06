"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_UPDATE_CUSTOMER = void 0;
exports.SQL_UPDATE_CUSTOMER = {
    UPDATE: 'UPDATE customer SET customer_identification=$2, name_customer=$3, surname_customer=$4, customer_address=$5, number_phone_customer=$6  \
    WHERE id_customer=$1',
};
