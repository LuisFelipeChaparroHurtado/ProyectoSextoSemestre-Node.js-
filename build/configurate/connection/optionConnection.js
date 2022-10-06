"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsPG = void 0;
const functionConnection_1 = require("./functionConnection");
exports.optionsPG = {
    receive(data, result, e) { (0, functionConnection_1.camelizeColumns)(data); }
};
