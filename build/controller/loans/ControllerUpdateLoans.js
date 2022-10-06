"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UpdateLoansDAO_1 = __importDefault(require("../../daos/loans/UpdateLoansDAO"));
const UpdateLoansSQL_1 = require("../../repository/loans/UpdateLoansSQL");
class ControllerUpdateLoans extends UpdateLoansDAO_1.default {
    updateLoans(req, res) {
        const idLoan = req.body.idLoan;
        const startDate = req.body.startDateLoan;
        const descr = req.body.description;
        const fkCust = req.body.fkCustomer;
        const parameter = [idLoan, startDate, descr, fkCust];
        ControllerUpdateLoans.updateLoans(UpdateLoansSQL_1.SQL_UPDATE_LOANS.UPDATE, parameter, res);
    }
}
const controllerUpdateLoans = new ControllerUpdateLoans();
exports.default = controllerUpdateLoans;
