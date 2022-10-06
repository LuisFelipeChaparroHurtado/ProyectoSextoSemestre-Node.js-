"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteLoanDetailDAO_1 = __importDefault(require("../../daos/loanDetail/DeleteLoanDetailDAO"));
const DeleteLoanDetailSQL_1 = require("../../repository/loanDetail/DeleteLoanDetailSQL");
class ControllerDeleteLoanDetail extends DeleteLoanDetailDAO_1.default {
    deleteLoanDetail(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerDeleteLoanDetail.deleteByIdLoanDetail(DeleteLoanDetailSQL_1.SQL_DELETE_LOANDETAIL.BORRAR, parameter, res);
    }
}
const controllerDeleteLoanDetail = new ControllerDeleteLoanDetail();
exports.default = controllerDeleteLoanDetail;
