"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteLoansDAO_1 = __importDefault(require("../../daos/loans/DeleteLoansDAO"));
const DeleteLoansSQL_1 = require("../../repository/loans/DeleteLoansSQL");
class ControllerDeleteLoan extends DeleteLoansDAO_1.default {
    deleteLoan(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerDeleteLoan.deleteByIdLoans(DeleteLoansSQL_1.SQL_DELETE_LOAN.BORRAR, parameter, res);
    }
}
const controllerDeleteLoan = new ControllerDeleteLoan();
exports.default = controllerDeleteLoan;
