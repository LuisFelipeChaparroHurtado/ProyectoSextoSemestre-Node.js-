"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateLoansDAO_1 = __importDefault(require("../../daos/loans/CreateLoansDAO"));
const CreateLoansSQL_1 = require("../../repository/loans/CreateLoansSQL");
class ControllerCreateLoans extends CreateLoansDAO_1.default {
    recordLoans(req, res) {
        const startDate = req.body.startDateLoan;
        const descr = req.body.description;
        const fkCust = req.body.fkCustomer;
        const parameter = [startDate, descr, fkCust];
        ControllerCreateLoans.createLoans(CreateLoansSQL_1.SQL_CREATE_LOAN.CONFIRM, CreateLoansSQL_1.SQL_CREATE_LOAN.CREATE, parameter, res);
    }
}
const controllerCreateLoans = new ControllerCreateLoans();
exports.default = controllerCreateLoans;
