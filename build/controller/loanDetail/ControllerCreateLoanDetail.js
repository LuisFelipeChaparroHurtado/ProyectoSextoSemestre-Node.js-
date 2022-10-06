"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateLoanDetailDAO_1 = __importDefault(require("../../daos/loanDetail/CreateLoanDetailDAO"));
const CreateLoanDetailSQL_1 = require("../../repository/loanDetail/CreateLoanDetailSQL");
class ControllerCreateLoanDetail extends CreateLoanDetailDAO_1.default {
    recordLoanDetail(req, res) {
        const returnDate = req.body.returnDate;
        const daysA = req.body.daysArrears;
        const descri = req.body.description;
        const delibery = req.body.deliveryDate;
        const fkBooks = req.body.fkBook;
        const fkLoans = req.body.fkLoans;
        const parameter = [returnDate, daysA, descri, delibery, fkBooks, fkLoans];
        ControllerCreateLoanDetail.createLoanDetail(CreateLoanDetailSQL_1.SQL_CREATE_LOANDETAIL.CONFIRM_BOOK, CreateLoanDetailSQL_1.SQL_CREATE_LOANDETAIL.CREATE, parameter, res);
    }
}
const controllerCreateLoanDetail = new ControllerCreateLoanDetail();
exports.default = controllerCreateLoanDetail;
