"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchIdLoanDAO_1 = __importDefault(require("../../daos/loans/SearchIdLoanDAO"));
const SearchIdLoanDAO_2 = require("../../repository/loans/SearchIdLoanDAO");
class ControllerSearchIdLoan extends SearchIdLoanDAO_1.default {
    searchIdLoan(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchIdLoan.findByIdLoan(SearchIdLoanDAO_2.SQL_SEARCH_ID_LOAN.CARGAR, parameter, res);
    }
}
const controllerSearchIdLoan = new ControllerSearchIdLoan();
exports.default = controllerSearchIdLoan;
