"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_UPDATE_PUBLISHER = void 0;
exports.SQL_UPDATE_PUBLISHER = {
    UPDATE: 'UPDATE publisher SET name_publisher=$2, country_publisher=$3, number_phone_publisher=$4 \
    WHERE id_publisher=$1',
};
