"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListLoanDetailDAO_1 = __importDefault(require("../../daos/loanDetail/ListLoanDetailDAO"));
const ListLoanDetailSQL_1 = require("../../repository/loanDetail/ListLoanDetailSQL");
class ControllerListLoanDetail extends ListLoanDetailDAO_1.default {
    bringLoanDetail(req, res) {
        ControllerListLoanDetail.getLoanDetail(ListLoanDetailSQL_1.SQL_LIST_LOANDETAIL.LIST, [], res);
    }
}
const controllerListLoanDetail = new ControllerListLoanDetail();
exports.default = controllerListLoanDetail;
