"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const optionConnection_1 = require("./optionConnection");
const var_database_1 = __importDefault(require("../domains/var_database"));
const pgp = (0, pg_promise_1.default)(optionConnection_1.optionsPG);
const pool = pgp(var_database_1.default);
pool.connect()
    .then((conn) => {
    console.log('SUCCESSFUL CONNECTION!, CONNECTION TO ', var_database_1.default.database);
    conn.done();
})
    .catch((myErr) => {
    console.log(myErr);
});
exports.default = pool;
