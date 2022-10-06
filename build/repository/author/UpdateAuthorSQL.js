"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_UPDATE_AUTHOR = void 0;
exports.SQL_UPDATE_AUTHOR = {
    UPDATE: 'UPDATE author SET name_author=$2, surname_author=$3, nationality_author=$4, description_author=$5 \
    WHERE id_author=$1',
};
