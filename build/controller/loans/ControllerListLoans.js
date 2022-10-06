"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListLoansDAO_1 = __importDefault(require("../../daos/loans/ListLoansDAO"));
const ListLoansSQL_1 = require("../../repository/loans/ListLoansSQL");
class ControllerListLoans extends ListLoansDAO_1.default {
    bringLoans(req, res) {
        ControllerListLoans.getLoans(ListLoansSQL_1.SQL_LIST_LOANS.LIST, [], res);
    }
}
const controllerListLoans = new ControllerListLoans();
exports.default = controllerListLoans;
