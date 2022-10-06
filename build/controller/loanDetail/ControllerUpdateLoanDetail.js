"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UpdateLoanDetailDAO_1 = __importDefault(require("../../daos/loanDetail/UpdateLoanDetailDAO"));
const UpdateLoanDetailSQL_1 = require("../../repository/loanDetail/UpdateLoanDetailSQL");
class ControllerUpdateLoanDetail extends UpdateLoanDetailDAO_1.default {
    updateLoanDetail(req, res) {
        const id = req.body.idLoanDetail;
        const returnDate = req.body.returnDate;
        const daysA = req.body.daysArrears;
        const descri = req.body.description;
        const delibery = req.body.deliveryDate;
        const fkBooks = req.body.fkBook;
        const fkLoans = req.body.fkLoans;
        const parameter = [id, returnDate, daysA, descri, delibery, fkBooks, fkLoans];
        ControllerUpdateLoanDetail.updateLoanDetail(UpdateLoanDetailSQL_1.SQL_UPDATE_LOANDETAIL.UPDATE, parameter, res);
    }
}
const controllerUpdateLoanDetail = new ControllerUpdateLoanDetail();
exports.default = controllerUpdateLoanDetail;
