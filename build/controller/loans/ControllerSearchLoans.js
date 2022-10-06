"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchLoansDAO_1 = __importDefault(require("../../daos/loans/SearchLoansDAO"));
const SearchLoansSQL_1 = require("../../repository/loans/SearchLoansSQL");
class ControllerSearchLoan extends SearchLoansDAO_1.default {
    searchLoan(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchLoan.findByIdLoans(SearchLoansSQL_1.SQL_SEARCH_LOAN.CARGAR, parameter, res);
    }
}
const controllerSearchLoan = new ControllerSearchLoan();
exports.default = controllerSearchLoan;
